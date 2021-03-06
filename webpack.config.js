let path = require("path")

module.exports = {
    entry: ["./scripts/index.js"],
    output: {
        path: "C:\\Users\\Dell\\Desktop\\dev\\pomodoro-clock\\",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    }
}

