<template>
  <div>
    <div class="news-view view">
      <div class="news-list-nav">
        {{ title }}
      </div>
      <div class="news-list">
        <ul>
          <li class="news-item">
            <h3 class="title">{{ title }}</h3>
            <h4 class="subtitle" v-if="hassubtitle">
              {{ subtitle }}
            </h4>
            <p v-html="content"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    name: 'papercontent',
    data() {
      return {
        title: '',
        content: '',
        postedDate: '',
        hassubtitle: false,
        subtitle: '',
      };
    },
    mounted() {
      this.title        = this.$store.state.papers[this.id].title;
      this.content      = window.marked(this.$store.state.papers[this.id].content, { sanitize: true });
      this.postedDate   = this.$store.state.papers[this.id].date;
      this.hassubtitle  = typeof(this.$store.state.papers[this.id].subtitle) !== 'undefined';
      this.subtitle     = this.$store.state.papers[this.id].subtitle || '';
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
