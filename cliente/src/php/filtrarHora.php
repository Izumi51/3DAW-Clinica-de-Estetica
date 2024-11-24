<?php
    $servidor = "localhost"; 
    $user = "root";
    $senha = "";
    $database = "funcionarios";

    $conexao = new mysqli ($servidor, $user, $senha, $database);

    if ($conexao->connect_error) {  
        die ("Conexao Falhou!");
    } else {   
        $hora = $_POST["hora"];

        $comando = "SELECT DISTINCT s.* FROM servico s 
                    JOIN data d ON s.idServico = d.idServico
                    JOIN horario h ON d.idData = h.idData 
                    WHERE h.status = 'Disponível' AND '" . $hora ."' BETWEEN h.horarioInicio AND h.horarioFim";

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