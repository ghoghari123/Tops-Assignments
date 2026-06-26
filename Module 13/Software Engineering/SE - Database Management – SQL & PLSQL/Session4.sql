create table playlist (
	id int auto_increment primary key,
    song_name varchar(100),
    artist varchar(50),
    genre varchar(50),
    play_count int
);
insert into playlist(song_name,artist,genre,play_count) values 
('Blinding Lights','The Weeknd','Pop',250),
('Shape of You','Ed Sheeran','Pop',180),
('God''s Plan','Drake','Hip-Hop',150),
('Believer','Imagine Dragons','Rock',120),
('HUMBLE','Kendrick Lamar','Hip-Hop',90);
select song_name,artist as Singer from playlist;
select * from playlist where genre = 'pop' and play_count > 100 order by play_count desc;
select count(*) as hip_hop_song_count from playlist where genre = 'Hip-Hop';
select genre , sum(play_count) as total_playes from playlist group by genre;
select * from playlist;