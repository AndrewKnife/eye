<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="rounded-full w-5/12 aspect-square bg-white relative flex items-center">
      <div class="w-[85%] h-[50%] m-auto bg-no-repeat bg-contain bg-center"
           :style="{'background-image': `url(Participants/${imageSource}/doc_viz-${locale}.jpg)`}">
      </div>
    </div>
    <PointButton @click="$emit('repeat')" class="absolute left-[10%] giga:left-[10%]">{{ t('button_repeat') }}
    </PointButton>
    <PointButton @click="$emit('next')" class="absolute left-[70%] giga:left-[74%]">{{
        t('button_analyze_further')
      }}
    </PointButton>
  </div>
</template>
<script setup>
import PointButton from "@/components/default/PointButton.vue";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n()

const emit = defineEmits(['next', 'repeat'])

const props = defineProps({imageSource: String})
console.log(props.imageSource)
// emit('next')
</script>
<style scoped>
</style>

