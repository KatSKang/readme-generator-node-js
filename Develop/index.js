// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
//the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a description your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide a Table of Contents for your project.",
        name: "contents",
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "usage",
    },
    {
        type: "list",
        message: "What licenses would you like to include for your project?",
        name: "license",
        choices: ["MIT License", "APACHE License", "GNU General Public License", "No license"],
    },
    {
        type: "input",
        message: "Please list any collaborators or third party contributors for your project.",
        name: "credits",
    },
    {
        type: "input",
        message: "Add test instructions for your project?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your github profile link?",
        name: "gitUrl",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let userProject = fileName;
    fs.writeFileSync(userProject,data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((res) => fs.writeFile('newREADME.md',generateMarkdown(res)));
}

// Function call to initialize app
init();
