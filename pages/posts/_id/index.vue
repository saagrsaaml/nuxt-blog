<template>
  <div class="single-post-page">
    <!-- main body content -->
    <div class="main-content">
      <div class="container">
        <div class="columns is-centered is-multiline">
          <div class="column is-6">
            <div class="post">
              <!-- post content -->
              <div class="content">
                <div class="content-header has-text-centered">
                  <h3 class="title is-3"><b><a href="">{{ loadedPost.title }}</a></b></h3>
                  <h4 class="is-5 is-spaced">Some things are meant to suck the life out of you</h4>
                  <h6 class="subtitle is-6">Posted by {{ loadedPost.author }} on {{ loadedPost.updatedDate | date }}</h6>
                  <hr/>
                </div>
                <p>{{ loadedPost.content }}</p>
              </div>
              <!-- end of post content -->
            </div>
            <!-- content nav -->
            <nav class="has-text-right">
              <a class="button" href="/">Back to Home</a>
            </nav>
            <!-- end of content nav -->
          </div>
        </div>
      </div>
    </div>
    <!-- end of main content -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "index",
  asyncData(context) {
    return axios.get(process.env.baseUrl +'/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch()
  },
  head: {
    title: 'A Blog Post'
  }
}
</script>

<style scoped>

</style>
