function generateMarkdown(data) {
  console.log(data)
  return `
# ${data.Title}  

![License type](https://img.shields.io/badge/License-${encodeURI(data.License)}-informational)

## Description
${data.Description}

## Table of Contents

* [Installation](#installation)  
* [Usage](#usage)  
* [License](#license)  
* [Contributors](#contributors)  
* [Tests](#tests)  
* [Questions](#questions)  


## Installation

\`\`\`
${data.Install}
\`\`\`
## Usage
${data.Usage}

## License
${data.License}

## Contributors
${data.Contributors}

## Tests
\`\`\`
${data.Test}
\`\`\`
## Questions
<img src="${data.avatar_url}" alt ="avatar" style="border-radius: 16px" width="30"/>
${data.name} 

Contact the creator of this project directly at ${data.Email}.
`;
}
module.exports = generateMarkdown;