<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
         <div class="back" style="min-width:500px">
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
           <v-form v-model="valid" ref="form" lazy-validation>
            <v-select
              dark
              :label="boatLabelStart[lang]"
              v-model="selectBoat"
              :items="boats"
              :rules="[v => !!v || 'Item is required']"
              required
              @input="boatSelected"
            ></v-select>
            <v-dialog
                ref="dialog"
                persistent
                v-model="modal"
                lazy
                full-width
                width="290px"
                :return-value.sync="picker"
              >
                <v-text-field
                  dark
                  slot="activator"
                  :label="dateLabelStart[lang]"
                  v-model="picker"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker 
                  v-model="picker" 
                  :landscape="landscape" 
                  :reactive="reactive"
                  event-color="red"
                  :events="eventsArray"
                  color="orange"
                  @input="dateSelected"
                >
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="modalClick">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialog.save(picker)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            <v-dialog
                ref="dialog1"
                persistent
                v-model="modal1"
                lazy
                full-width
                width="290px"
                :return-value.sync="pickerEnd"
                :disabled="endDisabled"
              >
                <v-text-field
                  dark
                  slot="activator"
                  :label="dateLabelEnd[lang]"
                  v-model="pickerEnd"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker 
                  v-model="pickerEnd" 
                  :landscape="landscape" 
                  :reactive="reactive"
                  event-color="red"
                  :events="eventsArray"
                  color="orange"
                  @input="endDateSelected"
                >
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="modal1Click">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialog1.save(pickerEnd)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            <v-text-field
              name="duration"
              :label="durationLabel[lang]"
              dark
              v-model="duration"
              @input="durationChanged"
              >
            </v-text-field>
            <v-text-field
              name="people"
              :label="peopleLabel[lang]"
              v-model="people"
              @change="peopleChanged"
              dark>
            </v-text-field>
            <v-text-field
              name="towels"
              :label="towelsLabel[lang]"
              v-model="addTowels"
              @change="towelsChanged"
              dark>
            </v-text-field>
            <v-text-field
              name="linen"
              :label="linenLabel[lang]"
              v-model="addLinen"
              @change="linenChanged"
              dark>
            </v-text-field>
            <h2 class="orange--text">
             {{boatPriceLabel[lang]}} €{{discPrice}}
            </h2>
            <h2 class="orange--text">
              skipper fee: €{{skipperFee}}
            </h2>
            <h2 class="orange--text">
              {{cleaningPriceLabel[lang]}} €{{ciscenje}}
            </h2>
            <h2 class="orange--text">
              {{additionalPriceLabel[lang]}}: €{{dodatno}}
            </h2>
            <h2 class="orange--text">
              {{fullPriceLabel[lang]}} €{{fullPrice}} ({{perPriceLabel[lang]}} €{{perPrice}})
            </h2>
            <v-checkbox
              dark
              :label="rubber[lang]"
              v-model="checkbox"
              required
            ></v-checkbox>
            <v-text-field
              name="port"
              :label="port[lang]"
              v-model="basePort"
              dark>
            </v-text-field>
            <v-text-field
                name="otherRequests"
                :label="additionalRequests[lang]"
                textarea
                v-model="addRequest"
                dark>
                </v-text-field>
            <v-text-field
              dark
              :label="nameLabel[lang]"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              dark
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              dark
              :label="phoneLabel[lang]"
              v-model="phone"
              :rules="phoneRules"
              required
            ></v-text-field>
            <v-text-field
              dark
              :label="addressLabel[lang]"
              v-model="address"
              :rules="addressRules"
              required
            ></v-text-field>
            <v-text-field
              dark
              :label="cityLabel[lang]"
              v-model="city"
              :rules="cityRules"
              required
            ></v-text-field>
            <v-select
              dark
              :label="countryLabel[lang]"
              v-model="selectCountry"
              :items="countries"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-select>
            <v-btn
              flat
              color="orange"
              @click="submit"
              :disabled="!valid"
            >
              {{offerLabel[lang]}}
            </v-btn>
          </v-form>
         </div>
         <v-snackbar
          :timeout="snackbarTimeout"
          color="orange"
          v-model="snackbar"
         >
         {{snackbarText}}
         </v-snackbar>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import { countries } from "./Countries.js";
import db from "./firebaseInit";
import Moment from "moment";
import { extendMoment } from "moment-range";
import lodash from 'lodash';
const moment = extendMoment(Moment);


import store from '../store/store';
import * as type from '../store/types';
import { mapState } from 'vuex';

export default {
  data: () => ({
    boatLabelStart: {
      en: "Pick a boat",
      mne: "Izaberite brod"
    },
    endDisabled: true,
    ciscenje: 120,
    snackbarTimeout: 3000,
    snackbar: false,
    snackbarText: "",
    modal: false,
    modal1: false,
    prices: {
      1: {
        elan: 200,
        jean: 300
      },
      2: {
        elan: 250,
        jean: 350
      },
      3: {
        elan: 300,
        jean: 400
      },
      4: {
        elan: 400,
        jean: 500
      },
      5: {
        elan: 450,
        jean: 500
      },
      6: {
        elan: 500,
        jean: 600
      },
      7: {
        elan: 400,
        jean: 500
      },
      8: {
        elan: 350,
        jean: 450
      },
      9: {
        elan: 300,
        jean: 400
      },
      10: {
        elan: 200,
        jean: 300
      }
    },
    dateLabelStart: {
      en: "Pick a starting date, red dots mark taken dates",
      mne: "Izaberite datum početka, crvena tačka znači zauzeto"
    },
    dateLabelEnd: {
      en: "Pick an ending date, red dots mark taken dates",
      mne: "Izaberite datum završetka, crvena tačka znači zauzeto"
    },
    durationLabel: {
      en: "Duration (in days):",
      mne: "Trajanje (u danima):"
    },
    peopleLabel: {
      en: "Number of people:",
      mne: "Broj ljudi:"
    },
    towelsLabel: {
      en: "Additional towels (10€/set):",
      mne: "Dodatni peškiri (10€/set):"
    },
    linenLabel: {
      en: "Additional bed linen (10€/set):",
      mne: "Dodatna posteljina (10€/set):"
    },
    rubber: {
      en: "I want a rubber boat attached to yacht",
      mne: "Želim gumeni čamac zakačen za jahtu"
    },
    port: {
      en: "Base port other then Kotor",
      mne: "Polazak van Kotora"
    },
    additionalRequests: {
      en: "Additional requests(food, museums, anything you want)",
      mne: "Dodatni zahtjevi(hrana, muzeji, šta god želite)"
    },
    nameLabel: {
      en: "Full name:",
      mne: "Ime i prezime:"
    },
    phoneLabel: {
      en: "Phone:",
      mne: "Telefon:"
    },
    addressLabel: {
      en: "Address:",
      mne: "Adresa:"
    },
    cityLabel: {
      en: "City:",
      mne: "Grad:"
    },
    countryLabel: {
      en: "Country:",
      mne: "Država:"
    },
    offerLabel: {
      en: "Request an offer",
      mne: "Traži ponudu"
    },
    dateAlert: {
      en: "Please choose a date after starting date",
      mne: "Izaberite datum nakon početnog datuma"
    },
    dur: "",
    valid: true,
    bread: [
      {
        text: "Home",
        disabled: false,
        link: "/"
      },
      {
        text: "Offer",
        disabled: true,
        link: "details"
      }
    ],
    picker: null,
    pickerEnd: null,
    fullPrice: 0,
    perPrice: 0,
    fullPriceLabel: {
      en: "total price: ",
      mne: "ukupna cijena: "
    },
    perPriceLabel: {
      en: "total price per person per day: ",
      mne: "ukupna cijena po osobi po danu: "
    },
    boatPriceLabel: {
      en: "boat price: ",
      mne: "cijena broda: "
    },
    cleaningPriceLabel: {
      en: "boat cleaning: ",
      mne: "ciscenje broda: "
    },
    additionalPriceLabel: {
      en: "additional expenses: ",
      mne: "dodatni troskovi: "
    },
    duration: 1,
    discountCalc: 0,
    skipperFee: 0,
    startPrice: 0,
    discPrice: 0,
    people: 1,
    addTowels: 0,
    addLinen: 0,
    basePort: "No",
    addRequest: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    selectCountry: "Montenegro",
    nameRules: [v => !!v || "Name is required"],
    phoneRules: [v => !!v || "Phone number is required"],
    addressRules: [v => !!v || "Address is required"],
    cityRules: [v => !!v || "City is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    selectBoat: null,
    boats: ["Elan Impression 384", "Jeanneau Sun Odyssey 45"],
    countries: countries,
    dodatno: 0,
    checkbox: false,
    landscape: false,
    eventsArray: [],
    takenDates: [],
    reactive: false,
    date: null,
    selectionError: true
  }),
  created() {
    db
      .collection("taken")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            date: doc.data().date,
            boat: doc.data().boat
          };
          this.takenDates.push(data);
        });
      });
  },
  methods: {
    submit() {
      if (this.$refs.form.validate() && !this.selectionError) {
        db
          .collection("requests")
          .add({
            boat: this.selectBoat,
            start: this.picker,
            duration: this.duration,
            people: this.people,
            addTowels: this.addTowels,
            addLinen: this.addLinen,
            rubberBoat: this.checkbox,
            basePort: this.basePort,
            addRequest: this.addRequest,
            fullName: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            city: this.city,
            country: this.selectCountry,
            startingPrice: this.startPrice,
            discount: this.discountCalc,
            skipperFee: this.skipperFee,
            finalPrice: this.fullPrice
          })
          .then(alert("submitted"))
          .catch(console.log(Error));
      }
      // Native form submission is not yet supported
    },
    clear() {
      this.$refs.form.reset();
    },
    setBoatLabel() {
      return this.boatLabelStart[lang];
    },
    durationChanged() {
      this.checkdates();
    },
    dateSelected() {
      this.checkdates();
      this.endDisabled = false;
    },
    modalClick() {
      this.modal = false;
    },
    modal1Click() {
      this.modal1 = false;
    },
    peopleChanged() {
      this.checkdates();
    },
    towelsChanged() {
      this.checkdates();
    },
    linenChanged() {
      this.checkdates();
    },
    endDateSelected() {
      const start = moment(this.picker);
      const end = moment(this.pickerEnd);
      this.checkdates();
    },
    getPrice(date){
      var boatName = "";
      console.log('boat: ', this.selectBoat);
      switch(this.selectBoat) {
        case "Elan Impression 384":
          boatName = "elan";
          break;
        case "Jeanneau Sun Odyssey 45":
          boatName = "jean";
          break;
      }
      var priceCat = 1;
      var day = moment(date).dayOfYear();
      if (day > 0 && day<91) {
        priceCat = 1
      }
      if (day >= 91 && day<=120) {
        priceCat = 2
      }
      if (day >= 121 && day<=151) {
        priceCat = 3
      }
      if (day >= 152 && day<=165) {
        priceCat = 4
      }
      if (day >= 166 && day<190) {
        priceCat = 5
      }
      if (day >= 191 && day<=243) {
        priceCat = 6
      }
      if (day >= 244 && day<=273) {
        priceCat = 7
      }
      if (day >= 273 && day<=323) {
        priceCat = 8
      }
      if (day >= 324 && day<=334) {
        priceCat = 9
      }
      if (day >= 335 && day<=366) {
        priceCat = 10
      }
    return this.prices[priceCat][boatName] 
    },
    checkdates() {
      const start = moment(this.picker);
      // const end = start.clone().add(this.duration - 1, "d");
      const end = moment(this.pickerEnd);
      console.log("is after: ", start.isSameOrAfter(end));
      if (start.isSameOrAfter(end)) {
        this.snackbar = true;
        this.snackbarText = "Please choose date after staring date";
        this.pickerEnd = null;
      }

      this.duration = Math.abs(moment.duration(end.diff(start)).as('days'));
      const range = moment.range(start, end);
      const daysInRange = Array.from(range.by("day"));
      var daysToCompare = daysInRange.map(m => m.format("YYYY-MM-DD"));
      const overlap = daysToCompare.filter(x => this.eventsArray.includes(x));
      if (overlap.length !== 0) {
        this.snackbar = true;
        this.snackbarText = "Dates marked red are taken, please choose another time";
        this.pickerEnd = null;
      } else {
        this.selectionError = false;
        this.calculatePrice();
      }
    },
    calculatePrice() {
      const start = moment(this.picker);
      // const end = start.clone().add(this.duration - 1, "d");
      const end = moment(this.pickerEnd);
      const range = moment.range(start, end);
      const daysInRange = Array.from(range.by("day"));
      var daysToCompare = daysInRange.map(m => m.format("YYYY-MM-DD"));
      var startingPrice = 0;
      if(daysToCompare != undefined) {
          startingPrice = daysToCompare
            .map(x => this.getPrice(x))
            .reduce(this.add, 0);
        }
      this.startPrice = startingPrice;
      console.log("starting price: ", this.startPrice);
      console.log("duration: ", this.duration);
      const discount = this.getDiscount();
      this.discountCalc = discount*100;
      console.log("diskont: ", this.discountCalc);
      const skipp = this.getSkipperPrice();
      this.skipperFee = skipp;
      console.log("skipper fee: ", this.skipperFee);
      const towels = this.addTowels * 10;
      const linen = this.addLinen * 10;
      this.fullPrice = (startingPrice * (1-discount)) + skipp + towels + linen + this.ciscenje;
      this.discPrice = startingPrice * (1-discount);
      this.dodatno = towels + linen;
      console.log("full price: ", this.fullPrice);
      this.perPrice = Math.round(this.fullPrice/this.people/this.duration);
      console.log("per price: ", this.perPrice); 

    },
    getSkipperPrice() {
      switch(this.selectBoat) {
        case "Elan Impression 384":
          return this.duration * 110;
          break;
        case "Jeanneau Sun Odyssey 45":
          return this.duration * 130;
          break;
      }

    },
    getDiscount() {
      switch(this.duration) {
        case 0:
          return 0;
          break;
        case 1:
          return 0;
          break;
        case 2:
          return 0;
          break;
        case 3:
          return 0.1;
          break;
        case 4:
          return 0.15;
          break;
        case 5:
          return 0.2;
          break;
        case 6: 
          return 0.25;
          break;
        default:
          return 0.3;
      }
    },
    add(a, b) {
      return a + b;
    },
    boatSelected() {
      switch (this.selectBoat) {
        case "Elan Impression 384":
          this.eventsArray = [];
          this.eventsArray = this.takenDates
            .filter(function(item) {
              return item.boat === "elan";
            })
            .map(function(item) {
              return item.date;
            });
          this.checkdates();
          this.calculatePrice();
          break;
        case "Jeanneau Sun Odyssey 45":
          this.eventsArray = [];
          this.eventsArray = this.takenDates
            .filter(function(item) {
              return item.boat === "jean";
            })
            .map(function(item) {
              return item.date;
            });
          this.checkdates();
          this.calculatePrice();
          break;
        default:
      }
    }
  },
  components: {},
  computed: 
    mapState({
      lang: state => state.lang,
  })
  
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 25px;
  color: white;
}
</style>
