/* First step here is to create the ready master function that loads once DOM is ready */
$(document).ready(function () {
    //Global Variables Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //Object that holds questions, answers, and correct answer:
    var allQuestions = [
        {
            question: "Mario Kart is a video game series published by which company?",
            answers: {
                a: "Microsoft",
                b: "Sony",
                c: "Nintendo",
                d: "Sega"
            },
            correctAnswer: "Nintendo"
        },
        {
            question: "In the world of video games, what does NES stand for?",
            answers: {
                a: "National Entertainment Standards",
                b: "Nintendo Entertainment System",
                c: "Network Edge Switch",
                d: "Never Ending Story"
            },
            correctAnswer: "Nintendo Entertainment System"
        },
        {
            question: "What is considered the best gaming console today?",
            answers: {
                a: "PC",
                b: "PlayStation 4 Pro",
                c: "Xbox One X",
                d: "None of the above...this is opinion based."
            },
            correctAnswer: "None of the above...this is opinion based."
        },
        {
            question: 'Doctor Ivo "Eggman" Robotnik is the enemy of which video game character?',
            answers: {
                a: "Sonic the Hedgehog",
                b: "Kirby",
                c: "Mega Man",
                d: "Pac-Man"
            },
            correctAnswer: "Sonic the Hedgehog"
        },
        {
            question: "Master Hand is a characer and a boss in which game series?",
            answers: {
                a: "The Legend of Zelda",
                b: "Final Fantasy",
                c: "EarthBound",
                d: "Super Smash Bros"
            },
            correctAnswer: "Super Smash Bros"
        },
        {
            question: "What game was originally developed for Mac, but later released on Microsoft's Xbox?",
            answers: {
                a: "Diablo",
                b: "DOOM",
                c: "Halo: Combat Evolved",
                d: "Marathon"
            },
            correctAnswer: "Halo: Combat Evolved"
        },
        {
            question: "The PlayStation 2 is considered one of the most succesful gaming consoles ever, what year was it released in North America?",
            answers: {
                a: "October 26, 2000",
                b: "November 30, 2000",
                c: "November 24, 2000",
                d: "March 4, 2000"
            },
            correctAnswer: "October 26, 2000"
        },
        {
            question: "This game was released in 1996 for the PlayStation and features a mutant enhanced bandicoot, what is his name?",
            answers: {
                a: "Spyro",
                b: "Crash",
                c: "Snake",
                d: "Sly Cooper"
            },
            correctAnswer: "Crash"
        },
        {
            question: "This game closely resembles table tennis and was developed by Atari, what is it called?",
            answers: {
                a: "Dig Dug",
                b: "Space Invaders",
                c: "Pong",
                d: "Q*bert"
            },
            correctAnswer: "Pong"
        },
        {
            question: "Minecraft is a sandbox video game released in 2009 by Mojang, what is the enemy mob that explodes when it gets close to your character?",
            answers: {
                a: "Enderman",
                b: "Zombie",
                c: "Skeleton",
                d: "Creeper"
            },
            correctAnswer: "Creeper"
        }
    ]

    //This will hold the new shuffled questions
    var shuffledQuestions = [];
    //This will hold the number of seconds on timer
    var timeRemaining;
    //This will hold the timer interval in milliseconds
    var intervalId = setInterval(countdown, 1000);
    //This will hold the number of correct questions answered by user
    var qCorrect = 0;
    //This will hold the number of wrong questions answered by user
    var qWrong = 0;
    //This will hold the number of questions not answered by user
    var qUnanswered = 0;
    //This will hold the users input to question
    var userInput;



    //Functions Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //This function will start the timer, display random question, hide the start button
    function startGame() {
        //This on click event is for the user to click start button
        $("#startButton").click(function () {
            //When user hits start timer will be set to 30 seconds
            timeRemaining = 5;
            //This function call will display and start counting down
            countdown();
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This line hides the start button
            $("#startButton").hide();
            //This calls the shuffle function to shuffle allQuestions object
            shuffle(allQuestions);
            //This puts the shuffled allQuestions into a new variable
            shuffledQuestions.push(allQuestions);
            //This updates the HTML with the first shuffled Question
            $("#question").text(shuffledQuestions[0][0].question);
            //This will update the HTML with the answer choices of first shuffled question
            $("#answerA").text(shuffledQuestions[0][0].answers.a);
            $("#answerB").text(shuffledQuestions[0][0].answers.b);
            $("#answerC").text(shuffledQuestions[0][0].answers.c);
            $("#answerD").text(shuffledQuestions[0][0].answers.d);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log("Right Answer: " + shuffledQuestions[0][0].correctAnswer);
        });

    }

    //This function shuffles an array whenever it is called and given the parameter array
    function shuffle(array) {
        //Local variable created here
        var counter = array.length, temp, index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    //This function is for making the timer run down from 30 seconds
    function countdown() {
        if (timeRemaining === 0) {
            //This line stops the counter
            clearTimeout(intervalId);
            //This line will execute something else whenever time runs out
            alert("Time is UP!");
            //This line adds 1 to the qUnanswered variable
            qUnanswered++;
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log("Unanswered: " + qUnanswered);
        } else {
            //This line updates HTML with the ticking counter
            $("#timer").html("Time Remaining: " + timeRemaining);
            //This line decreases the counter by one second
            timeRemaining--;
        }
    }


    //This function will hold the user's input to the question, check's wether wrong or right, adds to counter
    function userAnswer() {
        //This on click event recognizes user input A
        $("#answerA").click(function () {
            if (shuffledQuestions[0][0].answers.a === shuffledQuestions[0][0].correctAnswer) {
                alert("correct");
                //This adds 1 to the qCorrect variable
                qCorrect++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Correct: " + qCorrect);
            } else {
                alert("wrong");
                qWrong++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Wrong: " + qWrong);
            }
            //Test

        });
        //This on click event recognizes user input B
        $("#answerB").click(function () {
            if (shuffledQuestions[0][0].answers.b === shuffledQuestions[0][0].correctAnswer) {
                alert("correct");
                //This adds 1 to the qCorrect variable
                qCorrect++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Correct: " + qCorrect);
            } else {
                alert("wrong");
                //This adds 1 to the qWrong variable
                qWrong++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Wrong: " + qWrong);
            }
            //Test

        });
        //This on click event recognizes user input C
        $("#answerC").click(function () {
            if (shuffledQuestions[0][0].answers.c === shuffledQuestions[0][0].correctAnswer) {
                alert("correct");
                //This adds 1 to the qCorrect variable
                qCorrect++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Correct: " + qCorrect);
            } else {
                alert("wrong");
                //This adds 1 to the qWrong variable
                qWrong++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Wrong: " + qWrong);
            }
            //Test

        });
        //This on click event recognizes user input D
        $("#answerD").click(function () {
            if (shuffledQuestions[0][0].answers.d === shuffledQuestions[0][0].correctAnswer) {
                alert("correct");
                //This adds 1 to the qCorrect variable
                qCorrect++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Correct: " + qCorrect);
            } else {
                alert("wrong");
                //This adds 1 to the qWrong variable
                qWrong++;
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                console.log("Wrong: " + qWrong);
            }
            //Test

        });

    }

    //Need to make a function that will run after user selects right or wrong answer, pulls next question

    //Need to make a function that will run after timer expires and pull the next question

    //Need to make a function that resets the game after user hits Start Over Button

    //Main Process Executes Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Call start game function
    startGame();

    //Call user answer function 
    userAnswer();

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Correct: " + qCorrect);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Wrong: " + qWrong);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Unanswered: " + qUnanswered);



});
