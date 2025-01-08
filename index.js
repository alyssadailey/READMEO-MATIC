// TODO: Include packages needed for this application
const { default: inquirer} = require ('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project:'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
// Imports the fs module
const fs = require('fs'); 

function writeToFile(fileName, data) {
    // Formats the data into a string
    const content= generateMarkdown(data);

    // Writes the string to a file
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Your README file has been generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {

    // Calls the function to write the README file with the user's answers
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers);
    })

    // Displays error message if not all prompts answered correctly
    .catch((error) => {
        console.error('Error during prompting', error);
    });
    
}

// Function call to initialize app
init();
