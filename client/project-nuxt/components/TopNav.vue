<template>
   <div class="bg-white px-3 fixed z-30 flex items-center w-full border-b h-[61px]">
    <div
      class="flex items-center justify-between w-full px-6 mx-auto"
      :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
    >
      <NuxtLink to="/">
        <h1 class="text-3xl cursor-pointer hover:opacity-80 font-bold">Sharify</h1>
      </NuxtLink>
    </div>

    <div
      class="hidden md:flex items-center bg-[#F1F1F2] p-1 rounded-full max-w-[380px] w-full"
    >
      <input
        type="text"
        class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
        placeholder="Search accounts"
      />
      <div class="px-3 py-1 flex items-center border-l border-l-gray-300">
        <Icon name="ri:search-line" color="#A1A2A7" size="22" />
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full">
      <Button variant="outline">Upload</Button>
      <div v-if="false" class="flex items-center">
        <Button>Log In</Button>
      </div>
      <div v-else class="flex items-center">
        <MessageCircleHeart size />
        <div class="relative">
          <Button class="mt-1" @click="showMenu = !showMenu"> Profile </Button>

          <div
            v-if="showMenu"
            id="PopupMenu"
            class="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2"
          >
            <NuxtLink
              :to="`/profile/${$userStore?.id}`"
              @click="showMenu = false"
              class="flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer"
            >
              <Icon name="ph:user" size="20" />
              <span class="pl-2 font-semibold text-sm">Profile</span>
            </NuxtLink>
            <div
              @click="logout()"
              class="flex items-center justify-start py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer"
            >
              <Icon name="ic:outline-login" size="20" />
              <span class="pl-2 font-semibold text-sm">Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import type { MessageCircleHeart } from "lucide-vue-next";


// returns the current location of the route
const route = useRoute();
const router = useRouter();
let showMenu = ref(false);

// dummy methods TODO: change to actual methods
const $userStore = { id: "", image: "" };

function isLoggedIn() {}
function logout() {}
</script>

<style lang="scss" scoped></style>
