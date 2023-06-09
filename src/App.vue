<template>
  <div class="page-wrapper overflow-hidden relative"
       :class="{'active': wallpaperBgActive}">
    <div class="w-full h-full py-0 relative z-10 relative">
      <div class="absolute inset-0 top-[5%] bottom-[5%] bg-white ovalinator"
           :class="{'background-color': !eyeBgActive}"
           :style="{transform: `rotateX(${rotationX}deg)`}">
        <StartComponent class="perfect-center" v-if="activeTab === TAB_KEYS.start"
                        @start="() => blinkEye(TAB_KEYS.age)" @information="() => blinkEye(TAB_KEYS.information)"/>
        <InformationComponent class="perfect-center" v-if="activeTab === TAB_KEYS.information"
                              @back="() => blinkEye(TAB_KEYS.start)"/>
        <AgeComponent class="perfect-center" v-if="activeTab === TAB_KEYS.age"
                      @back="() => handleTermsNavigation(false)"
                      @next="() => handleTermsNavigation(true)"/>
        <TermsOfServiceParent class="perfect-center" v-if="activeTab === TAB_KEYS.termsParent"
                              @back="() => blinkEye(TAB_KEYS.start)"
                              @next="() => blinkEye(TAB_KEYS.terms)"/>
        <TermsOfService class="perfect-center" v-if="activeTab === TAB_KEYS.terms"
                        @back="() => blinkEye(TAB_KEYS.start)"
                        @next="() => blinkAndScan(TAB_KEYS.steps)"/>
        <StepsComponent class="perfect-center" v-if="activeTab === TAB_KEYS.steps" :finished="finishedCalling"
                        @next="handleGoToScanner"/>
        <ScannerComponent class="perfect-center" v-if="activeTab === TAB_KEYS.scanner"
                          @next="() => blinkEye(TAB_KEYS.haiku)"/>
        <HaikuComponent class="perfect-center" v-if="activeTab === TAB_KEYS.haiku" :image-source="userEyes"
                        @print="triggerPrinter" :has-printed="hasPrinted"
                        @repeat="() => blinkEye(TAB_KEYS.start)" @next="() => blinkEye(TAB_KEYS.haikuMap)"/>
        <HaikuMapComponent class="perfect-center" v-if="activeTab === TAB_KEYS.haikuMap" :haiku-map="userHaiku"
                           @repeat="() => blinkEye(TAB_KEYS.start)" @back="() => blinkEye(TAB_KEYS.haiku)"/>
      </div>
    </div>
    <audio v-if="finishedCalling" autoplay>
      <source :src="sounds" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>
    <div v-if="textBgActive" class="absolute inset-0 overflow-hidden anim-opacity">
      <TextBackground class="w-full" :slower="slowerSpeed"/>
    </div>
  </div>
</template>
<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {useI18n} from "vue-i18n";
import axios from "axios";
import StartComponent from "@/components/StartComponent.vue";
import TermsOfService from "@/components/TermsOfService.vue";
import StepsComponent from "@/components/StepsComponent.vue";
import ScannerComponent from "@/components/ScannerComponent.vue";
import HaikuComponent from "@/components/HaikuComponent.vue";
import InformationComponent from "@/components/InformationComponent.vue";
import TextBackground from "@/components/icons/TextBackground.vue";
import AgeComponent from "@/components/AgeComponent.vue";
import TermsOfServiceParent from "@/components/TermsOfServiceParent.vue";
import HaikuMapComponent from "@/components/HaikuMapComponent.vue";
import sounds from "./assets/soundsound.wav";

const {t, locale} = useI18n()

const slowerSpeed = ref(0)

const TAB_KEYS = {
  start: 'start',
  information: 'information',
  age: 'age',
  terms: 'terms',
  termsParent: 'termsParent',
  steps: 'steps',
  scanner: 'scanner',
  haiku: 'haiku',
  haikuMap: 'haikuMap',
}

const activeTab = ref(TAB_KEYS.start)

const userEyes = ref('')
const finishedCalling = ref(true)
const userHaiku = ref([])
const hasPrinted = ref(false)

const rotationX = ref(0)

const blinkEye = (nextPage) => {
  rotationX.value = 90;
  setTimeout(() => {
    toggleTab(nextPage)
    setTimeout(() => {
      rotationX.value = 0;
    }, 100)
  }, 100)
  if (nextPage === TAB_KEYS.haikuMap) {
    slowerSpeed.value = 110
  } else {
    slowerSpeed.value = 0
  }
  if (nextPage === TAB_KEYS.start) {
    hasPrinted.value = false
  }
}

const blinkAndScan = (nextPage) => {
  blinkEye(nextPage)
  setTimeout(triggerScanner, 0)
}

const handleTermsNavigation = (hasAge) => {
  blinkEye(hasAge ? TAB_KEYS.terms : TAB_KEYS.termsParent)
}

const toggleTab = (tabKey) => {
  activeTab.value = tabKey
}
const textBgActive = computed(() => activeTab.value !== TAB_KEYS.start && activeTab.value !== TAB_KEYS.information)
const wallpaperBgActive = computed(() => activeTab.value === TAB_KEYS.steps || activeTab.value === TAB_KEYS.scanner || activeTab.value === TAB_KEYS.haikuMap)
const eyeBgActive = computed(() => activeTab.value === TAB_KEYS.steps || activeTab.value === TAB_KEYS.scanner || activeTab.value === TAB_KEYS.haikuMap)

const starterBlink = () => {
  blinkEye(TAB_KEYS.start)
}

let timer = null;

watch(activeTab, () => {
  if (activeTab.value === TAB_KEYS.start) {
    timer = setInterval(starterBlink, 25000)
  } else {
    clearInterval(timer)
  }
}, {immediate: true})

const handleGoToScanner = () => {
  if (userEyes.value) {
    blinkEye(TAB_KEYS.scanner)
  } else {
    blinkEye(TAB_KEYS.start)
  }
}

const triggerScanner = () => {
  finishedCalling.value = false
  axios.post('http://127.0.0.1:5000/button-pressed', {
    locale: locale.value
  }).then((res) => {
    if (res.data.hasOwnProperty('success') && res.data.success) {
      if (res.data.hasOwnProperty('image_path')) {
        userEyes.value = res.data.image_path
      }
      if (res.data.hasOwnProperty('haiku')) {
        userHaiku.value = res.data.haiku
      }
    } else {
      userEyes.value = ''
      userHaiku.value = []
    }
  }).catch(() => {
    userEyes.value = ''
    userHaiku.value = []
  }).finally(() => {
    finishedCalling.value = true
  })
  // userEyes.value = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Human_eye_with_blood_vessels.jpg'
}

const triggerPrinter = () => {
  hasPrinted.value = true
  axios.post('http://127.0.0.1:5000/print')
}

onMounted(() => {
  addEventListener("contextmenu", (event) => {
    return false;
  });
})
</script>
<style scoped>
.ovalinator {
  mask-image: url('/src/assets/images/eye_shape.png');
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  transition: all 100ms ease-in-out;
}

.perfect-center {
  @apply absolute inset-0 max-w-[100%] max-h-[100%];
}

.page-wrapper {
  @apply max-h-[100vh] h-[100vh] flex w-full justify-center items-center overflow-hidden;
  background-image: linear-gradient(0.25turn, #fff, #fff);
}

.page-wrapper:before {
  @apply absolute inset-0;
  content: "";
  background-image: linear-gradient(0.25turn, #cfe1f9, #dfedd6);
  transition: opacity 2s ease;
  opacity: 0;
}

.page-wrapper.active::before {
  opacity: 1;
}

@keyframes visible {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.anim-opacity {
  animation: visible 2s;
}
</style>