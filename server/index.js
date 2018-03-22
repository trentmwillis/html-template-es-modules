/**
 * This is a simple server for use in development. It is NOT used in production.
 */

const ora = require('ora');
const startServer = require('./start');

const port = 8080;

const colorReset = '\x1b[0m';
const blue = '\x1b[34m';
const green = '\x1b[32m';

function colorize(color, string) {

  return `${color}${string}${colorReset}`;

}

const spinner = ora('Starting development server').start();
startServer(port).then(() => {

  spinner.succeed('Development server ready');

  /* eslint-disable no-console */
  console.log();
  console.info(`${colorize(blue, 'ℹ')} View the ${colorize(blue, 'application')} at ${colorize(green, `http://localhost:${port}`)}`);
  console.info(`${colorize(blue, 'ℹ')} View the ${colorize(blue, 'test suite')} at ${colorize(green, `http://localhost:${port}/tests`)}`);
  console.log();
  /* eslint-enable no-console */

});
