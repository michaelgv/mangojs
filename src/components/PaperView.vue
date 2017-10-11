<template>
  <div>
    <headerbar></headerbar>
    <papercontent v-bind:id="this.$route.params.id-1"></papercontent>
  </div>
</template>

<script>
  import headerbar from './Header'
  import papercontent from './PaperContent'
  export default {
    props: ['id', 'title'],
    name: 'PaperView',
    data() {
      return {
        title: '',
        content: '',
      };
    },
    mounted() {
      this.title = this.$store.state.papers[this.$route.params.id-1].title;
      this.content = this.$store.state.papers[this.$route.params.id-1].content;
    },
    components: {
      headerbar,
      papercontent
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
