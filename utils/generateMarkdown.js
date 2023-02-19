// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

module.exports = generateMarkdown;
