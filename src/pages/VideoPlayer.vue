<template>
  <div v-if="!isAuthenticated">
    <button @click="login">Log in</button>
  </div>

  <div v-else class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <h1 class="text-4xl mb-4">{{ user?.name }}</h1>
    <input
      type="file"
      accept="video/*"
      class="p-2 border rounded"
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
import { useAuth0 } from "@auth0/auth0-vue"
import { ref } from "vue"

const { loginWithRedirect, user, isAuthenticated } = useAuth0()

const login = () => {
  loginWithRedirect()
}
const name = ref("Your name")
const videoUrl = ref("")

function handleVideoUpload(event: Event) {
  const fileInput = event.target as HTMLInputElement
  const file = fileInput?.files?.[0]
  if (file) {
    videoUrl.value = URL.createObjectURL(file)
  }
}
</script>
