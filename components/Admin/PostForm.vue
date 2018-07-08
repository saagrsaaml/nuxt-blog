<template>
  <form @submit.prevent="onSave">
    <div class="field is-vertical">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
      <AppControlInput v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
      <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
      <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
      <AppButton type="submit">Save</AppButton>
      <AppButton type="button" @click="onCancel">Cancel</AppButton>
    </div>
  </form>
</template>

<script>
  export default {
    name: "PostForm",
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    data() {
      return {
        editedPost: this.post  // check if post exists
          ? { ...this.post }
          : {
              author: '',
              title: '',
              thumbnail: '',
              content: '',
              previewText: '',
            }
      }
    },
    methods: {
      onSave () {
        // Save the post
        this.$emit('submit', this.editedPost)
      },
      onCancel () {
        // Navigate Back

        this.$router.push('/admin')
      }
    }
  }
</script>

<style scoped>
</style>
