const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
             @import "@/scss/variables/_variables.scss";
             @import "@/scss/mixins/_mixins.scss";
            `,
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // Thêm các alias khác nếu cần thiết
      },
    },
  },
};
