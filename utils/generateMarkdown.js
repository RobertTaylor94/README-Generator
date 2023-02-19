// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge(data)}

  ## Description

  ${data.description}

  ## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing-here-is-a-header)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

The project is published under the ${data.license}.

## Contributing

${data.contrib}

## Tests

${data.test}

## Questions

If you have any questions feel free to contatc me at ${data.email} or create an issue on my GitHub page at [${data.github}](https://github.com/${data.github})
`;
}

function licenseBadge(data) {
  let license = data.license
  let badge = ""
  switch (license) {
    case "MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0 License":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla Public License":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      badge = ""
      break;
  }

  return badge;
}

module.exports = generateMarkdown;
