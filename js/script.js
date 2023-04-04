const inputBuscarFilme = document.querySelector('#input-buscar-filme');
const btnBuscarFilme = document.querySelector('#btn-buscar-filme');
const listaFilmes =  document.querySelector("#lista-filmes");
const mostrarFilmes = document.querySelector('#mostrar-filme');
const favoritos = document.querySelector('.favoritos');

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        document.querySelector('.home').classList.add("active");
        document.querySelector('.favoritos').classList.remove("active");
        const filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=b8335c46&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item) => {
                console.log(item);
                const filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null,
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    mostrarFilmes.style.display = 'none';
    return false;
}
const listarFilmes = async (filmes) => { 
    listaFilmes.style.display = 'flex';
    listaFilmes.innerHTML = "";
    mostrarFilmes.style.display = 'flex';
    mostrarFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick= async()=>{
                listaFilmes.style.display = 'none';
                detalhesFilme(filme.id);
            }
        })
    }
}

const detalhesFilme = async (id) =>{
    fetch("http://www.omdbapi.com/?apikey=b8335c46&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        );
        mostrarFilmes.style.display = 'flex';
        mostrarFilmes.appendChild(filme.getCardDetalhes());

        document.querySelector("#btnFechar").onclick = () =>{
            listaFilmes.style.display="flex";
            mostrarFilmes.style.display = 'none';
            mostrarFilmes.innerHTML = "";
        }
        document.querySelector("#btnSalvar").addEventListener("click", () => {
            const strFilme = localStorage.getItem("favoritos");
            let filmes = null;
            let flag = 0;
            if(strFilme){
                filmes = JSON.parse(strFilme);
                filmes.forEach((item)=>{
                    if(item.id === filme.id){
                        // mostrarFilmes.appendChild(modalWindow(filme));            
                        flag++;
                        return false;
                    }
                });
                filmes.push(filme);
            }
            else{
                filmes=[filme];
            }
            if(flag === 0){
                filmes = JSON.stringify(filmes);
                localStorage.setItem("favoritos",filmes);
            }
            
        })
        document.querySelector("#btnExcluir").onclick = () =>{
            const strFilme = localStorage.getItem("favoritos");
            let filmes = JSON.parse(strFilme);
            for(i=0;i<filmes.length;i++){
                if(filmes[i].id === filme.id){
                    let fav = filmes.splice(i,1);
                    // console.log(filmes);
                    localStorage.setItem("favoritos",JSON.stringify(filmes));
                }
            }
        }
        document.querySelector('#btnEditar').onclick = () =>{
            
        };
    })
}

// const modalWindow = () =>{
//     const div = document.createElement("div");
//     div.setAttribute("style","position: absolute; top: 20rem; left:37rem; width: 30%; height: 5rem; background-color: white; padding: 1rem; border-radius: 40px;box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3); z-index: 10;");
//     const h1 = document.createElement("h1");
//     h1.setAttribute("style","font-size: 2rem; margin-bottom: 2rem; text-align: center;");
//     h1.appendChild(document.createTextNode("Filme já favoritado!"));
//     div.appendChild(h1);

//     document.querySelector('.overlay').classList.remove('hidden');

//     return div;
// }

const listarFavoritos = () =>{
    let strFavoritos = localStorage.getItem("favoritos");
    let filmeFav = JSON.parse(strFavoritos);
    let filmes = new Array();
    filmeFav.forEach((item) =>{
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
        filmes.push(filme);
    });
    listarFilmes(filmes);
}  

favoritos.onclick = () =>{
    listarFavoritos();
    document.querySelector('.home').classList.remove("active");
    document.querySelector('.favoritos').classList.add("active");
} 

document.querySelector('.home').onclick=()=>{
    listaFilmes.style.display="flex";
    mostrarFilmes.style.display = 'none';
    mostrarFilmes.innerHTML = "";
    document.querySelector('.home').classList.add("active");
    document.querySelector('.favoritos').classList.remove("active");
};
