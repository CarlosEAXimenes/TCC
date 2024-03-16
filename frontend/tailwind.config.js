module.exports = {
  content: [
    `${process.cwd()}/components/**/*.{vue,js,ts}`,
    `${process.cwd()}/layouts/**/*.vue`,
    `${process.cwd()}/pages/**/*.vue`,
    `${process.cwd()}/composables/**/*.{js,ts}`,
    `${process.cwd()}/plugins/**/*.{js,ts}`,
    `${process.cwd()}/utils/**/*.{js,ts}`,
    `${process.cwd()}/App.{js,ts,vue}`,
    `${process.cwd()}/app.{js,ts,vue}`,
    `${process.cwd()}/Error.{js,ts,vue}`,
    `${process.cwd()}/error.{js,ts,vue}`,
    `${process.cwd()}/app.config.{js,ts}`,
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  })
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#333333',
      },
      textColor: {
        dark: '#ffffff',
      },
    },
  },
}