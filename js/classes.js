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
        this.btnDetalhes.appendChild(document.createTextNode("detalhes"))
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
        return this.btnDetalhes;
    }
    getBtnDetalhes = () =>{
        return this.btnDetalhes;
    }
    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class","card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("Style","display:flex; justify-content:space-around;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style","flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
       
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }
    getCardDetalhes = () => {
        let cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute("class","cardDetalhes");
        cardDetalhes.setAttribute("style","display:flex; padding: 2rem;");
        let imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class","card-img-detalhes");
        imgDetalhes.setAttribute("src",this.cartaz);
        let cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class","card-body-detalhes");
        cardBodyDetalhes.setAttribute("style","margin-left: 2rem;");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        hCardTitle.setAttribute("style", "text-align:center;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("Style","display:flex; justify-content:space-around; flex-direction: column; align-items: center;");
        let divAno = document.createElement("div");
        let divGenero = document.createElement("div");
        let divDuracao = document.createElement("div");
        let divDirecao = document.createElement("div");
        let divElenco = document.createElement("div");
        let divAvaliacao = document.createElement("div");
        let divSinopse = document.createElement("div");
       
        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duraca));
        divDirecao.appendChild(document.createTextNode(this.direcao));
        divElenco.appendChild(document.createTextNode(this.elenco));
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));
        divSinopse.appendChild(document.createTextNode(this.sinopse));
       
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

        let btnSalvar = document.createElement('button');
        btnSalvar.appendChild(document.createTextNode('Favoritar'));
        btnSalvar.setAttribute("id","btnSalvar");
        divDetalhes.appendChild(btnSalvar);

        let btnFechar = document.createElement('button');
        btnFechar.appendChild(document.createTextNode('Fechar'));
        btnFechar.setAttribute("id","btnFechar");
        divDetalhes.appendChild(btnFechar);

        return cardDetalhes;
    }   
}