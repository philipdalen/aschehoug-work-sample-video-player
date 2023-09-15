<template>
  <div
    v-if="!isAuthenticated"
    class="flex flex-col items-center justify-center min-h-screen bg-gray-200"
  >
    <Button @click="login">Log in</Button>
  </div>

  <div v-else class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <h1 class="text-4xl mb-4">Welcome {{ user?.name }}</h1>
    <Button @click="triggerFileInput">Upload Video</Button>
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
      :src="videoUrl"
      class="mt-4 max-w-md w-full border rounded"
    ></video>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue"
import { useAuth0 } from "@auth0/auth0-vue"
import { Ref, ref } from "vue"

const { loginWithRedirect, user, isAuthenticated } = useAuth0()
const videoUrl = ref("")
const fileInput: Ref<HTMLInputElement | null> = ref(null)

const login = () => {
  loginWithRedirect()
}

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
