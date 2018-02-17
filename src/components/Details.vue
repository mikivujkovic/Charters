<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">Elan Impression 384</h1>
           <br>
           <img :src="items[0].src" alt="" height="200px">
           <p class="white--text">
             Sailboat <br>
             LOA: 11.55m<br>
             Displacement: 7900kg<br>
             Designer: Rob Humphreyes
           </p>
          <v-btn @click="showGallery" round color="primary">Gallery</v-btn>
          <v-btn @click="showOrder" class="white--text" round color="red">Book</v-btn>
          </div>
          <br>
          <div class="rounded" align="center" xs12>
           <h1 align="center" class="white--text">Jeanneau Sun Odyssey 45</h1>
           <br>
           <img :src="items[0].src" alt="" height="200px">
           <p class="white--text">
             Sailboat <br>
             LOA: 13.75m<br>
             Displacement: 10400kg<br>
             Designer: P. Briand
           </p>
           <v-btn @click="showGallery" class="white--text" round color="primary">Gallery</v-btn>
           <v-btn @click="showOrder" class="white--text" round color="red">Book</v-btn>
          </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import first from "@/assets/1.jpg"
import second from "@/assets/2.jpg"
import third from "@/assets/3.jpg"
export default {
  data() {
    return {
      items: [
        {
          src: first
        },
        {
          src: second
        },
        {
          src: third
        }
      ]
    }
  },
  methods: {
    showOrder() {
      this.$router.push('order');
    },
    showGallery() {
      this.$router.push('gallery');
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
.rounded {
  border-radius: 25px;
  background: orange;
  padding: 20px;
  width: 400px;
  height: 500px;
  margin-right: 10px;
}

</style>
