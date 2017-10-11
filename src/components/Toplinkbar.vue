<template>
  <div>
    <div class="news-view view">
      <div class="news-list-nav">
        <span v-if="displayPostCount">
          {{ posts.length }} {{ datatype }}<span v-if="posts.length > 1">s</span>
        </span>
        <span v-else>
          <span v-if="posts.length !== 0">
            <router-link v-bind:to="posts[posts.length-1].slug">Latest {{ datatype }}: {{ posts[posts.length-1].title }} posted on {{ posts[posts.length-1].date }}</router-link>
          </span>
          <span v-else>
              Awkward... I can't seem to find any {{ datatype }}<span v-if="datatype == 'Post'">s</span> yet. Try back later?
          </span>
        </span>
      </div>
      <newslist v-if="posts.length !== 0" v-bind:posts="posts"></newslist>
    </div>
  </div>
</template>

<script>
  import newslist from './Newslist'

  export default {
    props: ['posts', 'datatype'],
    name: 'toplinkbar',
    data() {
      return {
          displayPostCount: false,
      };
    },
    components: {
        newslist,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
