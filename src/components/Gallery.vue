<template>
  <v-container>
      <v-layout column align-center>
        <v-carousel hide-delimiters>
             <v-carousel-item
               v-for="(item, i) in items"
               :key="i"
               :src="item.src"
               transition="fade"
               reverse-transition="fade"
               style=" height: 100%; width: 100%;">
             </v-carousel-item>
        </v-carousel>
        <v-btn @click="showOrder" class="white--text" round color="red">Book</v-btn>
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
