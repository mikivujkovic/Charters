<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
          <div class="rounded" align="center" xs12>
           <div>
           <v-breadcrumbs divider="/" large justify-center>
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
           <h1 align="center" class="white--text">Additional services</h1>
           <br>
           <div class="white--text">
            {{services}}
            </div>
            <div class="white--text">
            {{how}}
            </div>  
             <v-btn @click="showOrder" class="white--text" flat color="warning">Request an offer</v-btn>
           </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: `If you are sailing with us, we can provide you with additional services. These services include
      purchase of food and drink with a significant discount, cooking services on the boat, reservations in local
      restaurants, hotels, museums and other tourist sights. During the summer season, a lot of carnivals and other
      festives are being held in Montenegro and Croatia. We could provide good places with local expertize to fully
      enjoy the trip. Also, we can provide you with fishing equipment to try your luck while sailing. Diving equipment 
      and instrutors are also a possibility`,
      how: `All additional needs should be stated in the offer request. It is possible to arrange additional services 
      when you arrive at the sailboat. 
      `,
      bread: [
        {
          text: "Home",
          disabled: false,
          link: "/"
        },
        {
          text: "Details",
          disabled: false,
          link: "details"
        },
        {
          text: "Additional services",
          disabled: true,
          link: "additional"
        }
      ]
    };
  },
  methods: {
    showOrder() {
      this.$router.push("order");
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
.rounded {
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;
}
</style>
