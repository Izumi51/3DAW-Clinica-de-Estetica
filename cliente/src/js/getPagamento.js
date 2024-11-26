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
                console.log(objReturnJSON);
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/pagamento.php   ");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + idServico);
}

function carregarDadosPag(datas) {
    datas.forEach(data => {
        const resumoCompra = document.getElementById("resumo-compra");
        const informacoesAdicionais = document.getElementById("informacoes-adicionais");


        resumoCompra.innerHTML = `
            <h2>Detalhes do Serviço</h2>
            <p><strong>Serviço:</strong> ${data.tipo}</p>
            <p><strong>Descrição:</strong> ${data.descricao}</p>
            <p><strong>Profissional:</strong> ${data.nomeFuncionario}</p>
            <p><strong>Preço:</strong> R$ ${data.preco}</p>
            <img src="" alt>

            <h2>Preço: R$${data.preco}</h2>
            <p><strong>Serviço: ${data.tipo}</strong> </p>
            <p><strong>Profissional: ${data.nomeFuncionario}</strong></p>
            <p><strong>Data: ${data.dataServico}</strong></p>
            <p><strong>Hora: ${data.horarioInicio} - ${data.horarioFim}</strong></p>
        `;
        
        informacoesAdicionais.innerHTML = `
            <p><strong>Nome do Serviço:</strong> <?php echo $nome_servico; ?></p>
            <p><strong>Profissional Selecionado:</strong> <?php echo $nome_profissional; ?></p>
            <p><strong>Tolerância de Atraso: 30 min antes do horário marcado</strong></p>   
        `;
    });
}

resumo-compra
<div class="foto-compra">Foto da Compra</div>
                <div class="detalhes-preco">
                    <h2>Preço: R$ <?php echo number_format($preco, 2, ',', '.'); ?></h2>
                    <p><strong>Serviço:</strong> <?php echo $nome_servico; ?></p>
                    <p><strong>Profissional:</strong> <?php echo $nome_profissional; ?></p>
                    <p><strong>Data e Hora:</strong> <?php echo date("d/m/Y", strtotime($data_servico)) . " às " . $horario_inicio; ?></p>
                </div>


informacoes-adicionais
<p><strong>Nome do Serviço:</strong> <?php echo $nome_servico; ?></p>
<p><strong>Profissional Selecionado:</strong> <?php echo $nome_profissional; ?></p>
<p><strong>Tolerância de Atraso: 30 min antes do horário marcado</strong></p>   