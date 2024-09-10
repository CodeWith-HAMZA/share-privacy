<template>
  <div class="border border-gray-300 p-4 mb-4 rounded bg-gray-50">
    <div class="font-bold mb-2 text-gray-700">
      {{ profileName }}
    </div>
    <div class="mb-4">
      <p class="text-gray-800">{{ text }}</p>
    </div>
    <div class="flex space-x-2">
      <button
        @click="handleReply"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Reply
      </button>
      <button
        @click="handleReport"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Report
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  profileName: string;
  text: string;
}
// Define props
const props = defineProps<Props>({
  profileName: String,
  text: String
  },
});

// Define emits
const emit = defineEmits(["reply", "report"]);

// Methods
const handleReply = () => {
  emit("reply");
};

const handleReport = () => {
  emit("report");
};
</script>
