<template>
  <div class="wikihome">
    <p>This will be my Wiki Home</p>
   <wiki-entry v-bind:title="entry.title"></wiki-entry>
   </div>
</template>

<script>
import WikiEntry from '@/components/WikiEntry'
export default {
  name: 'WikiHome',
  data () {
    return {
      msg: 'Welcome to the Wiki Home',
      entry: { title: 'My First Entry!!' }
    }
  },
  components: {
    'wiki-entry': WikiEntry
  }
}
</script>
