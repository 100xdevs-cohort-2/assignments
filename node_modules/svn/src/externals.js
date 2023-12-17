var exec = require('child_process').execFile;
var parseString = require('xml2js').parseString;

module.exports.get = function(options, next){
  var command = ['svn', 'propget', '--xml','svn:externals'];
  options = options || {};
  if (options.remote) {
    command = command.concat([options.remote]);
  } else if (this.remote) {
    command = command.concat([this.remote]);
  }
  command = command.join(' ').split(' ');

  exec(command[0], command.slice(1), {}, function(error, stdout, stderr){
    if(error) return next(error);

    parseString(stdout, function(error, result){
      var extlines = result.properties.target[0].property[0]._;
      var extarr = [];
      if (extlines.indexOf('\r\n') != -1) {
        extarr = extlines.split('\r\n');
      } else {
        extarr = extlines.split('\n');
      }

      if(error) return next(error);

      max = extarr.length;
      extarr.forEach(function(result) {
        if (result) {
          next(error, result, max);
        }
      });
    })
  })
};

module.exports.set = function(options, next){
  var command = ['svn', 'propset', 'svn:externals'];
  options = options || {};
  command = command.concat([this.local ? this.local : "."]);
  command = command.concat(['-F', options.file]);
  command = command.join(' ').split(' ');

  exec(command[0], command.slice(1), {}, function(error, stdout, stderr){
    return next(error);
  })
};
