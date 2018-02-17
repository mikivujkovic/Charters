<template>
  <v-container>
      <v-layout column align-center>
        <div class="white--text">
          <h2>Choose a sailboat</h2>
        </div>
        <v-select
          :items="items"
          v-model="select"
          label="Choose a sailboat"
          single-line
          bottom
          dark
        ></v-select>
        <br>
        <div>
          <h2 class="white--text">
            Select time:
          </h2>
        </div>
        <v-date-picker landscape color="orange" v-model="picker"></v-date-picker>
        <br>
        <v-btn @click="pay" class="white--text" round color="red">BOOK</v-btn>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      select: {text: 'Elan Impression 384', value: "1"},
      items: [
          { text: 'Elan Impression 384', value: "1" },
          { text: 'Jeanneau Sun Odyssey 45', value: "2" }
      ],
      picker: null
    }
  },
  methods: {
    pay() {
      alert("You placed an order");
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
