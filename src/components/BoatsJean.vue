<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
        <div align="center" class="white--text">
        <div>
           <v-breadcrumbs divider="/" justify-center large >
            <v-breadcrumbs-item
            v-for="item in bread"
            :key="item.text"
            :disabled="item.disabled"
            :to="item.link"
            >
            {{ item.text[lang] }}
            </v-breadcrumbs-item>
           </v-breadcrumbs>
           </div>
          <br>
        <h1>Jeanneau Sun Odyssey 45</h1>
        </div>
          <div class="container">
            <div class="main-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean7.jpeg?alt=media&token=a0c42257-f8b9-4ac3-a364-87e1964ce65a" id="current">
           </div>
           <div class="imgs">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean1.jpeg?alt=media&token=24a610e0-63ac-4980-95d7-3e3f3df160de">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean5.jpeg?alt=media&token=a3ad66b8-e12d-40d5-99dd-d9b9746ad0b0">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean8.jpeg?alt=media&token=c58a687f-7ead-489b-ac44-f411469fa999">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean9.jpeg?alt=media&token=4a54f5e6-f999-446e-8191-bf65445cb6fd">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean10.jpeg?alt=media&token=01e43bbd-0722-4c68-83f3-85c639afe939">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean12.jpeg?alt=media&token=325925c6-5998-4411-9240-e19c825ddb8c">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean13.jpeg?alt=media&token=eb8fbfea-e064-48fb-8834-9d0b0be75dd9">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean14.jpeg?alt=media&token=30a666cf-ab1a-4734-8f7d-3379ded9baf3">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean15.jpeg?alt=media&token=fd23f39c-e760-4756-aa96-e6b9836cad19">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean19.jpeg?alt=media&token=ce1a9922-5efc-4c2b-9d92-b3ac2ea0abdf">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean20.jpeg?alt=media&token=4840ee6b-919f-45f8-8974-0732b3f228fc">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean21.jpeg?alt=media&token=4f3b43bf-dc5e-4437-8d18-e7a0365c0793">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean22.jpeg?alt=media&token=06348a68-87c1-4a5a-975c-0e049d143eb3">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean24.jpeg?alt=media&token=4e381b5a-3db2-48b4-b773-2c8ffd27a902">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean25.jpeg?alt=media&token=aed6ef58-768a-464d-8c16-15df26caece1">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean27.jpeg?alt=media&token=247e0a67-b137-47f1-b9a5-c3d07b9b4ad3">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean26.jpeg?alt=media&token=c8832508-3ca7-46f0-9d71-a6a1c5ef0847">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean23.jpeg?alt=media&token=8eb344a7-971d-425d-b3e0-dbc37e81dd38">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean2.jpeg?alt=media&token=d725360e-8658-4f4f-bf59-a207a292a291">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/jean_presjek.jpg?alt=media&token=59bde1ce-d3cf-4919-89a6-0b6dec8c4349">
          </div>
        </div>
        <br>
        <div style="font-size: 20px" class="white--text">
        <div style="font-size: 24px" align="center" class="orange--text">{{technical[lang]}}</div>
        <div align="center" class="white--text">
        {{lengthOverall[lang]}}: 14.15m
        </div>
        <div align="center" class="white--text">
        {{beam[lang]}}: 4.37m
        </div>
        <div align="center" class="white--text">
        {{draftMin[lang]}}: 1.65m
        </div>
        <div align="center" class="white--text">
        {{draftMax[lang]}}: 2.05m
        </div>
        <div align="center" class="white--text">
        {{water[lang]}}: 450 L
        </div>
        <div align="center" class="white--text">
        {{fuel[lang]}}: 240 L
        </div>
        <div align="center" class="white--text">
        {{cabins[lang]}}: 4
        </div>
        <div align="center" class="white--text">
        {{berths[lang]}}: 8/10
        </div>
        <div align="center" class="white--text">
        {{passengers[lang]}}: 10
        </div>
        <div align="center" class="white--text">
        {{bath[lang]}}: 2
        </div>
        <div align="center" class="white--text">
        WC: 2
        </div>
        <div align="center" class="white--text">
        {{engine[lang]}}: 76hp
        </div>
        </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import store from '../store/store';
import * as type from '../store/types';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      technical: {
        en: 'Technical data',
        mne: "Tehnički podaci"
      },
      lengthOverall: {
        en: "Length overall",
        mne: "Ukupna dužina"
      },
      beam: {
        en: "beam",
        mne: "širina"
      },
      draftMin: {
        en: "Draft Min.",
        mne: "Gaz min."
      },
      draftMax: {
        en: "Draft Max.",
        mne: "Gaz max."
      },
      water: {
        en: "Water Capacity",
        mne: "Kapacitet vode"
      },
      fuel: {
        en: "Fuel Capacity",
        mne: "Kapacitet goriva"
      },
      cabins: {
        en: "Cabins",
        mne: "Broj kabina"
      },
      berths: {
        en: "Berths",
        mne: "Kreveta"
      },
      passengers: {
        en: "Max. passengers",
        mne: "Max. putnika"
      },
      bath: {
        en: "Bathrooms",
        mne: "Kupatila"
      },
      engine: {
        en: "Engine power",
        mne: "Snaga motora"
      },
      bread: [
        {
          text: {
            en: "Home",
            mne: "Naslovna"
          },
          disabled: false,
          link: "/"
        },
        {
          text: {
            en: "Details",
            mne: "Detalji"
            },
          disabled: false,
          link: "details"
        },
        {
          text: {
            en: "Jeanneau Sun Odyssey 45",
            mne:"Jeanneau Sun Odyssey 45" 
            },
          disabled: true,
          link: "boatJean"
        }
      ]
    };
  },
  mounted: function() {
    const current = document.querySelector("#current");
    const imgs = document.querySelectorAll(".imgs img");
    const opacity = 0.6;
    const size = imgs.length;

    let index = 0;

    // Set first img opacity
    imgs[index].style.opacity = opacity;

    current.addEventListener("click", currentClick);

    imgs.forEach(img => img.addEventListener("click", imgClick));

    function currentClick() {
      console.log("size", size);
      console.log("index", index);
      let newIndex = index + 1;
      if (newIndex > size - 1) {
        index = 0;
      } else {
        index = newIndex;
      }
      current.src = imgs[index].src;
    }

    function imgClick(e) {
      console.log(imgs);
      // Reset the opacity
      imgs.forEach(img => (img.style.opacity = 1));

      // Change current image to src of clicked image
      current.src = e.target.src;
      console.log(e.target);
      console.log(current.src);
      for (var i = 0; i < size; i++) {
        if (imgs[i].src === current.src) {
          index = i;
          break;
        }
      }
      //index = imgs.indexOf(e.target);

      // Add fade in class
      current.classList.add("fade-in");

      // Remove fade-in class after .5 seconds
      setTimeout(() => current.classList.remove("fade-in"), 500);

      // Change the opacity to opacity var
      e.target.style.opacity = opacity;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  computed: mapState({
      lang: state => state.lang
  })
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 20px;
  padding: 0;
  background: #333;
}

.container {
  max-width: 1080px;
  margin: auto;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.main-img img,
.imgs img {
  width: 100%;
}

.imgs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}

/* Fade in animation */
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-in 1 forwards;
}
</style>
