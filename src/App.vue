<template>
  <v-app 
  style="background-image: url('https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean5.jpeg?alt=media&token=a3ad66b8-e12d-40d5-99dd-d9b9746ad0b0');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      style="background-color:rgba(0, 0, 0, 0.6);"
    >
    <v-toolbar 
    flat 
    class="transparent" 
    >
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
          @click="showItem(item.click)"
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
      style="background-color:rgba(0, 0, 0, 0.5);"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-btn flat @click="goHome" v-text="title" class="white--text" style="background-color:transparent"></v-btn>
      <v-spacer></v-spacer>
      <div @click="toMNE" >
      <v-toolbar-items class="hidden-sm-and-down">
        <flag iso="me" />
      </v-toolbar-items>
      </div>
      <div @click="toUS" > 
      <v-toolbar-items class="hidden-sm-and-down">
        <flag iso="us" />
      </v-toolbar-items>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat color="orange" @click="showOrder">Request an offer</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer style="background-color:rgba(0, 0, 0, 0.6);">
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
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { title: "Home", icon: "home", click: "/" },
        { title: "Details", icon: "dashboard", click: "details" },
        { title: "Basic information", icon: "assignment", click: "basic" },
        {
          title: "Additional services",
          icon: "assignment",
          click: "additional"
        },
        {
          title: "Elan Impression 384",
          icon: "directions_boat",
          click: "boatsElan"
        },
        {
          title: "Jeanneau Sun Odyssey 45",
          icon: "directions_boat",
          click: "boatsJean"
        },
        { title: "REQUEST AN OFFER", icon: "euro_symbol", click: "order" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Montenegro Charters"
    };
  },
  name: "App",
  methods: {
    goHome() {
      this.$router.push("/");
    },
    showDetails() {
      this.$router.push("details");
    },
    showOrder() {
      this.$router.push("order");
    },
    showItem(x) {
      this.$router.push(x);
    }
  }
};
</script>

<style scoped>
.bgfull {
  /* The image used */
  background-image: url("https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean5.jpeg?alt=media&token=a3ad66b8-e12d-40d5-99dd-d9b9746ad0b0");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
