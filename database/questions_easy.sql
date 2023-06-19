CREATE TABLE IF NOT EXISTS easy_questions(
    ID int NOT NULL AUTO_INCREMENT,
    question varchar(255) NOT NULL,
    correct_answer varchar(255) NOT NULL,
    incorrect_answer_1 varchar(255) NOT NULL, 
    incorrect_answer_2 varchar(255) NOT NULL, 
    incorrect_answer_3 varchar(255) NOT NULL,
    PRIMARY KEY (ID)   
);

INSERT INTO easy_questions(question, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3) 
    values ("Which Pokemon generation did the fan-named 'Masuda Method' first appear in? ",
        "Diamond/Pearl",
        "Ruby/Sapphire", 
        "Black/White", 
        "X/Y");
        
INSERT INTO easy_questions(question, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3) 
    values ("What is the name of the main healing item in Dark Souls?",
        "Estus Flask",
        "Health Potion", 
        "Orange Juice", 
        "Ashen Flask");

INSERT INTO easy_questions(question, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3) 
    values ("In the 'Metal Gear Solid' series, what's the name of Solid Snake's brother?",
        "Liquid Snake",
        "Kulus Snake", 
        "Billy Snake", 
        "Gilur Snake");

INSERT INTO easy_questions(question, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3) 
    values ("What vehicle in PUBG has the highest top speed?",
        "Motorcycle",
        "PG-117", 
        "Dacia", 
        "Buggy");

INSERT INTO easy_questions(question, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3) 
    values ("What year was the game Team Fortress 2 released?",
        "2007",
        "2009", 
        "2005", 
        "2010");