<template>
  <div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12">
        <div class="text-lg max-h-[50vh] mt-14 overflow-y-scroll font-medium giga:text-4xl">
          <InformationLt v-if="locale === 'lt'"/>
          <InformationEn v-else/>
          <img class="h-[200px] giga:h-[250px] mx-auto my-16" :src="neurotecLogo" alt="Neurotechnology logo"/>
        </div>
        <div class="w-full mt-[5%]">
          <div class="flex justify-between mt-[5%]">
            <PointButton @click="$emit('back')">{{ t('button_back') }}</PointButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useI18n} from "vue-i18n";
import PointButton from "./default/PointButton.vue";
import neurotecLogo from "../assets/neurotec_logo.png";
import InformationLt from "@/components/default/InformationLt.vue";
import InformationEn from "@/components/default/InformationEn.vue";

const {t, locale} = useI18n()

defineEmits(['back'])
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>