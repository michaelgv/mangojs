<template>
  <div>
    <headerbar></headerbar>
    <postcontent v-bind:id="this.$route.params.id-1"></postcontent>
  </div>
</template>

<script>
  import headerbar from './Header'
  import postcontent from './PostContent'
  export default {
    props: ['id', 'title'],
    name: 'PostView',
    data() {
      return {
        title: '',
        content: '',
      };
    },
    mounted() {
      this.title = this.$store.state.posts[this.$route.params.id-1].title;
      this.content = this.$store.state.posts[this.$route.params.id-1].content;
    },
    components: {
      headerbar,
      postcontent
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
