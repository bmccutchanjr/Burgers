use BurgersDB;

insert into burgers (burger_name, devoured)
values ("Big Mac", false),
       ("Royale with Cheese", false),
       ("Tofu and Portobello with bacon", false),
       ("Whopper", true);

select * from burgers;