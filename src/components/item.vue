<template>
  <li :class="isVisible">
      <a @click.prevent="itemValue.open ? itemValue.open = false : itemValue.open = true"
          :href="itemValue.link">{{ itemValue.name }}</a>
      <tree v-if="hasChildren"
            ref="tree"
            :data="itemValue.children"
            :open="itemValue.open"
            :searchText="searchText"
            @openedTree="openedTree"/>
  </li>
</template>

<script>
const itemHeight = 20;

export default {
  name: 'item',
  props: ["item", "index", "searchText"],
  data() {
    return {
      itemValue: this.item,
    }
  },
  computed: {
    itemHeight() {
      let height = itemHeight;
      if (this.itemValue.open && this.hasChildren) {
        let h = this.$refs.tree.heightMethod();
        height += h;
      }
      return height;
    },
    hasChildren() {
      return Object.keys(this.itemValue.children).length > 0;
    },
    isOpen() {
      if (this.itemValue.open) {
        this.$emit("opened", this.index, this.itemValue.link);
      }
      return this.itemValue.open;
    },
    isVisible() {
      let classes = '';
      let separator = '';

      if (this.textFilter) {
        classes += separator + "filtered-visible";
        separator = ' ';
      }

      if (this.isOpen) {
        classes += separator + "visible";
        separator = ' ';
      }

      return classes;
    },
    isSelected() {
      return this.itemValue.link.indexOf()
    },
    textFilter() {
      if (typeof this.searchText != "undefined" && this.searchText) {
        if (this.itemValue.name.toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase()) != -1) {
          this.$emit("opened", this.index, this.itemValue.link);
          return true;
        }
      }

      return false;

    }
  },

  methods: {
    openedTree(index, id) {
      this.itemValue.open = true;
    },


  }
}
</script>
