drop database BurgersDB;
create database if not exists BurgersDB;
use BurgersDB;

create table Burgers
(   id              integer
                    not null
                    auto_increment
                    not null,
                            
    burger_name     varchar(50)
                    not null,
    
    devoured        boolean
                    default false,

    createdAt       timestamp
                    not null
                    default CURRENT_TIMESTAMP,
    
    primary key (id)
);
