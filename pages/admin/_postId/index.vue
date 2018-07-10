<template>
  <div class="admin-post">
    <section class="update-form">
      <PostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import PostForm from "~/components/Admin/PostForm"
export default {
  name: "index",
  layout: 'admin',
  middleware: 'auth',
  components: {PostForm},
  asyncData(context) {
    return context.app.$axios.$get('/posts/' + context.params.postId + '.json')
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postId }
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
