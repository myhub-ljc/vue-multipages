
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
    },
    parttime: {
      entry: "./src/views/parttime/parttime.js",
      template: "./src/views/parttime/parttime.html",
      filename: "parttime.html",
      title: "秃头的科比"
    },
    sijia: {
      entry: "./src/views/sijia/sijia.js",
      template: "./src/views/sijia/sijia.html",
      filename: "sijia.html",
      title: "秃头的科比"
    },
    product: {
      entry: "./src/views/product/product.js",
      template: "./src/views/product/product.html",
      filename: "product.html",
      title: "秃头的科比"
    },
    login: {
      entry: "./src/views/login/login.js",
      template: "./src/views/login/login.html",
      filename: "login.html",
      title: "秃头的科比"
    },
    signUp: {
      entry: "./src/views/signUp/signUp.js",
      template: "./src/views/signUp/signUp.html",
      filename: "signUp.html",
      title: "秃头的科比"
    },
    retrieve: {
      entry: "./src/views/retrieve/retrieve.js",
      template: "./src/views/retrieve/retrieve.html",
      filename: "retrieve.html",
      title: "秃头的科比"
    }
  }
}