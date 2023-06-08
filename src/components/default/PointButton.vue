<template>
  <button class="giga:text-6xl text-2xl px-20 flex items-center">
    <PointIcon class="giga:w-[7rem] giga:h-[5rem] w-[4rem] h-[3rem] giga:mr-10 mr-5"/>
    <slot></slot>
  </button>
</template>
<script setup>
import PointIcon from '/src/assets/icons/hand_point.svg?component'
</script>
<style scoped>
button:disabled {
  @apply cursor-default opacity-50;
}
</style>