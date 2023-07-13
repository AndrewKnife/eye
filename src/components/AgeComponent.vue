<template>
  <div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12">
        <div
            class="text-lg h-[45vh] mt-14 overflow-y-auto font-medium giga:text-4xl flex flex-col items-center justify-center">
          <h1 class="text-3xl giga:text-6xl margin-auto">{{ t('age_title') }}</h1>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <PointButton @click="$emit('back')">{{ t('age_no_button') }}</PointButton>
            <PointButton @click="$emit('next')">{{ t('age_yes_button') }}</PointButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PointButton from "./default/PointButton.vue";
import {useI18n} from "vue-i18n";

const emit = defineEmits(['back', 'next'])

const {t} = useI18n()

</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>