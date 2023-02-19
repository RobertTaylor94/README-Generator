const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "install"
    },
    {
        type: "input",
        message: "Usage instructions:",
        name: "usage"
    },
    {
        type: "input",
        message: "How to contribute to the project:",
        name: "contrib"
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "test"
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: ["MIT License", "Apache 2.0 License", "GNU General Public License", "Mozilla Public License"]
    },
    {
        type: "input",
        message: "What is your GitHub link?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your contact email address?",
        name: "email"
    }
];

inquirer
    .prompt(questions).then(response => {
        console.log(response);
        let newFile = generateMarkdown(response);
        writeToFile(response.title, newFile);
    })

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, function (err) {
        err ? console.error(err) : console.log("README Saved");
    })
}

// function to initialize program
function init() {

}
// function call to initialize program
init();
