<template>
  <div class="relative">
    <StartButton/>
    <svg viewBox="0 0 100 100" class="absolute inset-10">
      <defs>
        <path id="circle"
              d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
      </defs>
      <text font-weight="700" font-family="Telegraf" letter-spacing="2px">
        <textPath xlink:href="#circle">
          {{ t('start_button_start')}}
        </textPath>
      </text>
    </svg>
  </div>
</template>
<script setup lang="ts">
import StartButton from '/src/assets/icons/start_button.svg?component'
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>
