var stream = require('stream');
var util = require('util');

module.exports = StreamSink;

util.inherits(StreamSink, stream.Writable);
function StreamSink(options) {
  stream.Writable.call(this, options);
  this.buffer = [];
}

StreamSink.prototype._write = function(chunk, encoding, callback) {
  this.buffer.push(chunk);
  callback();
};

StreamSink.prototype.createReadStream = function(options) {
  var s = new stream.Readable(options);
  s.buffer = this.buffer;
  s._read = function(size) {
    for (var i = 0; i < s.buffer.length; i += 1) {
      s.push(s.buffer[i]);
    }
    s.push(null);
  };
  return s;
};

StreamSink.prototype.toString = function(arg) {
  return this.buffer.map(function(buf) { return buf.toString(arg); }).join('');
};
