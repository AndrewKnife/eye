<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div id="viewport" class="rounded-full w-5/12 aspect-square overflow-hidden relative background-color z-10">
      <div id="scrollableMap" class="relative w-full h-full overflow-scroll">
        <div class="relative w-[10000px] h-[10000px]">
          <div id="map">
            <div @click="() => selectItem(dataItem)"
                 :id="dataItem.x === 0 && dataItem.y === 0 ? 'centerItem' : dataItem.id" v-for="dataItem in haikuMap"
                 class="mapItem absolute" :key="dataItem.id"
                 :style="`left: ${convertCoordinates(dataItem.x)}px; top: ${convertCoordinates(dataItem.y)}px`">
              <div class="text-center text-2xl bg-white p-4 rounded-2xl border-black border-2">
                <p class="" v-for="haikuItem in dataItem.haiku">{{ haikuItem }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectedItem" class="fixed inset-0 flex items-center">
        <div class="w-4/12 h-[40vh] bg-white m-auto rounded-2xl border-2 border-black relative p-[4%]">
          <div class="w-full h-full bg-contain bg-no-repeat bg-center"
               :style="{'background-image': `url(Participants/${selectedItem.id}/haiku_doc-${locale}.jpg)`}">

            <br>
          </div>
          <button @click="clearItem"
                  class="absolute right-[5%] top-[5%] text-3xl giga:text-5xl font-bold rounded-full h-[40px] w-[40px] giga:w-[60px] giga:h-[60px] flex items-center justify-center border-black border">
            X
          </button>
        </div>
      </div>
    </div>
    <div class="absolute left-[15%] right-[15%] giga:left-[10%] flex justify-between top-0 bottom-0">
      <PointButton @click="$emit('back')">
        {{ t('button_back') }}
      </PointButton>
      <PointButton @click="$emit('repeat')">
        {{ t('button_repeat') }}
      </PointButton>
    </div>
  </div>
</template>
<script setup>
import PointButton from "@/components/default/PointButton.vue";
import {useI18n} from "vue-i18n";
import {onMounted, ref} from "vue";

const {t, locale} = useI18n()

const emit = defineEmits(['next', 'repeat'])

defineProps({haikuMap: Array})


const selectedItem = ref()

const selectItem = (haikuItem) => {
  selectedItem.value = haikuItem
}

const clearItem = () => {
  selectedItem.value = undefined
}

const convertCoordinates = (number) => {
  let temp = 0;
  if (number < 0) {
    temp = ((-number) * 10000) / 2
  } else {
    temp = (number * 10000) / 2 + 5000
  }
  return temp
}

onMounted(() => {
  const scrollableMap = document.getElementById('scrollableMap');
  const centerItem = document.getElementById('centerItem');
  if (centerItem) {
    scrollableMap.scrollTo(centerItem.offsetLeft - 700, centerItem.offsetTop - 700)
  }
})
</script>
<style scoped>
#map {
  @apply w-[10000px] h-[10000px] absolute ;
}

#scrollableMap {
  -webkit-overflow-scrolling: touch;
}

#centerItem p {
  @apply text-4xl font-bold;
}
</style>

