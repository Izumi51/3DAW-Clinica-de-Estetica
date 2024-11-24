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
        checkbox.className = "checkbox";
        checkbox.id = 'checkboxFun' + i;
        checkbox.value = data.nomeFuncionario;
        checkbox.onchange = function() {
            filtrarPorProfissional(data.nomeFuncionario, checkbox.id);
        };

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
        checkbox.className = 'checkbox';
        checkbox.id = 'checkboxServ' + i;
        checkbox.value = data.tipo;
        checkbox.onchange = function() {
            filtrarPorServico(data.tipo, checkbox.id);
        };

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

    if(data !== "") {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const objReturnJSON = JSON.parse(this.responseText);
                    document.getElementById("cards").innerHTML = "";
                    carregarCards(objReturnJSON);
                } else {
                    console.log("Requisição falhou: " + this.status);
                }
            }
        };
        
        xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/filtrarData.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("data=" + data);
    }
} 

function filtrarPorHora() {
    let hora = document.getElementById("horaFiltro").value;

    if(hora !== "") {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const objReturnJSON = JSON.parse(this.responseText);
                    document.getElementById("cards").innerHTML = "";
                    carregarCards(objReturnJSON);
                } else {
                    console.log("Requisição falhou: " + this.status);
                }
            }
        };

        xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/filtrarHora.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("hora=" + hora);
    }
} 

function carregarCards(datas) {
    const container = document.getElementById("cards");

    datas.forEach(data => {    
        const section = document.createElement("section");
        section.className = 'card';

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.alt = data.altImagem;
        img.src = data.caminho;
        div.appendChild(img);

        const h1 = document.createElement("h1");
        h1.textContent = data.tipo;
        div.appendChild(h1);

        section.appendChild(div);

        const p = document.createElement("p");
        p.textContent = data.descricao;
        section.appendChild(p);

        const hr = document.createElement("hr");
        section.appendChild(hr);

        const h2 = document.createElement("h2");
        h2.textContent = "R$: " + data.preco;
        section.appendChild(h2);

        const button = document.createElement("button");
        button.textContent = 'COMPRE';
        button.className = 'comprar-button';
        button.onclick = () => contratar(data.idServico);
        section.appendChild(button);

        container.appendChild(section);
    });
}

function filtrarPorServico(tipo, id) {
    const checkbox = document.getElementById(id);

    if (checkbox.checked) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const objReturnJSON = JSON.parse(this.responseText);
                    carregarCards(objReturnJSON);
                } else {
                    console.log("Requisição falhou: " + this.status);
                }
            }
        };

        xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/filtrarServico.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("tipo=" + tipo);
    }else{
        document.getElementById("cards").innerHTML = "";
    }
}

function filtrarPorProfissional(profiss, id) {
    const checkbox = document.getElementById(id);

    if (checkbox.checked) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const objReturnJSON = JSON.parse(this.responseText);
                    carregarCards(objReturnJSON);
                } else {
                    console.log("Requisição falhou: " + this.status);
                }
            }
        };

        xmlhttp.open("POST", "http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/filtrarProfissional.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("profiss=" + profiss);
    }else{
        document.getElementById("cards").innerHTML = "";
    }
}

function contratar(id) {
    window.location.href = 'contratar.html';
}