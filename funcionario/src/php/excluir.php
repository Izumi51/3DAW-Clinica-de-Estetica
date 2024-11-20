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
            $id = $_POST["id"];
            $comando = "DELETE FROM `funcionario` WHERE idFuncionario = " . $id;
            $resultado = $conexao->query($comando);
        }
    }
?>