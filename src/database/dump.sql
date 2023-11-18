create database Usuarios;

create table usuario(
  id serial primary key,
  nome text not null,
  email text unique not null,
  senha varchar(50) not null
)


-- insert into usuario (nome, email, senha) values ( 'tayane', 'tayane@gmail.com' , 12345678);