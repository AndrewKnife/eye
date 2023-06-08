<template>
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 0 1874.2 1040.54">
    <linearGradient id="linear-gradient" x1="0" y1="520.27" x2="1874.2" y2="520.27" gradientUnits="userSpaceOnUse">
      <stop offset="0" :stop-color="!active ? '#cfe1f9' : '#fff'"/>
      <stop offset="1" :stop-color="!active ? '#dfedd6' : '#fff'"/>
    </linearGradient>
    <g id="Layer_1-2">
      <path class="eye-bg"
            d="m1874.2,520.27s-384.95,520.27-912.94,520.27C355.73,1040.54,0,514.9,0,514.9,0,514.9,386.45,0,961.26,0s912.94,520.27,912.94,520.27Z"/>
    </g>
  </svg>
</template>
<script setup>
defineProps({
  active: Boolean
})
</script>
<style scoped>
.eye-bg {
  fill: url(#linear-gradient);
}
stop {
  transition: 2s ease;
}
</style>
