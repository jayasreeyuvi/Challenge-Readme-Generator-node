
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let yourLicense = '';
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'MIT') {
      yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license=== 'GPL') {
      yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    } return  "N/A"
    
    
}
  
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return yourLicense;
}
    
  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
    return `🌸${data.title}🌸
    
    
    
    ## 🌸Table of contents:
    
    - [Description](#🌸description)
    
    - [License](#🌸license)
    
    - [Installation](#🌸installation)
    
    - [Usage](#🌸usage)
    
    - [Testing](#🌸testing)
    
    - [Contact-1](#🌸email)
    
    - [Contact-2](#🌸Github username)
    
    ## 🌸Description:
    ${data.description}
    
    
    ## 🌸License:
    
    [License: MIT (https://img.shields.io/badge/License-MIT-yellow.svg)]
    
    [Refer to :(https://choosealicense.com/licenses/mit/#)]
    
    MIT License
  
    Copyright (c) 2023 jayasreeyuvi
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    
    ## 🌸Installation:
    ${data.installation}
   
  
    ## 🌸Usage:
    ${data.usage}
    
  
  
    ## 🌸Testing:
    
    Given link of screencastify:;
  
    ## 🌸Contact-1:
    
    - Email: ${data.email}
  
    ## 🌸Contact-2:
  
    - Github username: ${data.github}`
}
  
module.exports = generateMarkdown;
  