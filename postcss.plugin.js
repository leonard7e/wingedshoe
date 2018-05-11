module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-simple-vars'),
      require('postcss-calc'),
      require('postcss-conditionals'),
      require('postcss-each'),
      require('postcss-for'),
      require('postcss-color-function'),
      require('postcss-sass-extend'),
      require('postcss-mixins'),
      require('postcss-sprites'),
      require('autoprefixer')
    ]
}
