document.addEventListener("DOMContentLoaded", () => {
    listarServico();
});

function listarServico() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                // document.getElementById("listaServicos").innerHTML = "";
                const objReturnJSON = JSON.parse(this.responseText);
                carregarFiltro(objReturnJSON, "listaServicos");
                carregarFiltro(objReturnJSON, "listaProfissionais");
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/funcionario/src/php/listarTodos.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

function CriarLinhaTabela(data, id) {
    const list = document.getElementById(id);

    data.forEach(funcionario => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = funcionario.idFuncionario;
        tr.appendChild(tdId);

        const tdNome = document.createElement("td");
        tdNome.textContent = funcionario.nome;
        tr.appendChild(tdNome);

        const tdSetor = document.createElement("td");
        tdSetor.textContent = funcionario.setor;
        tr.appendChild(tdSetor);

        const tdCpf = document.createElement("td");
        tdCpf.textContent = funcionario.cpf;
        tr.appendChild(tdCpf);
        
        const tdSalario = document.createElement("td");
        tdSalario.textContent = funcionario.salario;
        tr.appendChild(tdSalario);

        const tdExcluir = document.createElement("td");
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.className = "btn-excluir";
        btnExcluir.onclick = () => excluir(funcionario.idFuncionario);
        tdExcluir.appendChild(btnExcluir);
        tr.appendChild(tdExcluir);

        const tdAlterar = document.createElement("td");
        const btnAlterar = document.createElement("button");
        btnAlterar.textContent = "Alterar";
        btnAlterar.className = "btn-alterar";
        btnAlterar.onclick = () => displayAlterar(funcionario.idFuncionario);
        tdAlterar.appendChild(btnAlterar);
        tr.appendChild(tdAlterar);

        list.appendChild(tr);
    });
}

function loadFilter(id) {
    document.getElementById(id).innerHTML += "<p>testando</p>"
    
}

/* <input type="checkbox" id="hobby1" name="hobby" value="reading">
<label for="hobby1">Reading</label><br> */