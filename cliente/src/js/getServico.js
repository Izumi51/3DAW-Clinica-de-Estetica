document.addEventListener("DOMContentLoaded", () => {
        serv();
});

function serv() {
    const idServico = localStorage.getItem("idServico");

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const objReturnJSON = JSON.parse(this.responseText);
                carregarDados(objReturnJSON);
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };
    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/getServico.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + idServico);
}

function carregarDados(datas) {
    datas.forEach(data => {
        const detalhesServico = document.getElementById("detalhes-servico");

        detalhesServico.innerHTML = `
            <h2>Detalhes do Serviço</h2>
            <p><strong>Serviço:</strong> ${data.tipo}</p>
            <p><strong>Descrição:</strong> ${data.descricao}</p>
            <p><strong>Profissional:</strong> ${data.nomeFuncionario}</p>
            <p><strong>Preço:</strong> R$ ${data.preco}</p>
        `;
    });
}
