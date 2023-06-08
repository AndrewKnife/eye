<template>
  <div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12">
        <div class="text-lg max-h-[50vh] mt-14 overflow-y-scroll font-medium giga:text-4xl">
          <h1 class="text-3xl mb-4 giga:text-6xl">Information</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
            accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat.
          </p>
        </div>
        <div class="w-full mt-[5%]">
          <div class="flex justify-between mt-[5%]">
            <PointButton @click="$emit('back')">Atgal</PointButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import PointButton from "./default/PointButton.vue";

defineEmits(['back'])
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>