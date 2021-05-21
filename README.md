# cron parser
This is a command line application that parses a cron string and returns a table explaining what each part of the cron string means.

## Installation instruction
- Make sure node.js is installed on your machine. [More info here.](https://nodejs.org/en/download/)
- Run `npm i` to install the required dependencies
- While in the root folder of the project run `npm i -g` to install the app

## Running the app
The application must be installed first before following these instructions.

Using a CLI run `cronp "<cron_string> <command>"`

For example:
> `$ cronp "* 5-15/5 * 5 * /usr/bin/find"`

## Running tests
This project uses Mocha and Chai for unit testing. To run the tests, after the project dependencies have been installed, run `npm test` while on the root folder of the project.

The tests can be found inside the test folder of the project and follow the naming convention of `<filename>.test.js` where filename is the filename of the javascript file they are testing. The folder structure under the `test` folder should also be the same as the folder structure under the `src` folder.

## Running the linter
This project uses ESLint and the [JavaScript Standard Style](https://standardjs.com/) as a style guide. 

To run the linter for the source code run `npm run lint` on the root folder of the project.

To run the linter for the tests run `npm run lint-tests` on the root folder of the project.

> It is highly recommended that you set your editor or IDE of choice to automatically lint/format on save.