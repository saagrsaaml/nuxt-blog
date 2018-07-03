<template>
  <div class="field">
    <div class="input-control">
      <label class="label"><slot /></label>
      <div class="control" v-if="controlType === 'input'">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-bind="$attrs"
          :vlaue="value"
          @input="$emit('input', $event.target.value)"
        >
      </div>
      <div class="control" v-if="controlType === 'textarea'">
        <textarea
          class="textarea"
          placeholder="Explain how we can help you"
          :value="value"
          @input="$emit('input', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppControlInput",
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
