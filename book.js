let pkg = require('./package.json');

module.exports = {
    author: 'Konru',

    title: 'The Title',

    description: 'The Description',

    root: './docs',

    variables: {
        version: pkg.version
    }
};