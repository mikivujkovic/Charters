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
           <h1 align="center" class="white--text">{{titleLabel[lang]}}</h1>
           <br>
           <table>
            <tbody>
              <tr>
                <td>{{tableTitle[lang]}}</td>
                <td>1.12 - 31.3</td>
                <td>1.4 - 30.4</td>
                <td>1.5 - 31.5</td>
                <td>1.6 - 15.6</td>
                <td>21.6 - 10.7</td>
                <td>21.7 - 31.8</td>
                <td>1.9 - 30.9</td>
                <td>1.10 - 20.11</td>
                <td>21.11 - 30.11</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <div>Elan Impression 384</div>
                  </div>
                </td>
                <td>200</td>
                <td>250</td>
                <td>300</td>
                <td>400</td>
                <td>450</td>
                <td>500</td>
                <td>400</td>
                <td>350</td>
                <td>300</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <div>Jeanneau Sun Odyssey 45</div>
                  </div>
                </td>
                <td>300</td>
                <td>350</td>
                <td>400</td>
                <td>500</td>
                <td>550</td>
                <td>600</td>
                <td>500</td>
                <td>450</td>
                <td>400</td>
              </tr>
            </tbody>
          </table>
          <br>
          <div class="white--text">{{popust[lang]}}</div>
          <br>
          <div class="white--text">{{priceDodatno[lang]}}</div>
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
      titleLabel: {
        en: "Price List",
        mne: "Cjenovnik"
      },
      tableTitle: {
        en: "price per day (€)",
        mne: "cijena po danu (€)"
      },
      priceDodatno: {
        en: `Skipper price is:
        EUR 110/day for Elan yacht,
        EUR 130/day for Jeanneau yacht
        `,
        mne: `Cijena za skipera je:
        110 €/dan za Elan jahtu,
        130 €/dan za Jeanneau jahtu
        `
      },
      popust: {
        en: `For 3 day charter you get 10% discount,
        for 4 day charter you get 15% discount,
        for 5 day charter you get 20% discount,
        for 6 day charter you get 25% discount and
        for 7 day charter you get 30% discount`,
        mne: `Za charter u trajanju od 3 dana dobijate 10% popusta,
        za 4 dana dobijate 15%  popusta,
        za 5 dana dobijate 20% popusta,
        za 6 dana dobijate 25% popusta i 
        za 7 dana dobijate 30% popusta`
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
            en: "Price List",
            mne: "Cjenovnik"
          },
          disabled: true,
          link: "priceList"
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
table {  
    color: white; /* Lighten up font color */
    font-family: Helvetica, Arial, sans-serif; /* Nicer font */
    width: 640px; 
    border-collapse: 
    collapse; border-spacing: 0; 
}

td, th { border: 1px solid #CCC; height: 30px; } /* Make cells a bit taller */

th {  
    background: rgba(0, 0, 0, 0.6); /* Light grey background */
    font-weight: bold; /* Make sure they're bold */
}

td {  
    background: rgba(0, 0, 0, 0.6); /* Lighter grey background */
    text-align: center; /* Center our text */
}
</style>
