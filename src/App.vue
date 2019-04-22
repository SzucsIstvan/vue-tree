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
          id: 0,
          name: 'Engine',
          link: 'akarmi',
          open: false,
          children: [
            {
              id: 1,
              name: 'Filters',
              link: 'akarmi',
              open: false,
              children: [
                {
                  id: 2,
                  name: 'Exhaust',
                  link: 'akarmi',
                  open: false,
                  children: [],
                },

                {
                  id: 3,
                  name: 'Air filters',
                  link: 'akarmi',
                  open: false,
                  children: [
                    {
                      id: 4,
                      name: 'Paper air filter',
                      link: 'akarmi',
                      open: false,
                      children: [],
                    }
                  ],
                },
                {
                  id: 5,
                  name: 'Catalisator',
                  link: 'akarmi',
                  open: false,
                  children: [],
                },
                {
                  id: 6,
                  name: 'Sub-particle filter',
                  link: 'akarmi',
                  open: false,
                  children: [],
                },

              ],
            },
            {
              id: 7,
              name: 'Spark plugs',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              id: 8,
              name: 'Cylinders',
              link: 'akarmi',
              open: false,
              children: [],
            },

          ],
        },
        {
          id: 9,
          name: 'Brakes',
          link: 'akarmi',
          open: false,
          children: [],
        },
        {
          id: 10,
          name: 'Chassis',
          link: 'akarmi',
          open: false,
          children: [
            {
              id: 11,
              name: 'Front windscreen',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              id: 12,
              name: 'Rear windscreen',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              id: 13,
              name: 'Left door',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              id: 14,
              name: 'Right door',
              link: 'akarmi',
              open: false,
              children: [],
            },
            {
              id: 14,
              name: 'Right Paper',
              link: 'akarmi',
              open: false,
              children: [],

            },
          ],
        },
        {
          id: 15,
          name: 'Interior',
          link: 'akarmi',
          open: false,
          children: [],
        },
        {
          id: 16,
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
