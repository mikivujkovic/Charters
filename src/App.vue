<template>
  <v-app class="bgfull">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      style="background-color:transparent;"
    >
    <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile >
            <v-list-tile-content>
              <v-list-tile-title class="white--text title">Menu</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="item in items" 
          :key="item.title" 
          @click="showOrder(item.click)"
        >
          <v-list-tile-action>
            <v-icon color="blue">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="white--text">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      flat
      fixed
      extended
      style="background-color:transparent;"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-btn flat @click="goHome" v-text="title" class="white--text" style="background-color:transparent"></v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer style="background-color:transparent;">
      <v-layout row wrap justify-center>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>MontenegroCharters.me</strong>
      </v-flex>
    </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { title: 'Home', icon: 'account_balance', click: '/' },
        { title: 'Details', icon: 'directions_boat', click: 'details' },
        { title: 'Book', icon: 'schedule', click: 'order' },
        { title: 'About', icon: 'business', click: 'order' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Montenegro Charters'
    }
  },
  name: 'App',
  methods: {
    goHome() {
      this.$router.push('/');
    },
    showDetails() {
      this.$router.push('details')
    },
    showOrder(x) {
      this.$router.push(x)
    }
  }
}
</script>

<style scoped>
.bgfull { 
    /* The image used */
    background-image: url("./assets/background.jpg");

    /* Full height */
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

