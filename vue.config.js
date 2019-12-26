
module.exports = {
  pages: {
    index: {
      entry: "./src/views/index/main.js",
      template: "./src/views/index/index.html",
      filename: "index.html",
      title: "秃头的科比",
      chunks: ["chunk-vendors","chunk-common","index"]
    },
    twoHands: {
      entry: "./src/views/twoHands/twoHands.js",
      template: "./src/views/twoHands/twoHands.html",
      filename: "twoHands.html",
      title: "秃头的科比",
      chunks: ["chunk-vendors","chunk-common","twoHands"]
    },
    ni: {
      entry: "./src/views/ni/ni.js",
      template: "./src/views/ni/ni.html",
      filename: "ni.html",
      title: "秃头的科比"
    }
  }
}