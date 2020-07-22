module.exports = {
    publicPath: '/', /* process.env.NODE_ENV === 'production'
      ? '/'
      : '/',*/
    outputDir: 'wwwroot',
   
    chainWebpack: config => {
      config.plugins.delete('preload');
      config.plugins.delete('prefetch');
      config
          .plugin('html')
          .tap(args => {
              args[0].template = 'public/index.js';
              args[0].inject = true;
              args[0].cache = true;
              args[0].minify = true;
              args[0].filename = '../Pages/Index.cshtml';
              return args;
          });
    }
  }