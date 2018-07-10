<template>
  <div class="admin-new-post">
    <section class="new-post-form">
      <PostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import PostForm from "~/components/Admin/PostForm"
export default {
  name: "index",
  layout: 'admin',
  middleware: ['check-auth','auth'],
  components: {PostForm},
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
