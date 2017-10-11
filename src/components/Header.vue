<template>
  <header class="header">
    <nav class="inner">
      <a href="/" class="">
        {{ blog_title }}
      </a>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/papers">Papers</router-link>
      <router-link to="/contact">Contact</router-link>
      <span v-if="dev">
        <router-link to="/write">New Post</router-link>
      </span>
      <a href="#" target="_blank" rel="noopener" class="github">
        Built with Mango.js
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerbar',
  data() {
    return {
        blog_title: 'Devblog',
        dev: this.$store.state.devmode,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
