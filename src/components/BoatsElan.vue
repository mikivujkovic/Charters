<template>
  <v-container>
      <v-layout column align-center>
        <v-flex>
        <div align="center" class="white--text">
        <div>
           <v-breadcrumbs divider="/" large justify-center>
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
        <h1>Elan Impression 384</h1>
        </div>
          <div class="container">
            <div class="main-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan6.jpeg?alt=media&token=25937e1f-e96f-47c9-a60b-54dbab700754" id="current">
           </div>
           <div class="imgs">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan1.jpeg?alt=media&token=b8cd14eb-f52a-4e0d-9521-6036527bccbe">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan2.jpeg?alt=media&token=025aaa42-f942-4b9c-9ce3-10949be36678">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan3.jpeg?alt=media&token=7cf4cc13-288e-4a8a-8290-5a4489478028">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan4.jpeg?alt=media&token=252c1fa1-5e63-430e-9fbc-a9d0a82b03b6">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan5.jpeg?alt=media&token=d742837f-ab1d-4845-96b7-bd497ea4e801">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan6.jpeg?alt=media&token=25937e1f-e96f-47c9-a60b-54dbab700754">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan7.jpeg?alt=media&token=1d54f0a9-40d8-4f1f-9463-5c40098ef15f">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan8.jpeg?alt=media&token=665e2c89-132f-4938-b81d-c1aacd3504b3">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan9.jpeg?alt=media&token=a75f590f-2b60-46a1-8c44-a516971458ae">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan10.jpeg?alt=media&token=8b2d6840-a474-4cbf-b2c0-7facda793366">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan12.jpeg?alt=media&token=45f59033-0f1e-4ea8-8b04-71632eb3cfac">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan13.jpeg?alt=media&token=982f4b48-c191-4d3d-af58-257ae63c2afb">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan14.jpeg?alt=media&token=3350177c-5de1-409d-b928-0d648563c9d7">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan15.jpeg?alt=media&token=f14b32be-d0eb-496f-9d03-57e29333ccae">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan17.jpeg?alt=media&token=ef24d4f7-9b99-4847-ada7-9b42b7dd28d2">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan18.jpeg?alt=media&token=314bee9d-7bd3-4a2f-a440-d5dd190bd2d1">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan20.jpeg?alt=media&token=0aa0deaa-a6fb-4ef5-b824-a8d059373e85">
             <img src="https://firebasestorage.googleapis.com/v0/b/monte-charters.appspot.com/o/elan16.jpeg?alt=media&token=cea35771-ddb5-48c7-aade-7a61b355c623">
          </div>
        </div>
        <br>
        <div style="font-size: 20px" class="white--text">
        <div style="font-size: 24px" align="center" class="orange--text">{{technical[lang]}}</div>
        <div align="center" class="white--text">
        {{lengthOverall[lang]}}: 11.55m
        </div>
        <div align="center" class="white--text">
        {{beam[lang]}}: 3.90m
        </div>
        <div align="center" class="white--text">
        {{draftMin[lang]}}: 1.50m
        </div>
        <div align="center" class="white--text">
        {{draftMax[lang]}}: 1.80m
        </div>
        <div align="center" class="white--text">
        {{water[lang]}}: 240 L
        </div>
        <div align="center" class="white--text">
        {{fuel[lang]}}: 180 L
        </div>
        <div align="center" class="white--text">
        {{cabins[lang]}}: 3
        </div>
        <div align="center" class="white--text">
        {{berths[lang]}}: 6/8
        </div>
        <div align="center" class="white--text">
        {{passengers[lang]}}: 6
        </div>
        <div align="center" class="white--text">
        {{bath[lang]}}: 2
        </div>
        <div align="center" class="white--text">
        WC: 2
        </div>
        <div align="center" class="white--text">
        {{engine[lang]}}: 54hp
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
            en: "Elan Impression 384",
            mne:"Elan Impression 384" 
            },
          disabled: true,
          link: "boatElan"
        }
      ]
    };
  },
  mounted: function() {
    const current = document.querySelector("#current");
    const imgs = document.querySelectorAll(".imgs img");
    const opacity = 0.6;
    const size = imgs.length;

    let index = 5;

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
