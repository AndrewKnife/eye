<template>
  <div>
    <div class="absolute inset-0">
      <div class="w-full h-full absolute transition-all" :style="{left: `${leftPos}%`, top: `${topPos}%`}">
        <IconFullStart class="w-full h-full mx-auto"/>
        <div class="perfect-center flex items-center justify-center">
          <button @click="$emit('start')" class="h-[20%] aspect-square mt-[6%] hover:scale-105 transition-all">
            <StartIcon/>
          </button>
        </div>
      </div>
    </div>
    <PointButton @click="$emit('information')" class="absolute right-[20%] -rotate-[30deg] bottom-[12%] scale-75">
      {{ t('start_button_information') }}
    </PointButton>
    <PointButton @click="handleLTClick" class="absolute right-[15%] -rotate-[35deg] bottom-[25%] scale-75">
      {{ t('start_button_lt') }}
    </PointButton>
    <PointButton @click="handleENClick" class="absolute right-[9%] -rotate-[40deg] bottom-[36%] scale-75">
      {{ t('start_button_en') }}
    </PointButton>
  </div>
</template>
<script setup>
import IconFullStart from "@/components/icons/full/IconFullStart.vue";
import StartIcon from "@/components/icons/full/StartIcon.vue";
import PointButton from "@/components/default/PointButton.vue";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

defineEmits(['start', 'information'])

const {t, locale} = useI18n()

const handleLTClick = () => {
  locale.value = 'lt'
}

const handleENClick = () => {
  locale.value = 'en'
}

const leftPos = ref(0)
const topPos = ref(0)

const setPositions = (left, top) => {
  leftPos.value = left
  topPos.value = top
}

const resetPositions = () => {
  leftPos.value = 0
  topPos.value = 0
}

function randomInteger(pMin = 1, pMax) {
  if (pMax < pMin) {
    let t = pMin;
    pMin = pMax;
    pMax = t;
  }
  return Math.floor(Math.random() * (pMax + 1 - pMin) + pMin);
}

const randomizePosition = () => {
  const timerDelay = randomInteger(1, 5)
  const theLeft = randomInteger(1, 15)
  const theTop = randomInteger(1, 15)
  const positive = randomInteger(1, 2) === 1
  setPositions(positive ? theLeft : -theLeft, positive ? theTop : -theTop)
  setTimeout(() => {
    resetPositions()
    setTimeout(randomizePosition, 9000 + (timerDelay * 1000))
  }, 1000)
}

// setTimeout(randomizePosition, 10000)
</script>
<style scoped>
.perfect-center {
  @apply absolute inset-0 max-w-[100%] max-h-[100%];
}
</style>