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
           <h1 align="center" class="white--text">{{dodatnoTitle[lang]}}</h1>
           <br>
           <div class="white--text">
            {{services[lang]}}
            </div>
            <div class="white--text">
            {{how[lang]}}
            </div>  
             <v-btn @click="showOrder" class="white--text" flat color="warning">{{offerButton[lang]}}</v-btn>
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
      services: {
        en: `If you are sailing with us, we can provide you with additional services. These services include
      purchase of food and drink with a significant discount, cooking services on the boat, reservations in local
      restaurants, hotels, museums and other tourist sights. During the summer season, a lot of carnivals and other
      festives are being held in Montenegro and Croatia. We could provide good places with local expertize to fully
      enjoy the trip. Also, we can provide you with fishing equipment to try your luck while sailing. Diving equipment 
      and instrutors are also a possibility`,
       mne: `Ako jedrite sa nama, možemo da vam obezbjedimo dodatne usluge. Možemo da vam nabavimo
      hranu i piće sa značajnim popustima, da vam spremamo hranu na brodu, rezervišemo mjesto u lokalnim restoranima,
      hotelima, muzejima i ostalim turističkim sadržajima. Tokom ljetnje sezone, u Crnoj Gori i Hrvatskoj održava se veliki broj 
      karnevala i sličnih događaja. Možemo da vam obezbjedimo mjesto sa lokalnim vodičem kako bi u potpupnosti uživali
      u sadržaju. Takođe, možemo da vam obezbjedimo i opremu za pecanje, da oprobate sreću dok jedrite. Oprema za ronjenje 
      i instruktori takođe mogu da vam se obezbjede.`
      },
      how: {
        en: `All additional needs should be stated in the offer request. It is possible to arrange additional services 
      when you arrive at the sailboat.`,
        mne: `Svi dodatni zahtjevi treba da se navedu prilikom traženja ponude. Pored toga, dodatne usluge možete 
        zatražiti i prilikom ukrcavanja na brod.`
      },
      dodatnoTitle: {
        en: "Additional services",
        mne: "Dodatne usluge"
      },
      offerButton: {
        en: "Request an offer",
        mne: "Trazi ponudu"
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
          disabled: false,
          link: "details"
        },
        {
          text: {
            en: "Additional services",
            mne: "Dodatne usluge"
          },
          disabled: true,
          link: "additional"
        }
      ]
    };
  },
  computed: mapState({
      lang: state => state.lang
  }),
  methods: {
    showOrder() {
      this.$router.push("order");
    },
    showOrder() {
      this.$router.push("order");
    }
  }
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
