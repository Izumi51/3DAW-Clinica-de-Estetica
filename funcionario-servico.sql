-- FUNCIONARIO
CREATE TABLE funcionario (
    idFuncionario 	INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome 			VARCHAR(50) NOT NULL,
	setor 			VARCHAR(20),
    cpf 			DECIMAL(11) NOT NULL,
    salario			DOUBLE(10, 2)
);

INSERT INTO funcionario (nome, setor, cpf, salario) VALUES 
('João Santos', 'Recepção', 12345678901, 3200.50),
('Maria Oliveira', 'Estética Facial', 98765432109, 4500.00),
('Carla Mendes', 'Estética Corporal', 45612378965, 4300.75),
('Lucas Pereira', 'Manicure/Pedicure', 78965412345, 3000.90),
('Fernanda Costa', 'Recepção', 32198765432, 3400.30),
('Ana Sousa', 'Estética Corporal', 65412398765, 4100.60),
('Paulo Lima', 'Estética Facial', 12378945698, 4800.20),
('Juliana Rocha', 'Vendas/Marketing', 98712345678, 3700.00),
('Ricardo Mendes', 'Limpeza/Higienização', 45678912321, 2800.40),
('Mariana Silva', 'Gerência', 78912365498, 5200.50);

-- SERVICO DATA E HORARIO
CREATE TABLE servico (
    idServico       INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tipo            VARCHAR(15),
    altImagem       VARCHAR(255),
    caminho         VARCHAR(255),
    nomeFuncionario VARCHAR(30),
    preco           DOUBLE(10, 2)            
);

CREATE TABLE data (
    idData          INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    idServico       INTEGER,  
    dataServico     DATE, 
    descricao       VARCHAR(255),
    FOREIGN KEY (idServico) REFERENCES servico(idServico) 
);

CREATE TABLE horario (
    idHorario       INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    idData          INTEGER,         
    horarioInicio   TIME,
    horarioFim      TIME,            
    status          VARCHAR(20),     -- Status do horário 'Disponível', 'Agendado'
    FOREIGN KEY (idData) REFERENCES data(idData)
);

INSERT INTO servico (tipo, altImagem, caminho, nomeFuncionario, preco)
VALUES ('Corte de cabelo', 'corte.jpg', '/imagens/corte.jpg', 'João Silva', 50.00);

INSERT INTO data (idServico, dataServico, descricao)
VALUES (1, '2024-11-23', 'Serviço de corte de cabelo');

INSERT INTO horario (idData, horarioInicio, horarioFim, status)
VALUES (1, '09:00:00', '09:30:00', 'Disponível'),
       (1, '09:30:00', '10:00:00', 'Disponível'),
       (1, '10:00:00', '10:30:00', 'Disponível');

-- Consultar todos os horários disponíveis para um serviço específico em uma data:
SELECT h.horarioInicio, h.horarioFim, h.status
FROM horario h
JOIN data d ON h.idData = d.idData
JOIN servico s ON d.idServico = s.idServico
WHERE s.tipo = 'Corte de cabelo' AND d.dataServico = '2024-11-23' AND h.status = 'Disponível';

-- Marcar um horário como "Agendado" (por exemplo, para o horário das 09:00 às 09:30): 
UPDATE horario
SET status = 'Agendado'
WHERE idData = 1 AND horarioInicio = '09:00:00';

-- Inserir dados na tabela servico
INSERT INTO servico (tipo, altImagem, caminho, nomeFuncionario, preco)
VALUES
    ('Corte de cabelo', 'corte.jpg', 'caminho/corte', 'Carlos Silva', 50.00),
    ('Manicure', 'manicure.jpg', 'caminho/manicure', 'Ana Costa', 40.00),
    ('Massagem', 'massagem.jpg', 'caminho/massagem', 'Mariana Alves', 120.00),
    ('Pedicure', 'pedicure.jpg', 'caminho/pedicure', 'Luciana Souza', 45.00),
    ('Hidratação capilar', 'hidratacao.jpg', 'caminho/hidratacao', 'Carlos Silva', 80.00),
    ('Design de sobrancelha', 'sobrancelha.jpg', 'caminho/sobrancelha', 'Ana Costa', 30.00),
    ('Depilação', 'depilacao.jpg', 'caminho/depilacao', 'Mariana Alves', 60.00),
    ('Barba', 'barba.jpg', 'caminho/barba', 'Carlos Silva', 25.00),
    ('Maquiagem', 'maquiagem.jpg', 'caminho/maquiagem', 'Luciana Souza', 100.00),
    ('Corte infantil', 'corte_infantil.jpg', 'caminho/corte_infantil', 'Mariana Alves', 40.00);

-- Inserir dados na tabela data (relacionando com os serviços já inseridos)
INSERT INTO data (idServico, dataServico, descricao)
VALUES
    (1, '2024-11-25', 'Corte de cabelo masculino'),
    (2, '2024-11-26', 'Manicure para noivas'),
    (3, '2024-11-27', 'Massagem relaxante'),
    (4, '2024-11-28', 'Pedicure estética'),
    (5, '2024-11-29', 'Hidratação capilar intensa'),
    (6, '2024-11-30', 'Design de sobrancelhas para formatura'),
    (7, '2024-12-01', 'Depilação completa'),
    (8, '2024-12-02', 'Corte de barba e cabelo'),
    (9, '2024-12-03', 'Maquiagem para evento'),
    (10, '2024-12-04', 'Corte infantil para meninos');

-- Inserir dados na tabela horario (relacionando com as datas já inseridas)
INSERT INTO horario (idData, horarioInicio, horarioFim, status)
VALUES
    (1, '08:00:00', '09:00:00', 'Disponível'),
    (2, '09:30:00', '10:30:00', 'Disponível'),
    (3, '11:00:00', '12:00:00', 'Disponível'),
    (4, '13:00:00', '14:00:00', 'Disponível'),
    (5, '14:30:00', '15:30:00', 'Disponível'),
    (6, '16:00:00', '17:00:00', 'Disponível'),
    (7, '17:30:00', '18:30:00', 'Disponível'),
    (8, '19:00:00', '20:00:00', 'Disponível'),
    (9, '20:30:00', '21:30:00', 'Disponível'),
    (10, '22:00:00', '23:00:00', 'Disponível');
