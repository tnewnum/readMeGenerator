// packages that are needed to run the program
const inquirer = require('inquirer');
const fs = require('fs');

//variables that set the badge for the four license options 
const apacheLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
const gnuLicense= `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
const mitLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
const bsdLicense = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`

//function that runs through an if statement checking user input to select the selected license 
function renderLicenseBadge (license) {
  if (license === 'Apache License 2.0') {
    return apacheLicense
  }else if (license === 'GNU General Public License v3.0') {
    return gnuLicense
  }else if (license === 'MIT License') {
    return mitLicense
  }else if (license === 'BSD 2-Clause "Simplified" License'){
    return bsdLicense
  } else {
    return '';
  }
}; 

// An array of questions for user input
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
  type: "list",
  message: 'What License would you like to include?',
  name: 'license',
  choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License'],
  },
  {
  type: 'input',
  name: 'github',
  message: 'What Is your GitHub handle?'
  },
  {
  type: 'input',
  name: 'email',
  message: 'What Is your email address?'
  },
]; 



// Function to write README file
const generateReadMe = ({projectTitle, discription, installation, usage, credits, license, github, email }) =>
`# ${projectTitle}

${renderLicenseBadge(license)}

## Description

${discription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)

## Installation

${installation}

## Usage

${usage}

## License

This project is coverd under the ${license}!

## Credits

${credits}

##Test

##Questions

Github Username: @${github}

Github webpage: https://github.com/${github}

Email me with any additional questions: ${email}`


  
  // Funtions that kicks the whole thing off, and prompts the user with questions to populate the README.md
  function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const readMeContent =generateReadMe(answers);
      
    fs.writeFile('newREADME.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md file!')        
    );
  });
  
}

// calling the above function so that the program actually runs
init(); 
