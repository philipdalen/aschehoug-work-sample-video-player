<template>
  <div class="flex flex-col items-center justify-center bg-gray-200">
    <Button class="mb-12" @click="triggerFileInput">Last opp video</Button>
    <input
      ref="fileInput"
      type="file"
      accept="video/*"
      class="hidden"
      @change="handleVideoUpload"
    />
    <video
      v-if="videoUrl"
      controls
      autoplay
      :src="videoUrl"
      class="mt-4 max-w-md w-full border rounded"
    ></video>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue"
import { Ref, ref } from "vue"

const videoUrl = ref("")
const fileInput: Ref<HTMLInputElement | null> = ref(null)

function triggerFileInput() {
  if (!fileInput.value) return
  fileInput.value.click()
}

function handleVideoUpload(event: Event) {
  const fileInput = event.target as HTMLInputElement
  const file = fileInput?.files?.[0]
  if (file) {
    videoUrl.value = URL.createObjectURL(file)
  }
}
</script>
