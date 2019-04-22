<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-lg-4">
        <h1>Tree</h1>
        <search @searchTextChange="searchTextChanger" />
        <tree :data="menuTree"
              :first="true"
              :searchText="searchText"
              :class-value='filteredMenuTree'
              open="true"/>
      </div>
    </div>

  </div>
</template>
<style>
  ul.filtered li {
    display: none;
    height: auto!important;
  }

  ul.filtered li > ul {
    display: none;
    height: auto!important;
  }

  ul.filtered li.visible, ul.filtered li.filtered-visible {
    display: block;
  }

  ul.filtered li.filtered-visible ul li {
    display: block;
  }

  ul.filtered li.visible > ul.menu-open {
    display: block;
  }

  ul {
    display:block;
    height: 0;
    overflow: hidden;
    transition: height .1s;
  }
  ul.menu-open {
    display: block;
    height: auto;
  }
  li.filtered-visible > a {
    font-weight: bold;
  }
</style>
<script>

export default {
  name: 'app',
  methods: {
    searchTextChanger(text) {
      this.searchText = text;
    }
  },
  computed: {

    filteredMenuTree() {
      return this.searchText ? 'filtered' : '';
    }

  },
  data() {
    return {
      searchText: null,
      menuTree: [
        {
          name: 'Engine',
          link: 'akarmi',
          open: false,
          children: [
            {
              name: 'Filters',
              link: 'akarmi',
              open: false,
              children: [
                {
                  name: 'Exhaust',
                  link: 'akarmi',
                  open: false,
                  children: [],
                },

                {
                  name: 'Air filters',
                  link: 'akarmi',
                  open: false,
                  children: [
                    {
                      name: 'Paper air filter',
                      link: 'akarmi',
                      open: false,
                      children: [],
                    }
                  ],
                },
                {
                  name: 'Catalisator',
                  link: 'akarmi',
                  open: false,
                  children: [],
                },
                {
                  name: 'Sub-particle filter',
                  link: 'akarmi',
                  open: false,
                  children: [],
                },

              ],
            },
            {
              name: 'Spark plugs',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              name: 'Cylinders',
              link: 'akarmi',
              open: false,
              children: [],
            },

          ],
        },
        {
          name: 'Brakes',
          link: 'akarmi',
          open: false,
          children: [],
        },
        {
          name: 'Chassis',
          link: 'akarmi',
          open: false,
          children: [
            {
              name: 'Front windscreen',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              name: 'Rear windscreen',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              name: 'Left door',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              name: 'Right door',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              name: 'Right Paper',
              link: 'akarmi',
              open: false,
              children: [],

            },
          ],
        },
        {
          name: 'Interior',
          link: 'akarmi',
          open: false,
          children: [],
        },
        {
          name: 'Rear-view mirrors',
          link: 'akarmi',
          open: false,
          children: [],
        },

      ]
    }
  }
}

</script>
