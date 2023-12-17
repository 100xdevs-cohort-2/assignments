var exec = require('child_process').execFile;

module.exports = function parse_svn_info(local_repo, next){
  var cmd = 'svn info ' + local_repo;
  cmd = cmd.split(' ');
  var info_call = exec(cmd[0], cmd.slice(1),
    function(error, stdout, stderr){
      var out_lines;
      var extractor = /^(.*): (.*)$/;
      result = {};

      if (error) return next(error);

      if (stdout.indexOf('\r\n') != -1) {
        out_lines = stdout.split('\r\n');
      } else {
        out_lines = stdout.split('\n');
      }

      out_lines.forEach(function(line){
        var match = extractor.exec(line);
        if( match ){
          result[match[1]] = match[2];
        }
      });
      next(null, result);
    });
};
