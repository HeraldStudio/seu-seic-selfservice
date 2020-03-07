
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  router:{
    base:'/self-service/'
  },
  axios: {
    // proxyHeaders: false
  },
  head: {
    title: '东大信息化自助服务',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'niclogo_128.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn-seicwxbz.seu.edu.cn/self-service/' : '/self-service/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
