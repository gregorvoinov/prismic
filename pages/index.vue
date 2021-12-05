<template>
  <Tutorial/>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try{
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle('home')).data
      console.log('ydfsdfg', homepage)
      return {
        // Page content
        banner: homepage.homepage_banner[0],
        // Set slices as variable
        slices: homepage.page_content
      }
    } catch (e) {
      console.log(e)
      // error({ statusCode: 404, message: 'Page not found' })
    }
  },
  async middleware({ store, $prismic }) {
    await store.dispatch('menu/fetchMenu', $prismic)
  }
}
</script>
