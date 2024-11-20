function incluir() {
    let nome = document.getElementById("nomeFunc").value;
    let setor = document.getElementById("setorFunc").value;
    let cpf = document.getElementById("cpfFunc").value;
    let salario = document.getElementById("salarioFunc").value;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Chegou a resposta OK: " + this.responseText);
            listarTodos();
        } else
        if (this.readyState < 4) {
            console.log("3: " + this.readyState);
        } else
            console.log("Requisicao falhou: " + this.status);
    }

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/funcionario/src/php/incluir.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("nome=" + nome + "&setor=" + setor + "&cpf=" + cpf + "&salario=" + salario);    
}

function alterar(id) {
    document.getElementById("altFunc").style.display = "block";

    let salario = document.getElementById("novoSalario").value;
    let setor = document.getElementById("novoSetor").value;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Chegou a resposta OK: " + this.responseText);
            listarTodos();
        } else
        if (this.readyState < 4) {
            console.log("3: " + this.readyState);
        } else
            console.log("Requisicao falhou: " + this.status);
    }
    console.log(id);

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/funcionario/src/php/alterar.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + id + "&salario=" + salario + "&setor=" + setor);
}

function excluir(id) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Chegou a resposta OK: " + this.responseText);
            listarTodos();
        } else
        if (this.readyState < 4) {
            console.log("3: " + this.readyState);
        } else
            console.log("Requisicao falhou: " + this.status);
    }

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/funcionario/src/php/excluir.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + id);
    console.log("teste");
}

function listarTodos() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById("tabelaFuncionarios").innerHTML = "";
                const objReturnJSON = JSON.parse(this.responseText);
                CriarLinhaTabela(objReturnJSON);
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/funcionario/src/php/listarTodos.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

function CriarLinhaTabela(data) {
    const table = document.getElementById("tabelaFuncionarios");

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

        table.appendChild(tr);
    });
}


function displayIncluir() {
    document.getElementById("includeTable").style.display = "block";
    document.getElementById("showIncludeTable").style.display = "none";
    document.getElementById("hideIncludeTable").style.display = "block";
    document.getElementById("altFunc").style.display = "none";
}

function hideIncluir() {
    document.getElementById("includeTable").style.display = "none";
    document.getElementById("showIncludeTable").style.display = "block";
    document.getElementById("hideIncludeTable").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    listarTodos();
});

function displayAlterar(id) {
    hideIncluir();
    document.getElementById("altFunc").style.display = "flex";
    document.getElementById("altForm").onclick = () => alterar(id);
}