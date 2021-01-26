let mix = require('laravel-mix');
const Mix = require('laravel-mix/src/Mix');

mix.js('src/app.js', 'js')
mix.sass('src/app.scss', 'css')
mix.copyDirectory('src/img' , './assets/img')
.setPublicPath('assets');
