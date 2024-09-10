<template>
  <div
    class="cursor-pointer hover:opacity-80 my-1 bg-gray-100 py-3 px-6 rounded-full lg:flex items-center gap-2 text-[11px]"
    :class="isActive ? 'text-[#F02C56]' : 'text-black'"
    @click="handleClick"
  >
    <component :is="props.icon" size="20" class="mr-2" />
    <NuxtLink :to="props.url" class="hidden lg:inline-block text-lg font-bold">
      <span class="hidden lg:inline-block text-lg font-bold">{{ props.name }} </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import { defineProps, defineEmits, ref } from "vue";

interface MenuItemProps {
  name: string;
  icon: Component;
  onClick: () => void;
  url: string;
}

const route = useRoute();
const props = defineProps<MenuItemProps>();
const emits = defineEmits(["click"]);

/**
 * Handles the click event on the MenuItem component.
 */
const isActive = computed(() => {
  // Access current route from useRoute() or pass it as a prop if necessary

  return route.path === props.url;
});
const handleClick = () => {
  // color.value = "blue";
  emits("click");
  props.onClick();
};
</script>
