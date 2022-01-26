const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@core': path.resolve(__dirname, 'src/core'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@screens': path.resolve(__dirname, 'src/screens'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
    },
};