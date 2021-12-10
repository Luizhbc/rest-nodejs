create schema blog;

create table blog.post(
    id serial primary key,
    nome varchar(50) not null,
    content text not null,
    date timestamp default now()
);