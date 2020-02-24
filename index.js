const inquire = require("inquirer");
const generate = require("./utils/generateMarkdown");
const API = require("./utils/api");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "Username",
    },
    {
        type: "input",
        message: "What is the title of this project?",
        name: "Title",
    },
    {
        type: "input",
        message: "How do you describe this project?",
        name: "Desciption",
    },
    {
        type: "input",
        message: "How do you install this project?",
        name: "Install",
    },
    {
        type: "input",
        message: "How is this project used?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Contributors for this project?",
        name: "Contributors",
    },
    {
        type: "input",
        message: "What license do you want to use?",
        name: "License",
    }
];

function writeToFile(fileName, data) {
}

function init() {
    inquire.prompt(questions).then(response => {
        API.getUser(response.username, function (userData) {
            const markdown = generate.generateMarkdown(response, userData);
        })
        console.log("response", markdown);
    })
}

init();
