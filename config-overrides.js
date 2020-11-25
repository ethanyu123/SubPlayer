const {
    override
} = require('customize-cra');

const customize = () => (config) => {
    config.output.publicPath = '.';

    const len = config.module.rules[2].oneOf.length;
    const fileLoader = config.module.rules[2].oneOf[len - 1];
    const fileLoaderOptions = fileLoader.options;
    fileLoaderOptions.publicPath = '../../';
    return config;
};

module.exports = override(
    customize()
);