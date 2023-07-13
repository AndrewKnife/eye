<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="rounded-full w-5/12 aspect-square bg-white relative flex items-center">
      <div class="w-[85%] h-[50%] m-auto bg-no-repeat bg-contain bg-center"
           :style="{'background-image': `url(Participants/${imageSource}/viz_doc-${locale}.jpg)`}">
      </div>
    </div>
    <div class="absolute left-[15%] right-[10%] giga:left-[10%] flex justify-between top-0 bottom-0">
      <PointButton @click="$emit('repeat')">
        {{ t('button_repeat') }}
      </PointButton>
      <PointButton @click="$emit('next')">
        {{ t('button_analyze_further') }}
      </PointButton>
    </div>
    <div class="absolute left-0 right-0 bottom-8 flex justify-center">
      <PointButton v-if="!hasPrinted" @click="$emit('print')">
        {{ t('button_print') }}
      </PointButton>
    </div>
  </div>
</template>
<script setup>
import PointButton from "@/components/default/PointButton.vue";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n()

const emit = defineEmits(['next', 'repeat', 'print'])

const props = defineProps({imageSource: String, hasPrinted: Boolean})
// emit('next')
</script>
<style scoped>
</style>

