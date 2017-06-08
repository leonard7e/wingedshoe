module.exports = {

    entry: "./src/typescript/wingedshoe",
    output: {
        filename: "bundle.js",
        path: __dirname + "/static/js-gen"
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      loaders: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    //    rules: [
    //        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    //        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

    //        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //    ]
    },


    // externals: {
    //   "angular": "Angular"
    // },
};
