/**
 * This is a simple server for use in development. It is NOT used in production.
 */

const path = require('path');
const express = require('express');

const server = express();

const root = path.resolve(__dirname, '..');

server.use(express.static(root));

module.exports = function startServer(port) {

  return new Promise((resolve) => {

    const listener = server.listen(port, () => resolve(listener));

  });

};
