<template>
  <div>
    <img :src="grafika" class="perfect-center m-auto h-[90%]">
    <div class="perfect-center flex justify-center items-center">
      <svg viewBox="0 0 100 100" class="w-[6%] spinning ml-[50px]">
        <defs>
          <path id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
        </defs>
        <text font-size="18" font-weight="700">
          <textPath xlink:href="#circle">
            {{ t('checking_pupil') }}
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>
<script setup>
import grafika from "@/assets/images/rainele_grafika_NEW.png";
import {useI18n} from "vue-i18n";

const emit = defineEmits(['next'])

const {t} = useI18n()

setTimeout(() => {
  emit('next')
}, 3500)
</script>
<style scoped>
.perfect-center {
  @apply absolute inset-10;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinning {
  animation: spin 110s linear infinite;
}

.spinning-back {
  animation: spin 110s linear infinite;
  animation-direction: reverse;
}
</style>

