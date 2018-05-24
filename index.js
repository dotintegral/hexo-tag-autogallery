var fs = require('hexo-fs');
var path = require('path');
var ejs = require('ejs');

hexo.extend.tag.register('autogallery', function(args) {
  var layout = args[0]
  var relativeDir = args[1];

  var dir = path.join(hexo.source_dir, relativeDir);
  var themePath = path.join(hexo.theme_dir, 'layout', '_partial', layout + '.ejs')

  if (hexo.env.debug) {
    console.log('[Autogallery] Running autogallery on ' +  dir + ', using layout ' + themePath);
  }

  try {
    var files = fs.listDirSync(dir);
    var template = fs.readFileSync(themePath)

    var photos = files.map(f => relativeDir + '/' + f)

    return ejs.render(template, {
      photos: photos,
      config: hexo.config
    })

  } catch (e) {
    console.error(e);
    return '<h3>Could not render autogallery at ' + relativeDir + ' using ' + layout + ' layout</h3>'
  }
});
