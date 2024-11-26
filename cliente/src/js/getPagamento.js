document.addEventListener("DOMContentLoaded", () => {
    pag();
});

function pag() {
    const idServico = localStorage.getItem("idServico");

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const objReturnJSON = JSON.parse(this.responseText);
                carregarDadosPag(objReturnJSON);
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/pagamento.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + idServico);
}

function carregarDadosPag(datas) {
    datas.forEach(data => {
        const resumoCompra = document.getElementById("resumo-compra");

        resumoCompra.innerHTML = `
            <img src="${data.caminho}" alt="${data.altImagem} style="width: 0; height: 0;"">
            <h2>Preço: R$${data.preco}</h2>
            <p><strong>Serviço: </strong>${data.tipo}</p>
            <p><strong>Profissional: </strong>${data.nomeFuncionario}</p>
            <p><strong>Data: </strong>${data.dataServico}</p>
            <p><strong>Hora: </strong>${data.horarioInicio} - ${data.horarioFim}</p>
            <p><strong>Profissional Selecionado: </strong>${data.nomeFuncionario}</p>
            <p><strong>Tolerância de Atraso: </strong>30 min antes do horário marcado</p>   
        `;
    });
}

function processarPagamento() {
    const idServico = localStorage.getItem("idServico");
    const titularCartao = localStorage.getItem("titular-cartao");
    const cpf = localStorage.getItem("cpf");
    const numeroCartao = localStorage.getItem("numero-cartao");
    const validadCartao = localStorage.getItem("validade-cartao");
    const codigoCartao = localStorage.getItem("codigo-cartao");

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/processarPagamento.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + idServico + "&titularCartao=" + titularCartao + "&cpf=" + cpf + "&numeroCartao=" + numeroCartao + "&validadCartao=" + validadCartao + "&codigoCartao=" + codigoCartao);
}