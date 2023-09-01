const fs = require("fs");
const path = require('path');  //? what is this
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
{
    type:"input",
    name:"title",
    message:"What is your project title?",
},
{
    type:"input",
    name:"description",
    message:"What is your project description? e.g. What is your motivation? What problem does it solve? What did you learn?",
},
{
    type:"input",
    name:"TableofContents",
    message:"What is the table of contents (Optional)",
},
{
    type:"input",
    name:"installation",
    message:"What are the steps required to install your project?",
},
{
    type:"input",
    name:"credits",
    message:"Please list your collaborators, if any, with links to their GitHub profiles:",
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
