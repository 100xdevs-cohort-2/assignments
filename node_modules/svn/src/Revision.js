var Revision = function Revision(values){
  if (values.revision) this.revision = parseInt(values.revision);
  if (values.author) this.author = values.author+'';
  if (values.date) this.date = new Date(values.date);
  if (values.message) this.message = values.message+'';
  if (values.paths) this.paths = values.paths;
};

Revision.from_xml = function from_xml(old){
  var pojo = {};
  pojo.revision = parseInt(old.$.revision);
  pojo.author = old.author[0];
  pojo.date = new Date(old.date[0]);
  pojo.message = old.msg[0];
  pojo.paths = old.paths[0].path.map(function(path){ return path._;}); // filename
  return new Revision(pojo);
};

Revision.prototype.toString = function toString(){
  var div = '------------------------------------------------------------------------';
  var summary = [this.revision, this.author, this.date].join(' | ');
  return summary+'\n'+this.message.trim()+'\n'+div;
};





module.exports = Revision;