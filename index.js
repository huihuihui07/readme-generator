const fs = require("fs");
const inquirer = require("inquirer");
const writeReadme = require("./utils/writeReadme");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message:
      "What is your project description? e.g. What is your motivation? What problem does it solve? What did you learn?",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage?",
  },
  {
    type: "list",
    message: "What license would you like?",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "Unlicense",
      "Creative Commons",
      "Mozilla Public",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please list your collaborators, if any, with links to their GitHub profiles:",
  },
  {
    type: "input",
    name: "test",
    message: "What test would you like to perform?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// function to write README file
function writeToFile(data) {
  writeFileAsync("README.md", data).then(()=> {
    console.log('readme has been generated!');
  });
}

// function to initialize program
function init() {
  // start asking questions in the cli. using inquirer
  inquirer.prompt(questions).then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    writeToFile(writeReadme(answers));
  });
}

// function call to initialize program
init();
