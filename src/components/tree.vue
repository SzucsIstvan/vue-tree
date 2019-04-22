<template>
  <ul :class="`length-${itemCounter} ${openClass} ${classValue}`"
      :key="componentKey"
      :style="`height: ${height}px`">
    <item v-for="(item, index) in items"
          :item="item"
          ref="items"
          :index="index"
          :searchText="getSearchText"
          @opened="opened">
    </item>
  </ul>
</template>

<script>

export default {
  name: 'tree',
  props: ["data", "open", "searchText", 'classValue', 'first'],
  data() {
    return {
      items: this.data,
      itemCounter: this.data.length,
      openTree: this.open,
      openedId: null,
      cachedItems: null,
      prevSearchText: null,
      componentKey: 0,
    }
  },
  computed: {

    getSearchText() {

      if (this.isFirst &&
          this.prevSearchText != null &&
          this.prevSearchText != this.searchText) {
        this.reloadDataFromCache();
      }
      this.prevSearchText = this.searchText;
      return this.searchText;

    },
    isFirst() {
      return typeof this.first != "undefined" && this.first ? this.first : false;
    },
    openProps() {
      this.openTree = this.open;
      return this.open;
    },
    isOpen() {
      this.openProps;
      return this.openTree;
    },
    openClass() {
      return this.isOpen ? 'menu-open' : '';
    },
    height() {
      const id = this.openedId;

      if (this.isOpen) {
        return this.heightMethod();
      } else {
        return 0;
      }
    }
  },
  methods: {
    opened(index, id) {
      this.openTree = true;
      this.openedId = id;
      this.$emit("openedTree", index, id);
    },
    treeHeight() {
      var height = 0;

      if (this.isOpen) {
        height += this.itemCounter * 20;
      }

      return height;
    },
    heightMethod() {
      let height = 0;
      if (typeof this.$refs.items != "undefined") {
        this.$refs.items.forEach(item => {
          height += item.itemHeight;
        });
      }
      return height;
    },
    reloadDataFromCache() {
      try {
        this.items = JSON.parse(this.cachedItems);
        this.componentKey += 1;
      } catch (e) {
        console.log("error: ", e);
      }
    }
  },

  mounted() {
    this.openedId = -1;
    if (this.isFirst) {
      this.cachedItems = JSON.stringify(this.data);
    }
  }
}
</script>
