class Ator
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Diretor
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Filme
{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao, btnDetalhes){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.cartaz=cartaz;
        this.sinopse=sinopse;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes = null;
    }
    setBtnDetalhes = () =>{
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("style","margin-top: 1rem;");
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
        this.btnDetalhes.setAttribute("class","btn btn-dark btn-sm");
        return this.btnDetalhes;
    }
    getBtnDetalhes = () =>{
        return this.btnDetalhes;
    }
    getCard = async () => {
        const card = document.createElement("div");
        card.setAttribute("class","card");
        const imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class","card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        const hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        const divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("Style","display:flex; justify-content:space-around;");
        const divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divDetalhes.appendChild(divAnoProducao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
       
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }
    getCardDetalhes = () => {
        const cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute("class","cardDetalhes");
        cardDetalhes.setAttribute("style","display:flex; padding: 5rem;");
        const imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class","card-img-detalhes");
        imgDetalhes.setAttribute("src",this.cartaz);
        const cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class","card-body-detalhes");
        cardBodyDetalhes.setAttribute("style","margin-left: 2rem;");
        const hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        hCardTitle.setAttribute("style", "text-align:center;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        const divDetalhes = document.createElement("div");
        const divAno = document.createElement("div");
        const divGenero = document.createElement("div");
        const divDuracao = document.createElement("div");
        const divDirecao = document.createElement("div");
        const divElenco = document.createElement("div");
        const divAvaliacao = document.createElement("div");
        const divSinopse = document.createElement("div");
       
        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duracao));
        divDirecao.appendChild(document.createTextNode(`Direção: ${this.direcao}`));
        divElenco.appendChild(document.createTextNode(`Elenco: ${this.elenco}`));
        divAvaliacao.appendChild(document.createTextNode(`Avaliação: ${this.avaliacao}`));
        divSinopse.appendChild(document.createTextNode(`Sinopse: ${this.sinopse}`));
       
        divDetalhes.appendChild(divAno);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divAvaliacao);
        divDetalhes.appendChild(divSinopse);

        cardDetalhes.appendChild(imgDetalhes);
        cardDetalhes.appendChild(cardBodyDetalhes);

        cardBodyDetalhes.appendChild(hCardTitle);
        cardBodyDetalhes.appendChild(divDetalhes)

        const btnSalvar = document.createElement('button');
        btnSalvar.appendChild(document.createTextNode('Favoritar'));
        btnSalvar.setAttribute("id","btnSalvar");
        btnSalvar.setAttribute("class","btn btn-dark btn-sm");
        btnSalvar.setAttribute("style","margin-top: 2rem;");
        cardBodyDetalhes.appendChild(btnSalvar);

        const btnExcluir = document.createElement('button');
        btnExcluir.appendChild(document.createTextNode('Excluir'));
        btnExcluir.setAttribute("id","btnExcluir");
        btnExcluir.setAttribute("class","btn btn-danger btn-sm");
        btnExcluir.setAttribute("style","margin-top: 2rem; margin-left: 1rem;");
        cardBodyDetalhes.appendChild(btnExcluir);

        const btnFechar = document.createElement('button');
        btnFechar.setAttribute("id","btnFechar");
        btnFechar.setAttribute("style","position: absolute; top: 8rem; right: 10rem;");
        btnFechar.setAttribute("type","button");
        btnFechar.setAttribute("class","btn-close"); 
        btnFechar.setAttribute("aria-label","Close")
        cardBodyDetalhes.appendChild(btnFechar);

        const btnEditar = document.createElement('button');
        btnEditar.appendChild(document.createTextNode('Editar'));
        btnEditar.setAttribute("id","btnEditar");
        btnEditar.setAttribute("class","btn btn-success btn-sm");
        btnEditar.setAttribute("style","margin-top: 2rem; margin-left: 1rem;");
        cardBodyDetalhes.appendChild(btnEditar);

        return cardDetalhes;
    }
    getForms = () =>{
        const forms = Document.createElement("form");
        const divAno = document.createElement("div");
        const divGenero = document.createElement("div");
        const divDuracao = document.createElement("div");
        const divDirecao = document.createElement("div");
        const divElenco = document.createElement("div");
        const divAvaliacao = document.createElement("div");
        const divSinopse = document.createElement("div");
        const labelDetalhes = document.createElement("label");
        const labelAno = document.createElement("label");
        const labelGenero = document.createElement("label");
        const labelDuracao = document.createElement("label");
        const labelDirecao = document.createElement("label");
        const labelElenco = document.createElement("label");
        const labelAvaliacao = document.createElement("label");
        const labelSinopse = document.createElement("div");
        
    }   
}