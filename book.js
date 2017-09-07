let pkg = require('./package.json');

module.exports = {
    author: 'Konru',

    title: '猫盟野外调查起步',

    description: '介绍参与猫盟野外调查的基本知识与常见注意事项。',

    root: './_docs',

    variables: {
        version: pkg.version
    }
};