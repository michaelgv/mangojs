<template>
  <div>
    <headerbar></headerbar>
    <toplinkbar v-bind:posts="posts" v-bind:datatype="posttype"></toplinkbar>
  </div>
</template>

<script>
import headerbar from './Header'
import toplinkbar from './Toplinkbar'

export default {
  name: 'HelloWorld',
  data() {
    return {
      posts: this.$store.state.posts,
      posttype: 'Post',
    };
  },
  components: {
    headerbar,
    toplinkbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
