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
            $setor = $_POST["setor"];
            $salario = $_POST["salario"];
            $id = $_POST["id"];

            $comando = "UPDATE `funcionario` SET `setor` = '" . $setor . "', `salario` = '" . $salario ."' WHERE `idFuncionario` = '" . $id . "'";
            $resultado = $conexao->query ($comando);
        }
    }
?>