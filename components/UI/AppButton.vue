<template>
  <div class="field">
    <div class="control">
      <button class="button is-link" :class="btnStyle" v-bind="$attrs" v-on="$listeners"><slot /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
