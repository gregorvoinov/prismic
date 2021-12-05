<template>
  <div>
    {{pageheading}}
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try{
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle('home')).data
      return {
        // Page content
        pageheading: homepage.pageheading[0].text,
      }
    } catch (e) {
      console.log(e)
      // error({ statusCode: 404, message: 'Page not found' })
    }
  },
  // async middleware({ store, $prismic }) {
  //   await store.dispatch('menu/fetchMenu', $prismic)
  // }
}
</script>
