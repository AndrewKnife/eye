<template>
  <div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12">
        <div class="text-lg h-[45vh] mt-14 overflow-y-auto font-medium giga:text-4xl flex flex-col">
          <p class="mb-[4%] giga:text-5xl">{{ t('age_p_one') }}</p>
          <p class="giga:text-5xl">{{ t('age_p_two') }}</p>
        </div>
        <div class="w-full">
          <div class="flex justify-between mt-[10%]">
            <PointButton @click="$emit('back')">{{ t('button_no') }}</PointButton>
            <PointButton @click="$emit('next')">{{ t('button_yes') }}</PointButton>
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