INSERT INTO moneda (id, nombre, codigoiso, simbolo, estado, terminal, usuario) VALUES (1, 'Soles', 'PEN', 'S/.', '1', '127.0.0.1', 1);
INSERT INTO moneda (id, nombre, codigoiso, simbolo, estado, terminal, usuario) VALUES (2, 'Dolares', 'USD', '$', '1', '127.0.0.1', 1);
INSERT INTO moneda (id, nombre, codigoiso, simbolo, estado, terminal, usuario) VALUES (3, 'Euros', 'EUR', '€.', '1', '127.0.0.1', 1);
INSERT INTO moneda (id, nombre, codigoiso, simbolo, estado, terminal, usuario) VALUES (4, 'Libra esterlina', 'GBP', '£.', '1', '127.0.0.1', 1);


INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (1, 1, 2, 0.25, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (2, 1, 3, 0.22, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (3, 1, 4, 0.18, '1', '127.0.0.1', 1);

INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (4, 2, 1, 4.00, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (5, 2, 3, 0.89, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (6, 2, 4, 0.74, '1', '127.0.0.1', 1);

INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (7, 3, 1, 4.54, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (8, 3, 2, 1.13, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (9, 3, 4, 0.84, '1', '127.0.0.1', 1);

INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (10, 4, 1, 5.41, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (11, 4, 2, 1.19, '1', '127.0.0.1', 1);
INSERT INTO tipocambio(id, monedaorigen, monedadestino, tasacambio, estado, terminal, usuario) VALUES (12, 4, 3, 1.34, '1', '127.0.0.1', 1);


INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('melvin','$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86',true, 'Melvin Alexis', 'Diaz Rojas','melvin@prueba.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$qGyDfZLBB.SgLv7GCP3uZe3oM38fVtr58T1iZ1LNOvO61loNUAAaK',true, 'Admin', 'Admin','admin@gmail.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 1);