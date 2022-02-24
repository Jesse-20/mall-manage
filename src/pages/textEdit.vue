<template>
  <div class="textEdit-container">
    <quill-editor ref="myQuillEditor" v-model="content"></quill-editor>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name: "textEdit",
  components: {
    quillEditor,
  },
  data() {
    return {
      content: "<h2>I am Example</h2>",
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.textEdit-container {
  display: flex;
  justify-content: center;
}
</style>
