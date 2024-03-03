// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: [
//     '@nuxtjs/tailwindcss',
//     'nuxt-icon', //<Icon name="uil:github" color="black" />   https://icones.js.org/
//     '@nuxtjs/apollo',
//   ],  
//   apollo: {
//     clientConfigs: {
//       default: {
//         httpEndpoint: 'http://localhost:4000',
//       }
//     }
//   },
//   tailwindcss: {
//     cssPath: ['~/assets/css/tailwind.css',{ injectPosition: 'first'}],
//     configPath: '~/tailwind.config.js',
//     exposeConfig: false,
//     config: {},
//     viewer: true,
//   },
//   app: {
//     head: {      
//       script: [
//         // <script src="https://myawesome-lib.js"></script>
//         { src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js' }
//       ]
//     }
//   }

// })
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon', //<Icon name="uil:github" color="black" />   https://icones.js.org/
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css',{ injectPosition: 'first'}],
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    config: {},
    viewer: true,
  },
  head: {
    script: [
      // <script src="https://myawesome-lib.js%22%3E/</script>
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js' }
    ]
  }
})
