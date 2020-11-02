<template>
  <div class="allwikilist">
    <p>All Wiki Entries</p>
    <div>Single One here!
    </div>
    <wiki-entry v-for="post in posts" :key="post.id" :title="post.title"></wiki-entry>
  </div>
</template>

<script>
import WikiEntry from '@/components/WikiEntry'
export default {
  name: 'AllWikiList',
  data () {
    return {
      msg: 'Welcome to the list of Wiki Entries',
      posts: [
        { id: 1, title: 'The first entry' },
        { id: 2, title: 'The second entry' },
        { id: 3, title: 'The third entry' }
      ],
      entry: {
        title: 'blah blah blah'
      }
    }
  },
  components: {
    'wiki-entry': WikiEntry
  }
}
</script>
