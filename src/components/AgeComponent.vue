<template>
  <div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12">
        <div class="text-lg h-[45vh] mt-14 overflow-y-auto font-medium giga:text-4xl flex flex-col items-center justify-center">
          <h1 class="text-3xl giga:text-6xl margin-auto">{{ t('age_title') }}</h1>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <BaseRadioInput value="yes" v-model="checkedValue">{{ t('age_yes_button') }}</BaseRadioInput>
            <BaseRadioInput value="no" v-model="checkedValue">{{ t('age_no_button') }}</BaseRadioInput>
          </div>
          <div class="flex justify-between mt-[10%]">
            <PointButton @click="$emit('back')">{{ t('button_back') }}</PointButton>
            <PointButton :disabled="!checkedValue" @click="$emit('next')">{{ t('button_next') }}</PointButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, watch} from "vue";
import PointButton from "./default/PointButton.vue";
import {useI18n} from "vue-i18n";
import BaseRadioInput from "./default/BaseRadioInput.vue";

const emit = defineEmits(['back', 'next', 'update:modelValue'])

const {t} = useI18n()

const checkedValue = ref('yes');

watch(checkedValue, () => {
  emit('update:modelValue', checkedValue.value)
}, {immediate: true})
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>