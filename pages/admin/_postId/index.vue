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
          loadedPost: { ...res.data, id: context.params.postId }
        }
      })
      .catch(e => context.error())
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
