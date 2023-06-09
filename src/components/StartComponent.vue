<template>
  <div>
    <div class="absolute left-0 right-0 bottom-0 top-[5%]">
      <div class="w-full scale-[115%] h-full absolute transition-all" :style="{left: `${leftPos}%`, top: `${topPos}%`}">
        <div class="absolute inset-0">
          <IconFullStart class="h-full aspect-square mx-auto flex items-center"/>
        </div>
        <div class="perfect-center flex items-center justify-center">
          <button @click="$emit('start')" class="h-[18%] aspect-square mt-[0%] ml-[1%] hover:scale-105 transition-all">
            <StartIcon/>
          </button>
        </div>
      </div>
    </div>
    <div class="absolute right-[10%] -rotate-[37deg] bottom-[24%] scale-75 flex justify-center">
      <PointButton @click="$emit('information')" class="px-5">
        {{ t('start_button_information') }}
      </PointButton>
      <PointButton @click="handleLTClick" class="px-5">
        {{ t('start_button_lt') }}
      </PointButton>
      <!--      <PointButton @click="handleENClick" class="px-5">-->
      <!--        {{ t('start_button_en') }}-->
      <!--      </PointButton>-->
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import IconFullStart from "@/components/icons/full/IconFullStart.vue";
import StartIcon from "@/components/icons/full/StartIcon.vue";
import PointButton from "@/components/default/PointButton.vue";
import {randomInteger} from "@/utls/randomInteger";

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