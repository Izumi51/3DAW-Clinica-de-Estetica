document.addEventListener("DOMContentLoaded", () => {
    listarFuncionario();
    listarServico();
});

function listarFuncionario() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const objReturnJSON = JSON.parse(this.responseText);
                carregarFiltroFuncionario(objReturnJSON);
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/listarFuncionario.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

function carregarFiltroFuncionario(datas) {
    const container = document.getElementById("listaProfissionais");
    let i = 0;

    datas.forEach(data => { 
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkboxFun' + i;
        checkbox.value = data.nomeFuncionario;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.innerText = data.nomeFuncionario;

        container.appendChild(checkbox);
        container.appendChild(label);
        i+=1;

        container.appendChild(document.createElement('br'));
    });
}

function listarServico() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const objReturnJSON = JSON.parse(this.responseText);
                carregarFiltroServico(objReturnJSON);
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/listarServico.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

function carregarFiltroServico(datas) {
    const container = document.getElementById("listaServicos");
    let i = 0;

    datas.forEach(data => { 
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkboxServ' + i;
        checkbox.value = data.tipo;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.innerText = data.tipo;

        container.appendChild(checkbox);
        container.appendChild(label);
        i+=1;

        container.appendChild(document.createElement('br'));
    });
}

function filtrarPorData() {
    let data = document.getElementById("dataFiltro").value;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/filtrarData.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("data=" + data);
} 

function filtrarPorHora() {
    let hora = document.getElementById("horaFiltro").value;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
            } else {
                console.log("Requisição falhou: " + this.status);
            }
        }
    };

    xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/filtrarHora.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("hora=" + hora);
} 