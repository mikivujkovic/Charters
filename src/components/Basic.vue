<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">Terms and conditions</h1>
           <br>
           <div class="white--text">
            {{included}}
            </div>
            <div class="white--text">
            {{notIncluded}}
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
      included: `We provide a skipper for every sailboat. If you have a skipper licence and would like to sail on your own,
      please state this in the offer request and we will contact you regarding the details. Skipper fee is included in 
      stated price. Sailboat will be ready for charter in the afternoon of the first contracted day (usually Saturday). You 
      are required to return to the base port on the last contracted day, until 17:00.
      The sailboat is insured. All necessary security equipment is provided on the boat. We provide bed linen and towels for 
      contracted number of people on the boat.`,
      notIncluded: `For an additional fee, we can provide you with a rubber boat, fishing equipment, additional towels or bed
      linen. Price does NOT INCLUDE: marine and anchor parking fees, electricity, water, garbage and fuel costs during the charter,
      other marine fees, fees and duties necessary to enter territorial waters of the countries you are sailing trough, food and drink
      and other expenses of the guests. We can provide you with additional services which you can find on the link below:`
    };
  },
  methods: {
    showOrder() {
      this.$router.push("order");
    },
    showAdditional() {
      this.$router.push("additional");
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
