<template>
  <div class="relative w-full">
    <div class="absolute inset-0 flex items-center">
      <div class="progress px-2 border-2 border-black w-full"></div>
    </div>
    <div class="absolute inset-0 flex items-center px-2">
      <div class="progress2 background-color progress-bar" :class="{'progress-fast': progressFast}"
           :style="{width: `${progressWidth}%`}"></div>
    </div>
    <div class="flex justify-between relative">
      <div class="step-item" :class="{active: modelValue >= 1}">
        <StepOne class="h-full m-auto"/>
        <div class="text-one opacity-1 transition-opacity" :class="{'opacity-0': modelValue !== 1}">
          <StandText class="scale-[130%] mt-2 ml-2"/>
        </div>
      </div>
      <div class="step-item" :class="{active: modelValue >= 2}">
        <StepTwo class="h-full m-auto"/>
      </div>
      <div class="step-item" :class="{active: modelValue >= 3}">
        <StepThree class="h-full m-auto"/>
        <div class="text-three opacity-1 transition-opacity" :class="{'opacity-0': modelValue !== 3}">
          <StepThreeText/>
          <StayText/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import StepOne from '../../assets/icons/steps/one.svg?component'
import StepTwo from '../../assets/icons/steps/two.svg?component'
import StepThree from '../../assets/icons/steps/three.svg?component'
import StepThreeText from '../../assets/icons/steps/stand_icon.svg?component'
import {ref} from "vue";
import StandText from "@/components/steps/StandText.vue";
import StayText from "@/components/steps/StayText.vue";

defineProps({
  modelValue: Number
})

const emit = defineEmits(['update:modelValue'])

const progressFast = ref(false)
const progressWidth = ref(0)

const firstProgress = () => {
  progressWidth.value = 50
}

setTimeout(() => {
  firstProgress()
}, 100)

setTimeout(() => {
  emit('update:modelValue', 2)
  setTimeout(() => {
    emit('update:modelValue', 3)
    progressFast.value = true
    progressWidth.value = 100
  }, 5000)
}, 9000)
</script>
<style scoped>
.step-item {
  @apply border border-black p-4 giga:p-12 h-20 w-20 giga:w-[16rem] giga:h-[16rem] rounded-full bg-white relative;
}

.step-item.active {
  transition: background-color 2s ease;
  background-color: #cfe1f9;
}

.progress-bar {
  transition: width 10s linear;
}

.progress-fast {
  transition: width 4s linear;
}

.progress {
  @apply h-[8%];
}


.progress2 {
  @apply h-[9%];
}

.text-one {
  @apply absolute -left-12 -top-12 -right-8 -bottom-0;
  @apply giga:-left-[6rem] giga:-top-[6rem] giga:-right-[4rem] giga:-bottom-[0rem];
}

.text-three {
  @apply absolute -left-14 -top-14 -right-8 -bottom-0;
  @apply giga:-left-[9rem] giga:-top-[10rem] giga:-right-[9rem] giga:-bottom-[0rem];
}
</style>