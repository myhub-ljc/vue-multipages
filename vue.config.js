
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
    study: {
      entry: "./src/views/study/study.js",
      template: "./src/views/study/study.html",
      filename: "study.html",
      title: "秃头的科比"
    },
    video: {
      entry: "./src/views/video/video.js",
      template: "./src/views/video/video.html",
      filename: "video.html",
      title: "秃头的科比"
    },
    biji: {
      entry: "./src/views/biji/biji.js",
      template: "./src/views/biji/biji.html",
      filename: "biji.html",
      title: "秃头的科比"
    }
  }
}