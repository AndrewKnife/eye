<template>
  <label class="flex items-center cursor-pointer overflow-visible">
    <input type="checkbox" @change="$emit('update:modelValue', $event.target.checked)"/>
    <span class="relative">
      <div class="check-content">
        <CheckIcon class="w-12 h-12 giga:w-20 giga:h-20 absolute -left-2 right-0 -top-4"/>
      </div>
    </span>
    <div class="ml-4 text-lg giga:text-4xl">
      <slot></slot>
    </div>
  </label>
</template>
<script setup>
import CheckIcon from '/src/assets/icons/check.svg?component'

defineEmits(['update:modelValue'])
</script>
<style scoped>
:root {
  --checkbox-color: grey;
  --checkmark-color: white;
}

label {
  position: relative;
}

span {
  @apply w-8 h-8 giga:w-16 giga:h-16;
  border: 1px solid black;
  display: inline-block;
  transition: all linear 0.3s;
  background-color: white;
}

span:after {
  content: "";
  position: absolute;
  top: -1px;
  left: 6px;
  border-bottom: 2px solid var(--checkmark-color);
  border-right: 2px solid var(--checkmark-color);
  height: 9px;
  width: 4px;
  transform: rotate(45deg);
  visibility: hidden;
}

input {
  display: none;
}

.check-content {
  @apply hidden;
}

input:checked ~span .check-content {
  @apply block;
}

input:after {
  visibility: visible;
}
</style>