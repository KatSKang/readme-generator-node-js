// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT License':
      return `![License](https://img.shields.io/badge/License-MIT-green)`
    case 'APACHE License':
      return `![License](https://img.shields.io/badge/License-APACHE-blue)`
    case 'GNU General Public License':
      return `![License](https://img.shields.io/badge/License-GNU-orange)`;
    case 'No license':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT License':
      return `[MIT](https://opensource.org/licenses/MIT)`
    case 'APACHE License':
      return `[APACHE 2.0](https://spdx.org/licenses/Apache-2.0.html)`
    case 'GNU General Public License':
      return `[GNU General Public](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case 'No license':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No license'){
    return '';
  } else {
    return `Licensed under the ${renderLicenseLink(license)} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data.license)}

  ## Test

  ${data.test}

  ## Questions

  For more information regarding this project, please send an email to ${data.email}.

  Click [here](${data.gitUrl}) to see more works from ${data.github}.

`;
}

module.exports = generateMarkdown;
