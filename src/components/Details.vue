<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
          <div class="rounded" align="center" xs12>
          <div>
           <v-breadcrumbs divider="/" justify-center large >
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
           <h1 align="center" class="white--text">{{basicTitle[lang]}}</h1>
           <br>
           <div class="white--text">
            {{basic[lang]}} 
           <br>
           <v-btn @click="showPriceList" class="white--text" flat color="warning">{{priceTitle[lang]}}</v-btn>
           <v-btn @click="showBasic" class="white--text" flat color="warning">{{moreTitle[lang]}}</v-btn>
           </div>
          </div>
          <br>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">{{boatsTitle[lang]}}</h1>
           <br>
           <div class="white--text">
           {{boats[lang]}}
           </div>
           <v-btn @click="showElan" class="white--text" flat color="warning">Elan Impression 384</v-btn>
           <v-btn @click="showJean" class="white--text" flat color="warning">Jeanneau Sun Odyssey 45</v-btn>
          </div>
          <br>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">{{addTitle[lang]}}</h1>
           <br>
           <div class="white--text">
           {{additional[lang]}}
           </div>
           <v-btn @click="showAdditional" class="white--text" flat color="warning">{{addTitle[lang]}}</v-btn>
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
      basicTitle: {
        en: "Basic information",
        mne: "Osnovne informacije"
      },
      priceTitle: {
        en: "Price List",
        mne: "Cjenovnik"
      },
      moreTitle: {
        en: "More info",
        mne: "Dodatne informacije"
      },
      boatsTitle: {
        en: "Boats",
        mne: "Brodovi"
      },
      addTitle: {
        en: "Additional services",
        mne: "Dodatne usluge"
      },
      basic: {
        en: `Sailboats are usualy rented from Saturday to Saturday. If we have a free sailboat we could rent it for less that seven 
      days, even for a few hours. Just request an offer and state what you need. We will get back to you as soon as possible. When we check 
      the availability of the sailboats we will send you an offer based on your request details. If you accept an offer we will send you 
      an invoice and payment instructions. Sailboat is booked at the moment of payment. For more information about pricing and conditions
      click below`,
        mne: `Jedrilice se obično iznajmljuju od subote do subote. Ukoliko imamo brod na raspolaganju, možemo vam ga iznajmiti i na manje od 
        sedam dana, čak i na nekoliko sati. Samo zatražite ponudu i napišite šta vam treba. Odgovorićemo Vam u najkraćem mogućem roku. Kada
        provjerimo raspoloživost brodova, poslaćemo vam ponudu zasnovanu na vašem zahtjevu. Ukoliko prihvatite ponudu, poslaćemo vam fakturu i 
        instrukcije za plaćanje. Jedrilica je rezervisana momentom plaćanja. Za dodatne informacije o cijenama i uslovima kliknite`
      },
      boats: {
        en: `Currently we have two sailboats: Elan Impression 384 and Jeanneau Sun Odyssey 45. Both vessels are in excellent condition and are renovated during 2018. 
      These are owners vessels. You can find more information and pictures of the boats by clicking below`,
        mne: `Trenutno raspolažemo sa dva broda: Elan Impression 384 i Jeanneau Sun Odyssey 45. Oba broda su u izvrsnom stanju i osvježeni su 2018. godine. 
        U pitanju su vlasnički brodovi. Za više informacija kao i fotografije brodova kliknite ispod`
      },
      additional: {
        en: `Sailboats will be accompanied with our skipper. You can request additional services like purchasing and preparing food,
      sightseeing, restaurant or hotel reservations. We have very good connections with regional service providers and can make you excellent deals\
      on food, drink and accomodation. For more info on additional services click below`,
        mne: `Jedrilice će voziti naš skiper. Možete zatražiti dodatne usluge kao što je nabavka i spremanje hrane, obilazak istorijskih mjesta,
        restorana ili rezervaciju hotela. Dobro smo povezani sa regionalnim pružaocima usluga i možemo da vam obezbjedimo dobre popuste na hranu,
        piće i smještaj. Za više informacija kliknite ispod`
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
            en: "Details",
            mne: "Detalji"
            },
          disabled: true,
          link: "details"
        }
      ]
    };
  },
  methods: {
    showOrder() {
      this.$router.push("order");
    },
    showBasic() {
      this.$router.push("basic");
    },
    showAdditional() {
      this.$router.push("additional");
    },
    showElan() {
      this.$router.push("boatsElan");
    },
    showJean() {
      this.$router.push("boatsJean");
    },
    showPriceList() {
      this.$router.push("priceList");
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
