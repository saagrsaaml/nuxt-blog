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
  components: {PostForm},
  methods: {
    onSubmitted(postData) {
      axios.post('https://nuxt-blog-28ea5.firebaseio.com/posts.json', postData)
        .then(result => console.log(result))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
