const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

inquirer
    .prompt(questions).then(response => {
        console.log(response);
        // let fileName = generateMarkdown(response);
        // writeToFile(fileName, fileName);
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
