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
      fixed
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
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
              <v-list-tile-title class="white--text title">{{menu[lang]}}</v-list-tile-title>
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
            <v-list-tile-title v-text="item.title[lang]"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div style="padding: 10px">
       <div @click="changeToMne" >
        <v-toolbar-items>
          <flag iso="me" />
        </v-toolbar-items>
      </div>
      <div @click="changeToEn" > 
      <v-toolbar-items>
        <flag iso="us" />
      </v-toolbar-items>
      </div>
      </div>
    </v-navigation-drawer>
    <v-toolbar
      app
      style="background-color:rgba(0, 0, 0, 0.5);"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <div @click="changeToMne" >
      <v-toolbar-items>
        <flag iso="me" />
      </v-toolbar-items>
      </div>
      <div @click="changeToEn" > 
      <v-toolbar-items>
        <flag iso="us" />
      </v-toolbar-items>
      </div>
      <v-btn flat @click="goHome" v-text="title" class="white--text" style="background-color:transparent"></v-btn>
      <v-toolbar-items>
        <v-btn flat color="orange" @click="showOrder">{{request_button[lang]}}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn flat color="white" class="headline" @click="showContact">&#9743;</v-btn>
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

import store from './store/store';
import * as type from './store/types';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      clipped: false,
      menu: {
        en: 'Menu',
        mne: 'Meni'
      },
      drawer: false,
      fixed: false,
      items: [
        { title: {
          en: "Home",
          mne: "Naslovna"
          }, 
        icon: "home", 
        click: "/" 
        },
        { title: {
          en: "Details",
          mne: "Detalji"
        }, 
        icon: "dashboard", 
        click: "details" 
        },
        { title: {
          en: "Basic information",
          mne: "Osnovne informacije"
        }, 
        icon: "assignment", 
        click: "basic" 
        },
        {
          title: {
            en: "Additional services",
            mne: "Dodatne usluge"
          },
          icon: "assignment",
          click: "additional"
        },
        {
          title: {
            en: "Elan Impression 384",
            mne: "Elan Impression 384"
          },
          icon: "directions_boat",
          click: "boatsElan"
        },
        {
          title: {
            en: "Jeanneau Sun Odyssey 45",
            mne: "Jeanneau Sun Odyssey 45"
          },
          icon: "directions_boat",
          click: "boatsJean"
        },
        {
          title: {
            en: "PriceList",
            mne: "Cjenovnik"
          },
          icon: "directions_boat",
          click: "priceList"
        },
        {
          title: {
            en: "Contact",
            mne: "Kontakt"
          },
          icon: "contact_phone",
          click: "contact"
        },
        { title: {
          en:"REQUEST AN OFFER",
          mne: "TRAZI PONUDU"
        }, 
        icon: "euro_symbol", 
        click: "order" 
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Montenegro Charters",
      request_button: {
        en: "Request an offer",
        mne: "Trazi ponudu"
      }
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
    showContact() {
      this.$router.push("contact");
    },
    showItem(x) {
      this.$router.push(x);
    },
    changeToMne() {
      store.dispatch({
            type: type.ChangeToMNE,
            newLang: 'mne'
          })
    },
    changeToEn() {
       store.dispatch({
            type: type.ChangeToEN,
            newLang: 'en'
          })
    }
  },
  computed: mapState({
      lang: state => state.lang
  })
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
