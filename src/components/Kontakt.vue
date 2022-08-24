<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
          <div class="rounded" align="center" xs12>
          <div>
           <v-breadcrumbs divider="/" large justify-center>
            <v-breadcrumbs-item
            v-for="item in bread"
            :key="item.text"
            :disabled="item.disabled"
            :to="item.link"
            >
            {{ item.text[lang] }}
            </v-breadcrumbs-item>
           </v-breadcrumbs>
           </div>
          <br>
           <h1 align="center" class="white--text">{{terms[lang]}}</h1>
           <br>
           <div class="white--text">
            {{telefon[lang]}} <a href="tel:+382-67-456-456">+382(0)67 456 456</a>
            </div>
            <br>
            <div class="white--text">
            {{email[lang]}} <a href="mailto:montenegrocharters@gmail.com">montenegrocharters@gmail.com</a>
            </div>
           </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import store from '../store/store';
import * as type from '../store/types';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      telefon: {
        en: "phone (active 11:00 - 22:00 CET): ",
        mne: "telefon (aktivan 11:00 - 22:00 CET): "
      },
      email: {
        en: "email (active 24/7): ",
        mne: "email (aktivan 24h): "
      },
      terms: {
        en: "Contact:",
        mne: "Kontakt:"
      },
      bread: [
        {
          text: {
            en: "Home",
            mne: "Naslovna"
          },
          disabled: false,
          link: "/"
        },
        {
          text: {
            en: "Contact",
            mne: "Kontakt"
          },
          disabled: true,
          link: "basic"
        }
      ]
    };
  },
  methods: {
    showOrder() {
      this.$router.push("order");
    },
    showAdditional() {
      this.$router.push("additional");
    }
  },
  computed: mapState({
      lang: state => state.lang
  })
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.rounded {
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;
}
</style>
