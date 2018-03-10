<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
         <div class="back">
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
            ></v-select>
            <div>Select a starting date</div>
            <v-date-picker 
              v-model="picker" 
              :landscape="landscape" 
              :reactive="reactive"
              color="orange">
            </v-date-picker>
            <v-text-field
              name="duration"
              label="Duration (days)"
              value="7"
              dark>
            </v-text-field>
            <v-text-field
              name="people"
              label="Number of people"
              value="1"
              dark>
            </v-text-field>
            <v-text-field
              name="towels"
              label="Additional towels (10€/piece)"
              value="0"
              dark>
            </v-text-field>
            <v-text-field
              name="linen"
              label="Additional bed linen (10€/piece)"
              value="0"
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
              value="No"
              dark>
            </v-text-field>
            <v-text-field
                name="otherRequests"
                label="Additional requests(food, museums, anything you want)"
                textarea
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
    name: "",
    phone: null,
    address: null,
    city: null,
    selectCountry: null,
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
    countries: [
      "Montenegro",
      "Croatia",
      "Russia",
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Rwanda",
      "Saint Pierre &amp; Miquelon",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Kitts &amp; Nevis",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor L'Este",
      "Togo",
      "Tonga",
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "United States Minor Outlying Islands",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ],
    checkbox: false,
    landscape: true,
    reactive: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supporte
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
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
