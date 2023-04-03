const inputBuscarFilme = document.querySelector('#input-buscar-filme');
const btnBuscarFilme = document.querySelector('#btn-buscar-filme');
const listaFilmes =  document.querySelector("#lista-filmes");
const mostrarFilmes = document.querySelector('#mostrar-filme');
const favoritos = document.querySelector('.favoritos');
let filmeFavorito = new Array();

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
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
        const filme = new Filme(
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
            localStorage.setItem("filme", JSON.stringify(filme));
            let strFilme = localStorage.getItem("filme");
            let filmes = null;
            if(strFilme){
                filmes = JSON.parse(strFilme);
                filmeFavorito.push(filmes);
            }
        })
    })
}

const salvarFilmes = (e) =>{
    filmeFavorito.push(JSON.parse(e));
    console.log(filmeFavorito);
}


favoritos.onclick = () =>{
    
    document.querySelector('.home').classList.remove("active");
    document.querySelector('.favoritos').classList.add("active");
} 

document.querySelector('.home').onclick=()=>{
    document.querySelector('.home').classList.add("active");
    document.querySelector('.favoritos').classList.remove("active");
};
