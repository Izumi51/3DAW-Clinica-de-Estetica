function contratar(id) {
    // Verifique se o localStorage está disponível
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('idServico', id); // Salvar o ID do serviço no localStorage
        window.location.href = 'contratar.html'; // Redirecionar para a página contratar.html
    } else {
        alert("Seu navegador não suporta armazenamento local. Atualize-o!");
    }
}

// Obtém o ID do serviço do localStorage
const idServico = localStorage.getItem("idServico");

if (!idServico) {
    alert("Nenhum serviço selecionado. Retorne à página inicial.");
} else {
    // Faz a requisição ao PHP
    fetch(`http://localhost/3DAW-Clinica-de-Estetica/cliente/src/php/getServico.php?idServico=${idServico}`)
        .then(response => {
            console.log("Status da resposta:", response.status); // Para depuração
            if (!response.ok) {
                throw new Error("Erro ao conectar com o servidor. Status: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dados recebidos:", data); // Para depuração
            if (data.error) {
                alert(data.error); // Exibe o erro retornado pelo servidor
            } else {
                // Atualiza o conteúdo da página com os dados do serviço
                const detalhesServico = document.querySelector('.detalhes-servico');
                detalhesServico.innerHTML = `
                    <h2>Detalhes do Serviço</h2>
                    <p><strong>Serviço:</strong> ${data.tipo}</p>
                    <p><strong>Descrição:</strong> ${data.descricao}</p>
                    <p><strong>Profissional:</strong> ${data.nomeFuncionario}</p>
                    <p><strong>Preço:</strong> R$ ${data.preco.toFixed(2)}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Erro ao buscar os dados do serviço:", error);
            alert("Houve um problema ao carregar os dados do serviço.");
        });
}
