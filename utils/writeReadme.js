const writeReadme = (data) => {
  //choosing license badge
  let licenseBadge = "";
  if (data.license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Apache 2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "Unlicense") {
    licenseBadge =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else if (data.license === "Creative Commons") {
    licenseBadge =
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (data.license === "Mozilla Public") {
    licenseBadge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    licenseBadge = "";
  }
  return  `# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is under the following license:
-${data.license}<br>
 
## Contribution

This app was created by: ${data.github}

## Questions

- Please contact me by email: ${data.email}
- For more information, please visit https://github.com/${data.github}

`;
};

module.exports = writeReadme
