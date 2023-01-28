// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
  type: 'input',
  name: 'projectTitle',
  message: 'What is your project title?',
  },
  {
  type: 'input',
  name: 'discription',
  message: 'Provide a short description explaining the what, why, and how of your project.',
  },
  {
  type: 'input',
  name: 'installation',
  message: 'What are the steps required to install your project?',
  },
  {
  type: 'input',
  name: 'usage',
  message: 'Provide instructions and examples for use.',
  },
  {
  type: 'input',
  name: 'credits',
  message: 'List your collaborators, if any, with links to their GitHub profiles.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'The last section of a high-quality README file is the license.',
  },
  { 
    type: 'input',
    name: 'badges',
    message: "Badges aren't necessary, per se, but they demonstrate street cred.",
  },
]; 


// TODO: Create a function to write README file
const generateReadMe = ({projectTitle, discription, installation, usage, credits, license, badges }) =>
`# ${projectTitle}

## Description

${discription}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Badges

${badges}`

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readMeContent =generateReadMe(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file!')        
        );
    });

}

// Function call to initialize app
init();
