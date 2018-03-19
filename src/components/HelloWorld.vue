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
          <v-btn @click="showBasic" flat color="warning">Info</v-btn>
          <v-btn @click="showOrder" flat class="white--text" color="warning">Request an offer</v-btn>
        </div>
        </div>
        <div>
         <video id="player" height=100% playsinline autoplay loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jedrenjaci_v2.m4v?alt=media&token=e7892037-1ba9-4da2-ac97-f4f601711867" type="video/mp4">
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
    showBasic() {
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

  @media only screen and (max-width: 800px) {
    #player {
      display: none;
    }
  }
}
</style>
