<template>
  <div>
    <div class="w-full h-full flex justify-center items-center flex-col">
      <div class="w-5/12 h-[21%] relative">
        <div class="absolute inset-0 flex justify-center items-center font-black">
          <div class="absolute inset-0">
            <!--            <img id="stepImage" :src="stepsImage" />-->
            <StepsImage id="stepImage" class="h-full w-full object-contain"/>
          </div>
          <div class="absolute inset-0">
            <!--            <WatchText id="eyeImage" class="opacity-0"/>-->
            <!--            <img id="eyeImage" :src="stepsStandImage" class="h-full w-full opacity-0 object-contain"/>-->
            <StepsStandImage id="eyeImage" class="h-full opacity-0 w-full object-contain"/>
          </div>
          <!--          <div class="absolute inset-0">-->

          <!--          </div>-->
        </div>
      </div>
      <div class="w-6/12 mt-[3%] relative px-[5%]">
        <StepProgress v-model="activeCount"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from "vue";
import StepsImage from "../assets/icons/visos_kojytes-21.svg?component";
import StepsStandImage from "../assets/icons/kojytes_3-20.svg?component";
// import stepsStandImage from "../assets/images/steps_Stand.png";
import StepProgress from "./default/StepProgress.vue";

const props = defineProps({finished: Object})
const emit = defineEmits(['next'])

const activeCount = ref(1)

const animationFinish = ref(false)

watch(activeCount, () => {
  if (activeCount.value === 2) {
    const stepsElement = document.getElementById('stepImage')
    if (stepsElement) stepsElement.classList.add('set-invisible')
    const eyeElement = document.getElementById('eyeImage')
    if (eyeElement) eyeElement.classList.add('set-visible')
    setTimeout(() => {
      animationFinish.value = true
    }, 4500)
  }
  // if (activeCount.value === 3) {
  //   const eyeElement = document.getElementById('eyeImage')
  //   if (eyeElement) eyeElement.classList.remove('set-visible')
  //   if (eyeElement) eyeElement.classList.add('set-invisible')
  //   const standElement = document.getElementById('standImage')
  //   if (standElement) standElement.classList.add('set-visible')
  //
  // }
})

watch([animationFinish, props], () => {
  if (animationFinish.value && props.finished) {
    emit('next')
  }
})
</script>

<style scoped>
p {
  margin-bottom: 20px;
}

@keyframes visible-delayed {
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

@keyframes invisible {
  0% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.set-invisible {
  animation-name: invisible;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.set-visible {
  animation-name: visible-delayed;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
</style>