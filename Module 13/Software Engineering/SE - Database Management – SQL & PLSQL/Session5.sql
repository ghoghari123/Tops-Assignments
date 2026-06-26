create table influencers (
	influencer_id int primary key,
    name varchar(100)
);
create table post(
	post_id int primary key,
    influencer_id int,
    caption varchar(255),
    foreign key (influencer_id) references influencers(influencer_id)
);
INSERT INTO influencers (influencer_id, name)
VALUES
(1, 'Aarav Sharma'),
(2, 'Priya Patel'),
(3, 'Rohan Mehta');
INSERT INTO post (post_id, influencer_id, caption)
VALUES
(101, 1, 'Morning coffee vibes ☕'),
(102, 1, 'Sunset photography 📸'),
(103, 2, 'Fitness goals 💪'),
(104, 2, 'Healthy breakfast 🥗'),
(105, 3, 'Travel diaries ✈️'),
(106, 3, 'Weekend adventure 🌄');
select p.caption,i.name from post p inner join influencers i on p.influencer_id = i.influencer_id;
SELECT i.name, IFNULL(p.caption, 'No Posts') AS caption FROM influencers i LEFT JOIN post p ON i.influencer_id = p.influencer_id;
SELECT IFNULL(i.name, 'Unknown Influencer') AS influencer_name, p.caption FROM influencers i RIGHT JOIN post p ON i.influencer_id = p.influencer_id;