<template>
  <div class="post">
    <!-- post content -->
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="thumbnail" :alt=" title + ' ' + previewText ">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="content-header">
            <h3 class="title is-3"><b><nuxt-link :to="postLink" tag="a">{{ title }}</nuxt-link></b></h3>
            <h4 class="subtitle is-3 is-spaced">{{ previewText }}</h4>
            <hr>
            <h6 class="subtitle is-6">Posted by Author on April 7th 2017 at 9:33pm</h6>
          </div>
        </div>
      </div>
    </div>
    <!-- end of post content -->
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style scoped>

</style>
