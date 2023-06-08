<template>
  <div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12">
        <div class="text-lg h-[45vh] mt-14 overflow-y-auto font-medium giga:text-4xl flex flex-col">
          <h1 class="text-3xl giga:text-6xl">{{ t('parental_terms_title') }}</h1>
          <p>{{t('parental_terms_p')}}</p>
        </div>
        <div class="w-full">
          <BaseCheckBox v-model="checkedValue">{{ t('check_agree_to_terms') }}</BaseCheckBox>
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
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import PointButton from "./default/PointButton.vue";
import BaseCheckBox from "@/components/default/BaseCheckBox.vue";

const emit = defineEmits(['back', 'next'])
const checkedValue = ref(false);

const {t} = useI18n()
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>