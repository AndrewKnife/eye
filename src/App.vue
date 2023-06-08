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
                      @back="() => blinkEye(TAB_KEYS.start)"
                      @next="() => blinkEye(TAB_KEYS.terms)"
                      v-model="ageAgreement"/>
        <TermsOfService class="perfect-center" v-if="activeTab === TAB_KEYS.terms"
                        @back="() => blinkEye(TAB_KEYS.age)"
                        @next="handleTermsNavigation"/>
        <TermsOfServiceParent class="perfect-center" v-if="activeTab === TAB_KEYS.termsParent"
                              @back="() => blinkEye(TAB_KEYS.age)"
                              @next="() => blinkEye(TAB_KEYS.steps)"/>
        <StepsComponent class="perfect-center" v-if="activeTab === TAB_KEYS.steps"
                        @next="() => blinkEye(TAB_KEYS.scanner)"/>
        <ScannerComponent class="perfect-center" v-if="activeTab === TAB_KEYS.scanner"
                          @next="() => blinkEye(TAB_KEYS.haiku)"/>
        <HaikuComponent class="perfect-center" v-if="activeTab === TAB_KEYS.haiku" :image-source="userEyes"
                        @repeat="() => blinkEye(TAB_KEYS.start)" @next="() => blinkEye(TAB_KEYS.haikuMap)"/>
        <HaikuMapComponent class="perfect-center" v-if="activeTab === TAB_KEYS.haikuMap" :haiku-map="userHaiku"
                           @repeat="() => blinkEye(TAB_KEYS.start)" @back="() => blinkEye(TAB_KEYS.haiku)"/>
      </div>
    </div>
    <div v-if="textBgActive" class="absolute -inset-[5%] overflow-hidden anim-opacity">
      <TextBackground class="w-full"/>
    </div>
  </div>
</template>
<script setup>
import {computed, ref, watch} from "vue";
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

const {t, locale} = useI18n()

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

const ageAgreement = ref('')
const userEyes = ref('')
const userHaiku = ref([])

const rotationX = ref(0)

const blinkEye = (nextPage) => {
  rotationX.value = 90;
  setTimeout(() => {
    toggleTab(nextPage)
    setTimeout(() => {
      rotationX.value = 0;
    }, 100)
  }, 100)
}

const blinkAndScan = (nextPage) => {
  blinkEye(nextPage)
  triggerScanner()
}

const handleTermsNavigation = () => {
  if (ageAgreement.value === 'yes') {
    blinkAndScan(TAB_KEYS.steps)
  } else {
    blinkAndScan(TAB_KEYS.termsParent)
  }
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
    timer = setInterval(starterBlink, 6500)
  } else {
    clearInterval(timer)
  }
}, {immediate: true})

const triggerScanner = () => {
  axios.post('http://127.0.0.1:5000/button-pressed', {
    locale: locale.value
  }).then((res) => {
    if (res.data.hasOwnProperty('image_path')) {
      userEyes.value = res.data.image_path
    }
    if (res.data.hasOwnProperty('haiku')) {
      userHaiku.value = res.data.haiku
    }
  })
  // userEyes.value = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Human_eye_with_blood_vessels.jpg'
}
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
  100% {
    opacity: 1;
  }
}

.anim-opacity {
  animation: visible 2s;
}
</style>