CREATE TABLE `employer`.`employer_info` (
  `ID` INT NOT NULL,
  `Company` VARCHAR(45) NOT NULL,
  `Name` VARCHAR(100) NOT NULL,
  `Mobile` INT NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Logo` LONGBLOB NULL,
  `employer_infocol` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE);