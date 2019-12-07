module.exports = {
    entry: "./src/typescript/index",
    output: {
        filename: "bundle.js",
        path: __dirname + "/static/js-gen"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      loaders: [
        {
            test: /\.ts?$/, loader: "ts-loader" },
        {
            enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
};
