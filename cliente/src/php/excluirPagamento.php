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
            $cpf_cnpj = $_POST["cpf"];
            $comando = "DELETE FROM `pagamento` WHERE `cpf_cnpj` = '" . $cpf_cnpj;
            $resultado = $conexao->query($comando);
        }
    }
?>
