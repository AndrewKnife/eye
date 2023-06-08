<template>
  <svg viewBox="0 0 100 100" class="absolute inset-20 rotate-[50deg]">
    <defs>
      <path id="circlestand"
            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
    </defs>
    <text font-weight="700" font-family="Telegraf" letter-spacing="1px" font-size="10px" color="black">
      <textPath xlink:href="#circlestand">
        {{ t('label_dont_move') }}
      </textPath>
    </text>
  </svg>
</template>
<script setup>
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>
