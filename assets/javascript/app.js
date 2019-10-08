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
            question: "Doctor Ivo 'Eggman' Robotnik is the enemy of which video game character?",
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
        }
    ]

    //This will hold the number of correct questions answered by user
    var qCorrect = 0;




    //Functions Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //This function will start the timer, display random question, hide the start button
    function startGame() {

        //This on click event is for the user to click on
        $("#startButton").click(function () {
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This line hides the start button
            $("#startButton").hide();
            //This calls the random question function to pick a random question when user clicks start
            randomQuestion();

        });
    }
    //This function will chose a random question out of the allQuestions object
    function randomQuestion() {
        var chosenQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        console.log(chosenQuestion);
    }



    //Main Process Executes Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //jQuery that populates question to DOM
    // $("#question").text(chosenQuestion.allQuestions.question);

    //jQuery that populates question answers to DOM
    $("#answerA").text(allQuestions[0].answers.a);
    $("#answerB").text(allQuestions[0].answers.b);
    $("#answerC").text(allQuestions[0].answers.c);
    $("#answerD").text(allQuestions[0].answers.d);


    // console.log(allQuestions[0].question);
    // console.log(allQuestions[0].answers);
    // console.log(allQuestions[0].correctAnswer);

    // Call start game function
    startGame();




});
