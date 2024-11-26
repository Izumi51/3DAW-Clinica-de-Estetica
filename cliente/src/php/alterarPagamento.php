<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    $conexao = new mysqli ($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die ("Conexao Falhou!");
    } else {   
        if ($_SERVER["REQUEST_METHOD"] == "POST") 
        {
            $nome_titular = $_POST["titular-cartao"];
            $cpf_cnpj = $_POST["cpf"];
            $numero_cartao = $_POST["numero-cartao"];
            $validade = $_POST["validade-cartao"];
            $codigo_seguranca = $_POST["codigo-cartao"];

            $comando = "UPDATE `pagamento` SET `numero_cartao` = '" . $numero_cartao . "', `validade` = '" . $validade ."', `codigo_seguranca` = '" . $codigo_seguranca . "' WHERE `cpf_cnpj` = '" . $cpf_cnpj . "'";
            $resultado = $conexao->query ($comando);
        }
    }
?>