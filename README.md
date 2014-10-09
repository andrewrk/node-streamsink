# node-streamsink

See also [bl](https://github.com/rvagg/bl).

## Usage

```js
var StreamSink = require('streamsink');

var sink = new StreamSink();

fs.createReadStream("foo.txt").pipe(sink);
sink.on('finish', function() {
  // sink has now buffered foo.txt
  sink.createReadStream().pipe(someDestination);

  // or use toString([encoding])
  console.log(sink.toString('utf8'));

  // or use toBuffer()
  sink.toBuffer();
});
```
