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
                  <h6 class="subtitle is-6">Posted by {{ loadedPost.author }} on {{ loadedPost.updateDate }}</h6>
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
export default {
  name: "index",
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          thumbnail: "https://thumbs.dreamstime.com/b/woman-wearing-yellow-floral-top-116695890.jpg",
          title: "Old People Work Hard (ID: " + context.route.params.id +")",
          previewText: "At least I believe they do",
          author: 'Sagar',
          updateDate: new Date(),
          content: 'Some dummy text'
          }
      })
    }, 1500)
  }
}
</script>

<style scoped>

</style>
