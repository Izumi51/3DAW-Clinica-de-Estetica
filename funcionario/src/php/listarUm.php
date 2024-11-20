<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "alunos";

    $conexao = new mysqli ($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die ("Conexao Falhou!");
    } else {
        if ($_SERVER["REQUEST_METHOD"] == "POST") 
        {
            $matricula = $_POST["matricula"];

            $comando = "SELECT * from `aluno` WHERE matricula = " . $matricula;

            $resultado = $conexao->query($comando);
            $aluno = $resultado->fetch_assoc();

            if ($resultado==true){
                $jAluno = json_encode($aluno);
            } else {
                $jAluno = json_encode("erro");
            }

            echo $jAluno;
        }
        else {
            echo "erro";
        }
    }
?>