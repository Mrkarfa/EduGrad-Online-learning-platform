const { default: postcssPurgecss } = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins:[
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ['./**/*.html']
        })
    ]
}