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
            correctAnswer: "c"
        },
        {
            question: "In the world of video games, what does NES stand for?",
            answers: {
                a: "National Entertainment Standards",
                b: "Nintendo Entertainment System",
                c: "Network Edge Switch",
                d: "Never Ending Story"
            },
            correctAnswer: "b"
        },
        {
            question: "What is considered the best gaming console today?",
            answers: {
                a: "PC",
                b: "PlayStation 4 Pro",
                c: "Xbox One X",
                d: "None of the above...this is opinion based."
            },
            correctAnswer: "d"
        },
        {
            question: 'Doctor Ivo "Eggman" Robotnik is the enemy of which video game character?',
            answers: {
                a: "Sonic the Hedgehog",
                b: "Kirby",
                c: "Mega Man",
                d: "Pac-Man"
            },
            correctAnswer: "a"
        },
        {
            question: "Master Hand is a characer and a boss in which game series?",
            answers: {
                a: "The Legend of Zelda",
                b: "Final Fantasy",
                c: "EarthBound",
                d: "Super Smash Bros"
            },
            correctAnswer: "d"
        },
        {
            question: "What game was originally developed for Mac, but later released on Microsoft's Xbox?",
            answers: {
                a: "Diablo",
                b: "DOOM",
                c: "Halo: Combat Evolved",
                d: "Marathon"
            },
            correctAnswer: "c"
        },
        {
            question: "The PlayStation 2 is considered one of the most succesful gaming consoles ever, what year was it released in North America?",
            answers: {
                a: "October 26, 2000",
                b: "November 30, 2000",
                c: "November 24, 2000",
                d: "March 4, 2000"
            },
            correctAnswer: "a"
        },
        {
            question: "This game was released in 1996 for the PlayStation and features a mutant enhanced bandicoot, what is his name?",
            answers: {
                a: "Spyro",
                b: "Crash",
                c: "Snake",
                d: "Sly Cooper"
            },
            correctAnswer: "b"
        },
        {
            question: "This game closely resembles table tennis and was developed by Atari, what is it called?",
            answers: {
                a: "Dig Dug",
                b: "Space Invaders",
                c: "Pong",
                d: "Q*bert"
            },
            correctAnswer: "c"
        },
        {
            question: "Minecraft is a sandbox video game released in 2009 by Mojang, what is the enemy mob that explodes when it gets close to your character?",
            answers: {
                a: "Enderman",
                b: "Zombie",
                c: "Skeleton",
                d: "Creeper"
            },
            correctAnswer: "d"
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




    //Functions Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //This function will start the timer, display random question, hide the start button
    function startGame() {
        //This on click event is for the user to click start button
        $("#startButton").click(function () {
            //When user hits start timer will be set to 30 seconds
            timeRemaining = 30;
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

        });

    }

    //This function shuffles an array whenever it is called and given the parameter array
    function shuffle(array) {
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

    function countdown() {
        if (timeRemaining === 0) {
            clearTimeout(intervalId);
            console.log("Time is UP!");
        } else {
            $("#timer").html("Time Remaining: " + timeRemaining);
            timeRemaining--;
        }
    }


    //Need to make a function that resets the game after user hits Start Over Button

    //Main Process Executes Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Call start game function
    startGame();





});
