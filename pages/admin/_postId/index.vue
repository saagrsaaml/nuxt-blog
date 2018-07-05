<template>
  <div class="admin-post">
    <section class="update-form">
      <PostForm :post="loadedPost" />
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
    return axios.get('https://nuxt-blog-28ea5.firebaseio.com/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch()
  }
}
</script>

<style scoped>

</style>
