module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))