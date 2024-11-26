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
            $nome_titular = $_POST["titularCartao"];
            $cpf_cnpj = $_POST["cpf"];
            $numero_cartao = $_POST["numeroCartao"];
            $validade = $_POST["validadeCartao"];
            $codigo_seguranca = $_POST["codigoCartao"];

            $comando = "INSERT INTO `pagamento` (`nome_titular`, `cpf_cnpj`, `numero_cartao`, `validade`, `codigo_seguranca`)
                        VALUES ('" . $nome_titular . "','" . $cpf_cnpj . "','" . $numero_cartao . "','" . $validade . "','" . $codigo_seguranca. "')";
            $resultado = $conexao->query ($comando);
        }
    }
?>