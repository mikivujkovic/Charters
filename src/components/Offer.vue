<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
         <div class="back">
           <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              dark
              label="Name"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              dark
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-select
              dark
              label="Item"
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-select>
            <v-checkbox
              dark
              label="Do you agree?"
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              required
            ></v-checkbox>

            <v-btn
              flat
              color="orange"
              @click="submit"
              :disabled="!valid"
            >
              submit
            </v-btn>
            <v-btn flat color="orange" @click="clear">clear</v-btn>
          </v-form>
         </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supporte
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 25px;
  color: white;
}
</style>
