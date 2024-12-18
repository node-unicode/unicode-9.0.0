module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))