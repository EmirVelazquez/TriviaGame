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




    ]

    //All other global variables


















    //Functions Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
































    //Main Process Executes Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //This on click event will start the timer, display the first question, hide the start button
    $("#startButton").click(function () {
        $("#questionForm").show();
        $("#startButton").hide();
    });

    //jQuery that populates question to DOM
    $("#question").text(allQuestions[0].question);

    //jQuery that populates question answers to DOM
    $("#answerA").text(allQuestions[0].answers.a);
    $("#answerB").text(allQuestions[0].answers.b);
    $("#answerC").text(allQuestions[0].answers.c);
    $("#answerD").text(allQuestions[0].answers.d);


    // console.log(allQuestions[0].question);
    // console.log(allQuestions[0].answers);
    // console.log(allQuestions[0].correctAnswer);










});
