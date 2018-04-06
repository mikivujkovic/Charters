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
            {{ item.text }}
            </v-breadcrumbs-item>
           </v-breadcrumbs>
           </div>
          <br>
           <v-form v-model="valid" ref="form" lazy-validation>
            <v-select
              dark
              label="Boat"
              v-model="selectBoat"
              :items="boats"
              :rules="[v => !!v || 'Item is required']"
              required
              @input="boatSelected"
            ></v-select>
            <div>Select a starting date</div>
            <v-date-picker 
              v-model="picker" 
              :landscape="landscape" 
              :reactive="reactive"
              event-color="red"
              :events="eventsArray"
              color="orange"
              @input="dateSelected"
             >
            </v-date-picker>
            <v-text-field
              name="duration"
              label="Duration (days)"
              dark
              v-model="duration"
              @input="durationChanged"
              mask="#">
            </v-text-field>
            <v-text-field
              name="people"
              label="Number of people"
              v-model="people"
              dark>
            </v-text-field>
            <v-text-field
              name="towels"
              label="Additional towels (10€/piece)"
              v-model="addTowels"
              dark>
            </v-text-field>
            <v-text-field
              name="linen"
              label="Additional bed linen (10€/piece)"
              v-model="addLinen"
              dark>
            </v-text-field>
            <v-checkbox
              dark
              label="I want a rubber boat attached to yacht"
              v-model="checkbox"
              required
            ></v-checkbox>
            <v-text-field
              name="port"
              label="Base port other then Kotor"
              v-model="basePort"
              dark>
            </v-text-field>
            <v-text-field
                name="otherRequests"
                label="Additional requests(food, museums, anything you want)"
                textarea
                v-model="addRequest"
                dark>
                </v-text-field>
            <v-text-field
              dark
              label="Full name"
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
              label="Phone"
              v-model="phone"
              :rules="phoneRules"
              required
            ></v-text-field>
            <v-text-field
              dark
              label="Address"
              v-model="address"
              :rules="addressRules"
              required
            ></v-text-field>
            <v-text-field
              dark
              label="City"
              v-model="city"
              :rules="cityRules"
              required
            ></v-text-field>
            <v-select
              dark
              label="Country"
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
              REQUEST AN OFFER
            </v-btn>
          </v-form>
         </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import { countries } from "./Countries.js";
import db from "./firebaseInit";
import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

export default {
  data: () => ({
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
    duration: 1,
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
            country: this.selectCountry
          })
          .then(alert("submitted"))
          .catch(console.log(Error));
      }
      // Native form submission is not yet supported
    },
    clear() {
      this.$refs.form.reset();
    },
    durationChanged() {
      this.checkdates();
    },
    dateSelected() {
      this.checkdates();
    },
    checkdates() {
      const start = moment(this.picker);
      const end = start.clone().add(this.duration - 1, "d");
      const range = moment.range(start, end);
      const daysInRange = Array.from(range.by("day"));
      const daysToCompare = daysInRange.map(m => m.format("YYYY-MM-DD"));
      const overlap = daysToCompare.filter(x => this.eventsArray.includes(x));
      if (overlap.length !== 0) {
        alert("please choose another period or boat");
      } else {
        this.selectionError = false;
      }
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
          break;
        default:
      }
    }
  },
  components: {}
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
