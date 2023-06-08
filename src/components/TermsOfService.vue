<template>
  <div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12">
        <div id="terms" class="text-lg max-h-[45vh] mt-14 overflow-y-scroll font-medium giga:text-4xl">
          <h1 class="text-3xl mb-4 giga:text-6xl">{{ t('title_terms_of_service') }}</h1>
          <p>{{ t('ts_1') }}</p>
          <p>{{ t('ts_2') }}</p>
          <p>{{ t('ts_3') }}</p>
          <p>{{ t('ts_4') }}</p>
          <p>{{ t('ts_5') }}</p>
          <p>{{ t('ts_6') }}</p>
          <p>{{ t('ts_7') }}</p>
          <p>{{ t('ts_8') }}</p>
          <p>{{ t('ts_9') }}</p>
          <p>{{ t('ts_10') }}</p>
          <p>{{ t('ts_11') }}</p>
          <p>{{ t('ts_12') }}</p>
          <p>{{ t('ts_13') }}</p>
          <p>{{ t('ts_14') }}</p>
          <p>{{ t('ts_15') }}</p>
          <p id="end">{{ t('ts_16') }}</p>
        </div>
        <div class="w-full mt-[5%]">
          <BaseCheckBox :disabled="!visibleBottom" v-model="checkedValue">{{ t('check_agree_to_terms') }}</BaseCheckBox>
          <div class="flex justify-between mt-[5%]">
            <PointButton @click="$emit('back')">{{ t('button_back') }}</PointButton>
            <PointButton :disabled="!checkedValue" @click="$emit('next')">{{ t('button_next') }}</PointButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import BaseCheckBox from "./default/BaseCheckBox.vue";
import PointButton from "./default/PointButton.vue";
import {useI18n} from "vue-i18n";

defineEmits(['back', 'next'])

const {t} = useI18n()

const checkedValue = ref(false);
const visibleBottom = ref(false)

onMounted(() => {
  const target = document.getElementById('terms')
  let options = {
    root: target,
    threshold: 1,
  };

  let observer = new IntersectionObserver((payload) => {
    if (payload[0].intersectionRatio === 1) {
      visibleBottom.value = true
    }
  }, options);
  observer.observe(target.lastElementChild)
})
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>