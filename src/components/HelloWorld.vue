<template>
  <v-container>
      <v-layout column align-center>
      <div>
      <div id="overlays" align="center" style="background-color: rgba(0, 0, 0, 0.5); padding: 20px">
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
          <v-btn @click="showDetails" flat color="warning">Details</v-btn>
          <v-btn @click="showOrder" flat class="white--text" color="warning">Request an offer</v-btn>
        </div>
        </div>
        <div>
         <video id="player" height=100% autoplay loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jedrenjaci_v5.mp4?alt=media&token=97264beb-f2fd-40bf-9c40-528d6b04556b" type="video/mp4">
           Your browser does not support the video tag.
        </video> 
        </div>
      </div>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    showDetails() {
      this.$router.push("details");
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

back {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
}
#overlays {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  left: 0;
  right: 0;
  top: 20;
  bottom: 20;
}
#player {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
