<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">Basic information</h1>
           <br>
           <div class="white--text">
            {{basic}} 
           <v-btn @click="showBasic" class="white--text" flat color="warning">More info</v-btn>
           </div>
          </div>
          <br>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">Boats</h1>
           <br>
           <div class="white--text">
           {{boats}}
           </div>
           <v-btn @click="showElan" class="white--text" flat color="warning">Elan Impression 384</v-btn>
           <v-btn @click="showJean" class="white--text" flat color="warning">Jeanneau Sun Odyssey 45</v-btn>
          </div>
          <br>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">Additional services</h1>
           <br>
           <div class="white--text">
           {{additional}}
           </div>
           <v-btn @click="showAdditional" class="white--text" flat color="warning">Additional services</v-btn>
          </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      basic: `Sailboats are usualy rented from Saturday to Saturday. If we have a free sailboat we could rent it for less that seven 
      days, even for a few hours. Just request an offer and state what you need. We will get back to you as soon as possible. When we check 
      the availability of the sailboats we will send you an offer based on your request details. If you accept an offer we will send you 
      an invoice and payment instructions. Sailboat is booked at the moment of payment. For more information about pricing and conditions
      click below`,
      boats: `Currently we have two sailboats: Elan Impression 384 and Jeanneau Sun Odyssey 45. Both vessels are in excellent condition. 
      You can find more information and pictures of the boats by clicking below`,
      additional: `Sailboats will be accmpanied with our skipper. You can request additional services like purchasing and preparing food,
      sightseeing, restaurant or hotel reservations. we have very good connections with regional service providers and can make you excellent deals\
      on food, drink and accomodation. For more info on additional services click below`
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
