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
            {{included[lang]}}
            </div>
            <div class="white--text">
            {{notIncluded[lang]}}
            </div>  
             <v-btn @click="showAdditional" class="white--text" flat color="warning">{{dodatnoButton[lang]}}</v-btn>
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
      included: {
        en: `We provide a skipper for every sailboat. If you have a skipper licence and would like to sail on your own,
      please state this in the offer request and we will contact you regarding the details. Sailboat will be ready for charter in the 
      afternoon of the first contracted day (usually Saturday). You are required to return to the base port on the last contracted day, 
      until 17:00. 
      The sailboat and passengers are insured during the whole charter. 
      All necessary security equipment is provided on the boat. 
      We provide bed linen and towels for contracted number of people on the boat. 
      Additional bed linen or towels can be ordered.
      Every boat includes espresso machine, juicer, fridge, stove, HI FI and TV.
      WIFI in Montenegro teritorial waters`,
        mne: `Mi obezbjeđujemo skipera za svaki brod. Ako imate licencu za skipera i želite da jedrite sami, molimo vas da to
        navedete u zahtjevu za ponudu i mi ćemo vas kontaktirati u vezi sa detaljima. Jahta će biti spremna za isplovljavanje popodne
        prvog ugovorenog dana (obično subota). Obavezno je vraćanje u matičnu luku posljednjeg ugovorenog dana do 17:00. 
        Jahta i putnici su osigurani tokom cijelog trajanja puta. 
        Sva oprema neophodna za plovidbu nalazi se na brodu. 
        Mi ćemo obezbjediti posteljinu i peškire za broj putnika naveden u zahtjevu za ponudu. 
        Možete tražiti da vam obezbjedimo dodatnu posteljinu i peškire.
        Svaki brod posjeduje espreso aparat, sokovnik, frižider, šporet, HI FI i TV.
        U teritorijalnim vodama Crne Gore moguće je koriščenje WIFI-ja.`
      },
      notIncluded: {
        en:`For an additional fee, we can provide you with a rubber boat, fishing equipment, additional towels or bed
      linen. Price does NOT INCLUDE: skipper fee, marine and anchor parking fees, electricity, water, garbage and fuel costs during the charter,
      other marine fees, fees and duties necessary to enter territorial waters of the countries you are sailing trough, food and drink
      and other expenses of the guests. We can provide you with additional services which you can find on the link below:`,
        mne: `Uz doplatu možemo da vam obezbjedimo gumeni čamac, opremu za pecanje, dodatne peškire ili posteljinu. Cijena nevedena u 
        cjenovniku ne uključuje naknadu za skipera, troškove marine i parkiranja, troškove struje, vode, odlaganja otpada i goriva tokom trajanja
        chartera, ostale troškove u marinama, takse i naknade za uplovljavanje u teritorijalne vode zemalja kroz koje se jedri, hranu, piće i 
        ostale troškove gostiju. Možemo da vam obezbjedimo dodatne usluge koje su detaljno opisane na linku ispod:`
      },
      dodatnoButton: {
        en: "Additional services",
        mne: "Dodatne usluge"
      },
      terms: {
        en: "Terms and conditions",
        mne: "Osnovna prava i obaveze"
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
            en: "Basic information",
            mne: "Osnovne infromacije"
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
