let path = require("path")

module.exports = {
    entry: ["./scripts/index.js"],
    output: {
        path: "/",
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
    },
    proxy: {
        '/': {
          target: 'https://pomodor-clock.herokuapp.com/',
          secure: false
        }
      }
}

