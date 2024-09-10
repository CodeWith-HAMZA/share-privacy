<template>
  <div
    id="SideNavMain"
    class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[95px] overflow-auto lg:w-[250px]"
  >
    <div class="w-full flex flex-col gap-3 my-3 px-3 mx-auto">
      <ItemsMenuItem
        v-for="(item, index) in menuItems"
        :key="item.id"
        :name="item.name"
        :icon="item.icon"
        :onClick="item.onClick"
        :url="item.url"
      />
      <div class="border-b lg:ml-2 mt-2" />

      <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
        Suggested accounts
      </div>

      <div class="lg:hidden block pt-3" />

      <div v-if="$generalStore.suggested" v-for="sug in $generalStore.suggested">
        <div @click="isLoggedIn(sug)" class="cursor-pointer">
          <!-- <MenuItemFollow :user="sug" /> -->
        </div>
      </div>

      <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
        See all
      </button>

      <div v-if="$userStore.id">
        <div class="border-b lg:ml-2 mt-2" />

        <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
          Following accounts
        </div>

        <div class="lg:hidden block pt-3" />

        <div v-if="$generalStore.following" v-for="fol in $generalStore.following">
          <div @click="isLoggedIn(fol)" class="cursor-pointer">
            <MenuItemFollow :user="fol" />
          </div>
        </div>

        <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
          See more
        </button>
      </div>
      <div class="lg:block hidden border-b lg:ml-2 mt-2" />

      <div class="lg:block hidden text-[11px] text-gray-500">
        <div class="pt-4 px-2">About Newsroom Shop Contact Careers ByteDance</div>
        <div class="pt-4 px-2">
          Sharify for Good Advertise Developers Transparency Browse Sharify Embeds
        </div>
        <div class="pt-4 px-2">
          Help Safety Terms Privacy Creator Portal Community Guidelines
        </div>
        <div class="pt-4 px-2">© 2023 TikTok</div>
      </div>

      <div class="pb-14"></div>
    </div>
  </div>
</template>

<script setup>
import { Home, HomeIcon, UserRoundPlus } from "lucide-vue-next";
import { menuItems } from "~/constants";
// const { $generalStore, $userStore } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const $generalStore = { suggested: "" };
const $userStore = { id: "" };

const isLoggedIn = (fol) => {
  //   if (!$userStore.id) {
  //     $generalStore.isLoginOpen = true;
  //     return;
  //   }
  //   setTimeout(() => router.push(`/profile/${fol.id}`), 200);
};
</script>
