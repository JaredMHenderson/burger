
USE burgers_db;

CREATE TABLE `burgers_db`.`burgers`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR
(120) NOT NULL,
  `devoured` TINYINT NOT NULL,
  PRIMARY KEY
(`id`));
