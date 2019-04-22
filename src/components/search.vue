<template>
  <input type="text"
          class="form-control"
          placeholder="Text input"
          v-model="text"
          @input="change" />
</template>
<script>

export default {
  name: 'search',
  data() {
    return {
      text: null,
      timer: null,
      timeoutInMs: 80
    }
  },
  methods: {
    change() {

      if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
      }

      this.timer = setTimeout(() => {
        this.$emit("searchTextChange", this.text);
      }, this.timeoutInMs);

    }
  }
}
</script>
