<template>
  <div>
    <headerbar></headerbar>
    <div class="news-view view">
      <div class="news-list-nav">
        Contact Me
      </div>
      <div class="news-list">
        <ul>
          <li class="news-item">
            <p v-html="aboutmepure">
            </p>
            <br />
            <p v-if="this.$store.state.contact.enableSocialMedia">
              Instagram: {{ this.$store.state.contact.socialMedia.instagram }}<br />
              Facebook: {{ this.$store.state.contact.socialMedia.facebook }}<br />
              Email: {{ this.$store.state.contact.email }}<br />
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import headerbar from './Header'
  import toplinkbar from './Toplinkbar'

  export default {
    name: 'ContactWorld',
    data() {
      return {
        aboutmepure: '',
      };
    },
    components: {
      headerbar,
      toplinkbar
    },
    mounted() {
        this.aboutmepure = window.marked(this.$store.state.contact.aboutme) || '';
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
