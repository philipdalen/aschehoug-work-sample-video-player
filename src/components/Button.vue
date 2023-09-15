<template>
  <button
    type="button"
    class="base"
    :class="[
      {
        'py-[14px] text-label-bold-1 ': size === 'large',
        'py-[10px] text-label-bold-2': size === 'medium',
        'py-[8px] text-label-bold-2': size === 'small',
        border: true,
      },
      type,
    ]"
  >
    <span>
      <slot> </slot>
    </span>
  </button>
</template>
<script setup lang="ts">
type Props = {
  size?: "large" | "medium" | "small"
  type?: "primary" | "secondary" | "white"
}

withDefaults(defineProps<Props>(), {
  size: "medium",
  type: "primary",
})
</script>
<style lang="postcss" scoped>
button.base {
  @apply flex items-center justify-center space-x-2;
  @apply px-7;
  @apply rounded-[28px];
  @apply truncate disabled:cursor-not-allowed print:hidden;
}
button.primary {
  @apply border-button-primary border-opacity-10;
  @apply bg-button-primary-static;
  @apply text-color-button-primary;
  @apply transition-none;
}
button.primary:hover {
  @apply bg-button-primary-hover;
  @apply bg-opacity-80;
  @apply shadow-hovering;
}
button.primary:focus {
  @apply bg-button-primary-active;
}
button.secondary {
  @apply bg-button-secondary-static;
  @apply border-button-secondary;
  @apply text-color-button-secondary;
  @apply transition-none;
}
button.secondary:hover {
  @apply bg-button-secondary-hover;
  @apply bg-opacity-10;
}
button.secondary:focus {
  @apply bg-button-secondary-active;
}

button.white {
  @apply bg-1-static;
  @apply border-button-secondary;
  @apply text-color-button-secondary;
  @apply transition-none;
}
</style>
