<template>
  <div>
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 1874.2 1183.16" class="w-full h-full">
      <g id="Layer_1-2">
        <image width="1920" height="1244" transform="translate(179.71 193.28) scale(.8)"
               xlink:href="/src/assets/images/rainele_grafika.png"/>
      </g>
    </svg>
    <div class="w-full h-full">
      <svg viewBox="0 0 100 100" class="absolute top-[1%] bottom-0 left-[22%] right-[22%]">
        <defs>
          <path stroke="black" id="circlerainel"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
        </defs>
        <text font-weight="100" font-family="Telegraf" letter-spacing="1px" font-size="5px">
          <textPath xlink:href="#circlerainel">
            {{ t('title_start') }}
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>
<style scoped>
.cls-1, .cls-2, .cls-3 {
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
}

.cls-4 {
  font-size: 30px;
}

.cls-4, .cls-2 {
  font-family: Telegraf-Regular, 'Telegraf Regular';
}

.cls-5 {
  fill: url(#linear-gradient);
}

.cls-2 {
  font-size: 90px;
}

.cls-3 {
  stroke-width: .5px;
  stroke: #000;
  fill: #000;
}
</style>