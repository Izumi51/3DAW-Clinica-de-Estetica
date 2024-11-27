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
            $nome_titular = $_POST["titularCartao"];
            $cpf_cnpj = $_POST["cpf"];
            $numero_cartao = $_POST["numeroCartao"];
            $validade = $_POST["validadeCartao"];
            $codigo_seguranca = $_POST["codigoCartao"];

            $comando = "INSERT INTO `pagamento` (`nome_titular`, `cpf_cnpj`, `numero_cartao`, `validade`, `codigo_seguranca`)
                        VALUES ('" . $nome_titular . "','" . $cpf_cnpj . "','" . $numero_cartao . "','" . $validade . "','" . $codigo_seguranca. "')";
            $conexao->query ($comando);
                
            $comando = "SELECT 
                        d.dataServico,
                        h.horarioInicio,
                        h.horarioFim
                        FROM 
                            servico s
                        JOIN 
                            data d ON s.idServico = d.idServico
                        JOIN 
                            horario h ON d.idData = h.idData
                        WHERE s.idServico = '" . $id . "'";
            $resultado = $conexao->query($comando);

            $servico[] = array();
            $linha = $resultado->fetch_assoc();
            
            $comando = "INSERT INTO `agendamento`(`idServico`, `dataAgendada`, `horaInicio`, `horarioFim`) 
                        VALUES ('" . $id . "','" . $linha['dataServico'] . "','" . $linha['horarioInicio'] . "','" . $linha['horarioFim'] . "')";
            $conexao->query ($comando);

            $comando = "UPDATE `horario` SET status = 'Agendado'
                        WHERE idData = '" . $id . "'";
            $conexao->query ($comando);
        }
    }
?>