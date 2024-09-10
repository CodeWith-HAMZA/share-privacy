<template>
  <div>
    
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

// import type { MenuIcon } from "lucide-vue-next";

const router = useRouter();

function pushToRegister() {
  router.push("/auth/register");
}

// No imports needed due to Nuxt 3's auto-import functionality
</script>
