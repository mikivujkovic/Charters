<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/brod.svg" width="100" alt="MNE" class="mb-5">
        <v-layout row wrap center>
          <v-card color="white"> 
            <img src="@/assets/jed1.jpg" width="500px" elevation-24>
          </v-card>
          <v-card color="white">
             <div style="width:500px">
              Div  teksr
             </div>
          </v-card> 
        </v-layout>
        <div> Vujke </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card style="background-color:transparent;">
          <v-card-text class="white--text">
           <h1>Montenegro Charters</h1>
          </v-card-text>
          <v-card-text class="white--text">
            <div class="text-xs-center">iznajmite jedrilicu</div>
          </v-card-text>
          <v-card-actions>
          <v-btn round color="primary">Detalji</v-btn>
          <v-btn round color="orange">Rezervisi</v-btn>
        </v-card-actions>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

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
