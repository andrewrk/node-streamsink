## Usage

```js
var StreamSink = require('streamsink');

var sink = new StreamSink();

fs.createReadStream("foo.txt").pipe(sink);
sink.on('finish', function() {
  // sink has now buffered foo.txt
  sink.createReadStream().pipe(someDestination);
});
```
