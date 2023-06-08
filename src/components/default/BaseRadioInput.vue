<template>
  <label class="wrapper flex items-center">
    <slot></slot>
    <input class="checkbox" type="radio" :checked="modelValue === value" :value="value"
           @change="$emit('update:modelValue', $event.target.value)"/>
    <span class="checkmark"></span>
  </label>
</template>
<script setup>
defineEmits(['update:modelValue'])
defineProps({modelValue: String, value: String})
</script>
<style>
.wrapper {
  @apply text-3xl giga:text-6xl pl-[35px] giga:pl-[80px];
  display: block;
  position: relative;
  margin-bottom: 6px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.wrapper input {
  @apply absolute w-0 h-0 opacity-0 cursor-pointer;
}

/* Create a custom radio button */
.checkmark {
  @apply absolute top-0 left-0 h-[2rem] w-[2rem] giga:h-[4rem] giga:w-[4rem] border-black;
  border-radius: 50%;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  background-color: black;
  border: 3px solid white;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}
</style>