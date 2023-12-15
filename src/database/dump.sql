create database usuarios;


create table usuario(
  id serial primary key,
  nome text not null,
  email text unique not null,
  senha text not null,
  token text not null,
)
 

-- insert into usuario (nome, email, senha) values ( 'tayane', 'tayane@gmail.com' , 12345678);