import MyComponent from '../../../../slices/ArticleTeaser';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ArticleTeaser'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"article_teaser","items":[],"primary":{"title":[{"type":"heading1","text":"Grow bricks-and-clicks experiences","spans":[]}],"description":[{"type":"paragraph","text":"Nisi proident pariatur incididunt enim laborum commodo nostrud culpa. Sit veniam enim id ea. Lorem adipisicing nisi aliqua fugiat ad.","spans":[]}],"cta":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
