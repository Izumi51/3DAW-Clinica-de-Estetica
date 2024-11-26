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
            $nome = $_POST["nome"];
            $setor = $_POST["setor"];
            $cpf = $_POST["cpf"];
            $salario = $_POST["salario"];
            
            $comando = "INSERT INTO `funcionario` (`nome`, `setor`, `cpf`, `salario`) VALUES ('" . $nome . "','" . $setor . "','" . $cpf . "','" . $salario ."')";
            $resultado = $conexao->query ($comando);
        }
    }
?>