drop database BurgersDB;
create database if not exists BurgersDB;
use BurgersDB;

create table Burgers
(   id              integer         not null
                                    auto_increment
                                    not null,
                            
    burger_name     varchar(50)     not null,
    
    devoured        boolean         default false,
    
    primary key (id)
);
