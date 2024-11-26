<?php
    $servidor = "localhost";
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    // Conexão com o banco de dados
    $conexao = new mysqli($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {
        die("Conexão falhou: " . $conexao->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome_titular = $_POST["titular-cartao"];
        $cpf_cnpj = $_POST["cpf"];
        $numero_cartao = $_POST["numero-cartao"];
        $validade = $_POST["validade-cartao"];
        $codigo_seguranca = $_POST["codigo-cartao"];

        // Inserir os dados no banco
        $sql = "INSERT INTO pagamento (nome_titular, cpf_cnpj, numero_cartao, validade, codigo_seguranca)
                VALUES ('$nome_titular', '$cpf_cnpj', '$numero_cartao', '$validade', '$codigo_seguranca')";

        if ($conexao->query($sql) === TRUE) {
            echo json_encode(["mensagem" => "Pagamento registrado com sucesso."]);
        } else {
            echo json_encode(["mensagem" => "Erro ao registrar pagamento: " . $conexao->error]);
        }
    }

    $conexao->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagamento - Clínica Estética</title>
    <link rel="stylesheet" href="assets/CSS/pagamento.css">
</head>

<body>
    <header class="svg-container">
        <svg viewBox="0 0 1920 253" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-9.1543 -26.665L1920.54 -84.5264L1927.89 160.53C1139.74 334.345 1257.51 12.7409 -0.784692 252.463L-9.1543 -26.665Z" fill="#F8C5D3" fill-opacity="0.79"/>
        </svg>
        <svg viewBox="0 0 1920 219" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H1920V187C1131.33 301.5 1258 59 0 213V0Z" fill="#F6D8E0" fill-opacity="0.7"/>
        </svg>

        <section class="nav-container">    
            <div class="logo">Divine Care</div>
            <nav>
                <a href="home.html">Home</a>
                <a href="sobre.html">Sobre</a>
                <a href="servicos.html">Serviços</a>
            </nav>
        </section> 
    </header>

    <main>
        <section class="informacoes-compra">
            <div class="resumo-compra">
                <div class="foto-compra">Foto da Compra</div>
                <div class="detalhes-preco">
                    <h2>Preço</h2>
                    <p>Serviço X: Data e Hora</p>
                </div>
            </div>
            <div class="informacoes-adicionais">
                <p><strong>Nome do Serviço:</strong></p>
                <p><strong>Profissional Selecionado:</strong></p>
                <p><strong>Tolerância de Atraso: 30 min antes do horário marcado</strong></p>
            </div>
        </section>

        <section class="forma-pagamento">
            <h1><strong>Pagamento confirmado!</strong><h1>           
        </section>

        <section class="mensagem">
            <p><strong>Querido cliente,</strong> 
                É com grande alegria que recebemos a notícia da sua decisão em escolher os nossos serviços para o seu próximo cuidado de beleza. Queremos expressar nossa sincera gratidão pela confiança que você depositou em nós.  
                Estamos ansiosos para recebê-lo(a) em breve e proporcionar uma experiência de beleza excepcional. Cada membro da nossa equipe está comprometido em garantir que você se sinta especial e saia do nosso salão ainda mais radiante. A sua preferência é a maior motivação para nós.  
                Trabalharemos arduamente para superar as suas expectativas. Caso haja algum detalhe específico que você gostaria de discutir ou personalizar, estamos sempre dispostos a adaptar nossos serviços às suas necessidades.  
                Agradecemos novamente por nos escolher como o seu destino de beleza. Mal podemos esperar para servi-lo(a) e garantir que a sua experiência seja memorável.  
                Se precisar de qualquer informação adicional antes da sua visita, não hesite em entrar em contato. Estamos aqui para tornar a sua experiência conosco o mais agradável possível.  
                Atenciosamente,  
                <strong>Divine Beauty</strong>

                Caso precise de algo mais, é só avisar!
                clinica.estetica@gmail.com</p>
        </section>
    </main>


    <footer>
        <div class="footer-content">
            <div>
                <p> (21) XXXX-XXXX </p>
                <p> @clinica.estetica </p>
            </div>
            <div>
                <p>Funcionamento: Seg - Sáb: 07h - 22h</p>
                <p>Aceitamos:</p>
                <img src="assets/images/visa.png" alt="Visa">
                <img src="assets/images/master.png" alt="Mastercard">
            </div>
        </div>
    </footer>
</body>
</html>
