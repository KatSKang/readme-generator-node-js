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
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
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
    fs.writeFileSync(fileName, data, (err) => 
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {writeToFile('README.md',generateMarkdown(res));
    })
}

// Function call to initialize app
init();
