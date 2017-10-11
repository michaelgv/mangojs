<template>
  <div>
    <headerbar></headerbar>
    <div class="news-view view">
      <div class="news-list-nav">
        <button v-on:click="exportpost" class="btn">Export</button>        
        <router-link to="/">
          <button class="btn danger">Cancel</button>
        </router-link>
      </div>
      <div class="news-list">
        <ul>
          <li v-if="showCompiled" class="news-item stateful">
            <p>You rock! Here's your compiled post to add to the main.js file (where all your posts are stored!)</p>
            <button v-on:click="closecompiled" class="btn danger">Close</button>
            <br>
            <textarea class="regular" v-model="compiled"></textarea>
          </li>
          <li class="news-item">
            <div class="row">
              <div class="col">
                <input type="text" v-model="posttitle" placeholder="Post Name" class="vinput">
                <textarea :value="input" @input="update"></textarea>
              </div>
              <div class="col overflowable" v-html="compiledMarkdown">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import headerbar from './Header'

export default {
  name: 'Writer',
  data() {
    return {
      posts: this.$store.state.posts,
      papers: this.$store.state.papers,
      input: "",
      posttitle: "",
      posttype: 'Post',
      showCompiled: false,
      compiled: '',
    };
  },
  components: {
    headerbar,
  },
  computed: {
    compiledMarkdown: function () {
      return window.marked(this.input, { sanitize: true });
    },
  },
  methods: {
    exportpost: function () {
      if(this.input.length === 0) {
        this.input = "Replace me!";
      }
      if(this.posttitle.length === 0) {
        this.posttitle = "Whatcha going to call this post?";
      }
      var vinput = this.input;
      vinput = vinput.replace(/\n/g, "\\n").replace(/\'/g, "\\'");
      var nextID = this.$store.state.posts.length + 1;
      var slug = this.posttitle;
      slug = slug.replace(/[^a-zA-Z0-9 -]/g, '').replace(/\ /g, '-');
      var exportSlug = "{";
      exportSlug += "\n";
      exportSlug += "id: " + nextID + ",\n";
      exportSlug += "title: '" + this.posttitle + "',\n";
      exportSlug += "slug: '/post/" + nextID + "/" + slug + "',\n";
      exportSlug += "date: '" + new Date().toLocaleString() + "',\n";
      exportSlug += "content: '" + vinput + "',\n";
      exportSlug += "},";
      this.showCompiled = true;
      this.compiled = exportSlug;
    },
    closecompiled: function () {
      this.showCompiled = false;
    },
    update: window._.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
}
.col {
  flex: 1;
}
.overflowable {
  overflow-y: scroll;
  max-height: 75vh;
  padding-right: 14px;
}
@media screen and (max-width: 450px) {
  .overflowable {
    padding-left: 14px;
  }
}
.news-item {
  height: 80vh;
  padding: 0;
  margin: 0;
}
.news-item.stateful {
    padding: 20px 30px 20px 80px;
}
textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
  height: 100%;
  min-height: 200px;
  height: 70vh;
  width: 80% !important;
}
code {
  color: #f66;
}
.btn {
  border: 0px !important;
  color: #ffffff;
  background: #3498db;
  border-radius: 0px !important;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
.btn.danger {
  border: 0px !important;
  color: #ffffff;
  background: red;
  border-radius: 0px !important;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
.vinput {
  width: 88%;
  border-radius: 0px;
  padding: 4px;
  border: 1px solid #fefefe;
}
.vinput:hover, .vinput:active {
  outline: 1px solid green;
}
</style>
