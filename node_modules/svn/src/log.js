var spawn = require('child_process').spawn;
var parseString = require('xml2js').parseString;
var Revision = require('./Revision.js');



module.exports = function(options, next){
  var args = ['log', '--xml'];
  options = options || {};
  args = args.concat(limit(options));
  args = args.concat(revision(options));
  // -- diff not supported in xml mode command = command.concat(['--diff']);
  args = args.concat(['-v']);
  if (options.remote) {
    args = args.concat([options.remote]);
  } else if (this.remote) {
    args = args.concat([this.remote]);
  }

  var child = spawn('svn', args, {cwd: this.local});
  var stdout = '';
   var stderr = '';

  child.stdout.on('data', function (data) {
    stdout += data;
  });

  child.stderr.on('data', function (data) {
    stderr += data;
  });

  child.on('close', function (code) {
    if (code !== 0) {
      next(stderr, null);
    } else {
      parseString(stdout, function(error, result){
        if(error) return next(error);
        result = result.log.logentry.map(Revision.from_xml);
        next(error, result);
      });
    }
  });

};

function limit(options){
  if(options.limit) return ['-l', options.limit.toString()];
  return [];
}

function revision(options){
  if(options.revision) return ['-r', options.revision.toString()];
  if(options.start){
    var rev = [];
    rev.push(options.start.toString());
    rev.push(':');
    rev.push(options.end ? options.end.toString() : 'HEAD');
    return ['-r', rev.join('')];
  }
  return [];
}
