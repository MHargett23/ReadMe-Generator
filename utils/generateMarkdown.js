function generateMarkdown(data, userData) {
  return `
# ${data.title}

## Description
${data.Description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributors](#contributors)
[Tests](#tests)
[Questions](#questions)

## Installation
${data.Install}

## Usage
${data.Usage}

## License
${data.License}

## Contributors
${data.Contributors}
${userData.name}
## Tests
## Questions
`;
}
module.exports = { generateMarkdown: generateMarkdown };