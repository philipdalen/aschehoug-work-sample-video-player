<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <Auth />
    <VideoPlayer v-if="isAuthenticated" />
  </div>
</template>

<script setup lang="ts">
import Auth from "@/components/Auth.vue"
import VideoPlayer from "@/components/VideoPlayer.vue"
import { useAuth0 } from "@auth0/auth0-vue"

const { isAuthenticated } = useAuth0()
</script>
