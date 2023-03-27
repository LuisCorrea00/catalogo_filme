let inputBuscarFilme = document.querySelector('#input-buscar-filme');
let btnBuscarFilme = document.querySelector('#btn-buscar-filme');
let listaFilmes =  document.querySelector("#lista-filmes");
let mostrarFilmes = document.querySelector('#mostrar-filme');

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=b8335c46&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item) => {
                console.log(item);
                let filme = new Filme(
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
let listarFilmes = async (filmes) => { 
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

let detalhesFilme = async (id) =>{
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
        console.log(filme.getCardDetalhes());
        mostrarFilmes.style.display = 'flex';
        mostrarFilmes.appendChild(filme.getCardDetalhes());

        document.querySelector("#btnSalvar").onclick = () =>{
            listaFilmes.style.display="flex";
            mostrarFilmes.style.display = 'flex';
            mostrarFilmes.innerHTML = "";
        }
        document.querySelector("#btnFechar").onclick = () => {
            
        }
    })
}

