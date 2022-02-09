const path = require('path');
module.exports = {
    entry:path.join(_dirname, '/index.ts'),
    output:{
        filename: 'index.js',
        path: _dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve:{
        extensions: [".tsx", ".ts", ".js"]
    },
};