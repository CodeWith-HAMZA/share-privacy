<!-- layouts/default.vue -->
<template>
  <!-- <header>Main Header</header> -->

  <TopNav />

  <div
    :class="route.fullPath === '/' ? 'max-w-[1140px]' : ''"
    class="flex justify-between mx-auto w-full lg:px-2.5 px-0"
  >
    <SideMainNav />
  </div>
  >
  <slot />
</template>

<script setup>
//  composition function from Nuxt.js, which provides access to the current route information.

const route = useRoute();
</script>

<style scoped>
/* Layout-specific styles here */
</style>
