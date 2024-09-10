<template>
  <Dialog>
    <div
      :id="`PostMain-${post.id}`"
      class="max-w-[30rem] border flex justify-between rounded-lg py-5 px-6"
    >
      <div @click="isLoggedIn(post.user)" class="cursor-pointer">
        <img class="rounded-full max-h-[60px]" width="60" :src="dummyImg" />
      </div>

      <div class="w-full p-2">
        <div class="flex items-center justify-between pb-0.5">
          <button @click="isLoggedIn(post.user)">
            <span class="font-bold hover:underline cursor-pointer"> Post Main </span>
            <span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer">
              new Date()
            </span>
          </button>

          <Button size="sm" variant="outline"> Follow </Button>
        </div>
        <div class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">
          {{ post.text }}
        </div>
        <div class="text-[14px] text-gray-500 pb-0.5">#fun #cool #SuperAwesome</div>
        <div class="text-[14px] pb-0.5 flex items-center font-semibold">
          <Icon name="mdi:music" size="17" />
          <div class="px-1">original sound - AWESOME</div>
          <Icon name="mdi:heart" size="20" />
        </div>
        <div class="mt-2.5 flex justify-center w-full">
          <div
            @click="displayPost(post)"
            class="min-h-[480px] max-h-[580px] flex items-center bg-black rounded-xl cursor-pointer"
          >
            <video
              ref="video"
              loop
              muted
              class="rounded-xl object-cover max-w-[22rem] h-full"
              src="https://utfs.io/f/a229d104-d4e0-45a7-b271-2040ef2f0d7a-3a.mp4"
            />

            <!-- <img
            class="absolute right-2 bottom-14"
            width="90"
            src="~/assets/images/tiktok-logo-white.png"
          /> -->
          </div>
          <div class="flex gap-5 items-center justify-center ml-6 flex-col">
            <div class="flex items-center flex-col">
              <ThumbsUp
                class="size-12 text-black bg-gray-200 rounded-full p-2 hover:opacity-70 transition-all cursor-pointer"
              />
              <span class="font-bold">34</span>
            </div>
            <div class="flex items-center flex-col">
              <ThumbsDown
                class="size-12 text-black bg-gray-200 rounded-full p-2 hover:opacity-70 transition-all cursor-pointer"
              />
              <span class="font-bold">4</span>
            </div>
            <div class="flex items-center flex-col">
              <DialogTrigger as-child>
                <MessageCircle
                  class="size-12 text-black bg-gray-200 rounded-full p-2 hover:opacity-70 transition-all cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent
                class="sm:max-w-[525px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"
              >
                <DialogHeader class="p-6 pb-0">
                  <DialogTitle>Comments</DialogTitle>
                  <DialogDescription>
                    Make changes to comments here. respectfully.
                  </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4 py-4 overflow-y-auto px-6">
                  <div class="flex flex-col justify-between">
                    <Comment :text="post" profileName="Profile Name"      />
                    <Comment :text="post" profileName="Profile Name"      />
                  </div>
                </div>

                <DialogFooter class="p-6 pt-0">
                  <Button type="submit"> Save changes </Button>
                </DialogFooter>
              </DialogContent>

              <span class="font-bold">34</span>
            </div>

            <div class="flex items-center flex-col">
              <Share2Icon
                class="size-12 text-black bg-gray-200 rounded-full p-2 hover:opacity-70 transition-all cursor-pointer"
              />

              <span class="font-bold">34</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { dummyImg, dummyVideo } from "./../../constants/index.ts";
import { ThumbsUp, MessageCircle, Share2Icon, ThumbsDown } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const post = { id: "demo", user: { image: "" }, text: "hello world", video: "" };
const video = ref();

onMounted(() => {
  video?.value?.play();
});

function displayPost() {}
function isLoggedIn() {}
</script>

<style lang="scss" scoped></style>
