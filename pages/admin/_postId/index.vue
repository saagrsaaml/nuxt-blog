<template>
  <div class="admin-post">
    <section class="update-form">
      <PostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import PostForm from "~/components/Admin/PostForm"
import axios from 'axios'
export default {
  name: "index",
  layout: 'admin',
  components: {PostForm},
  asyncData(context) {
    return axios.get('https://nuxt-blog-28ea5.firebaseio.com/posts/' + context.params.postId + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error())
  },
  methods: {
    onSubmitted(editedPost) {
      axios.put('https://nuxt-blog-28ea5.firebaseio.com/posts/' + this.$route.params.postId + '.json', editedPost)
        .then(res => {
          this.$router.push('/admin')
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
