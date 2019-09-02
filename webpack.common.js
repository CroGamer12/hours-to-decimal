module.exports = {
    entry: './client/index.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    }
};
