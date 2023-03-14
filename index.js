// TODO: Include packages needed for this application
//file system//
const fs = require('fs');

//inquirer file//
const inquirer = require('inquirer');

// generateMarkdown.js// 
const generateMarkdown = require('./utils/generateMarkdown.js')

// console Log path//

console.log("Welcome to My README PROFILE")


// TODO: Create an array of questions for user input
   
const questions = [
   
   
    {
     type: 'Input',
     message: 'what is your title of the README file?',
     name: 'title',
    },
   
    {
     type:'Input',
     message:'What are they contents you made in this challenge ? ',
     name:'Table of contents',
    },
    
  
    {
        type:'Input',
        message:'Please provide a description of this challenge? ',
        name:'description',

    },

    {
      type:'list',
      message:'What license are required with this challenge?',
      name:'license',
      choices: ['MIT', 'GPL' , 'NONE'],
   },
   
   {
      type:'Input',
      message:'Explain about your installation process?',
      name:'installation',
   },
   
    {
       type:'Input',
       message:'write a few words about usage? ',
       name:'usage',
    },

    
    {
        type:'Input',
        message:'How does the user testing this challenge?',
        name:'testing',
    },
    
    {
        type:'Input',
        message:'Please enter your Email ID:',
        name:'email',
        
    },
    {
        type:'Input',
        message:'Please enter your Github Username:',
        name:'github username',
    }


]

