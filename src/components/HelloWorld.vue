<template>
  <v-container>
      <v-layout column align-center>
        <div class="white--text" align="center">
          <font size="10" style="align-center">Montenegro Charters</font>
          <br>
          <p>
            Rent a sailboat and enjoy cruising <br>
            to sensational destinations on Adriatic Sea.<br>
            Spread your sails and live your life<br>
            to the fullest. <br>
          </p>
          <br>
        </div>
        <div>
          <v-btn @click="showDetails" round color="primary">DETAILS</v-btn>
          <v-btn @click="showOrder" class="white--text" round color="red darken-3">BOOK</v-btn>
        </div>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    showDetails() {
      this.$router.push('details');
    },
    showOrder() {
      this.$router.push('order');
    }
  }
}
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
</style>
