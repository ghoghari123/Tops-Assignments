create table restaurants(
	id int auto_increment primary key,
    name varchar(100),
    location varchar(100),
    rating decimal(2,1)
);
alter table restaurants add average_cost int;
describe restaurants;
drop table restaurants;


create table playlists (
	playlist_id int auto_increment primary key,
    title varchar(100),
    created_by varchar(50),
    created_at date
);
