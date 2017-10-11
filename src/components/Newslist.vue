<template>
  <div>
    <div class="news-list">
      <ul>
        <li v-if="showPostlist" class="news-item" v-for="post in posts">
          <span class="score">
            {{ post.id }}
          </span>
          <span class="title">
            <router-link v-bind:to="post.slug">
              {{ post.title }}
            </router-link>
          </span>
        </li>
        <li v-else class="news-item">
          <span class="score">
            :(
          </span>
          <span class="title">
            No posts made yet... sorry!
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['posts'],
    name: 'newslist',
    data() {
      return {
        showPostlist: true,
      };
    },
    mounted () {
      if(this.$store.state.posts.length === 0) {
        this.showPostlist = false;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
