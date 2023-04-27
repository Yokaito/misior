-- Create Account god/god
INSERT INTO `accounts`
(`id`, `name`, `email`, `password`, `type`) VALUES
(1, 'god', '@god', '21298df8a3277357ee55b01df9530b535cf08ec1', 5);

-- Create player on GOD account
-- Create sample characters
INSERT INTO `players`
(`id`, `name`, `group_id`, `account_id`, `level`, `vocation`, `health`, `healthmax`, `experience`, `lookbody`, `lookfeet`, `lookhead`, `looklegs`, `looktype`, `maglevel`, `mana`, `manamax`, `manaspent`, `town_id`, `conditions`, `cap`, `sex`, `skill_club`, `skill_club_tries`, `skill_sword`, `skill_sword_tries`, `skill_axe`, `skill_axe_tries`, `skill_dist`, `skill_dist_tries`) VALUES
(1, 'Rook Sample', 1, 1, 2, 0, 155, 155, 100, 113, 115, 95, 39, 129, 2, 60, 60, 5936, 1, '', 410, 1, 12, 155, 12, 155, 12, 155, 12, 93),
(2, 'Sorcerer Sample', 1, 1, 8, 1, 185, 185, 4200, 113, 115, 95, 39, 129, 0, 90, 90, 0, 8, '', 470, 1, 10, 0, 10, 0, 10, 0, 10, 0),
(3, 'Druid Sample', 1, 1, 8, 2, 185, 185, 4200, 113, 115, 95, 39, 129, 0, 90, 90, 0, 8, '', 470, 1, 10, 0, 10, 0, 10, 0, 10, 0),
(4, 'Paladin Sample', 1, 1, 8, 3, 185, 185, 4200, 113, 115, 95, 39, 129, 0, 90, 90, 0, 8, '', 470, 1, 10, 0, 10, 0, 10, 0, 10, 0),
(5, 'Knight Sample', 1, 1, 8, 4, 185, 185, 4200, 113, 115, 95, 39, 129, 0, 90, 90, 0, 8, '', 470, 1, 10, 0, 10, 0, 10, 0, 10, 0),
(6, 'GOD', 6, 1, 2, 0, 155, 155, 100, 113, 115, 95, 39, 75, 0, 60, 60, 0, 8, '', 410, 1, 10, 0, 10, 0, 10, 0, 10, 0);
