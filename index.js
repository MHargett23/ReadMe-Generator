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
        name: "Description",
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
        message: "What is your email address?",
        name: "Email",
    },
    {
        type: "input",
        message: "How to run tests?",
        name: "Test",
    },
    {
        type: "list",
        choices: ["MIT", "apache 2.0"],
        message: "What license do you want to use?",
        name: "License",
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate(data), err => {
        if (err) throw err
        console.log('...saving')
    })
}

async function init() {
    const response = await inquire.prompt(questions)
    console.log(response)
    const { data } = await API.getUser(response.Username)
    console.log(data)
    // const markdown = generate.generate
    writeToFile("test.md", { ...response, ...data })
    // console.log("response", markdown);


}

init();