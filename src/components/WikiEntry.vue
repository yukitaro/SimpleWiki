<template>
  <div class="wiki-entry">
    <h1>An Entry Goes Here</h1>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
