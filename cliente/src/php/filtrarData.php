<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    $conexao = new mysqli ($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die ("Conexao Falhou!");
    } else {   
        $data = $_POST["data"];
        $data = '2024-11-25'; // apagar
        $comando = "SELECT s.* FROM servico s 
                    JOIN data d ON s.idServico = d.idServico
                    JOIN horario h ON d.idData = h.idData
                    WHERE h.status = 'Disponível' 
                    AND d.dataServico = '" . $data ."'";

        $resultado = $conexao->query($comando);

        $funcionarios[] = array();
        $i = 0;
        While ($linha = $resultado->fetch_assoc()){
            $funcionarios[$i] = $linha;
            $i++;
        }

        if ($resultado == true){
            $retorno=json_encode($funcionarios);
        } else {
            $retorno=json_encode("erro");
        }

        echo $retorno;
    }
?>