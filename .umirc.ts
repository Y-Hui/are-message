import { defineConfig } from 'dumi'

const ENV = process.env.NODE_ENV
const prefix = '/are-message/docs-dist/'

export default defineConfig({
  title: 'are-message',
  favicon:
    ENV === 'production'
      ? `${prefix}/images/favicon.ico`
      : '/images/favicon.ico',
  logo:
    ENV === 'production'
      ? `${prefix}/images/are-visual.svg`
      : '/images/are-visual.svg',
  publicPath: ENV === 'production' ? '/are-message/docs-dist/' : '/',
  outputPath: 'docs-dist',
  exportStatic: ENV === 'production' ? {} : false,
  styles: [
    `
      body {
        font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue","Helvetica","Arial","PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif !important;
      }
      .are-message {
        z-index: 1000;
      }
    `,
  ],
})
