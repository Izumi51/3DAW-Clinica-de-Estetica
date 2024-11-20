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