<template>
  <div class="flex flex-col items-center justify-center bg-gray-200">
    <div v-if="!isAuthenticated">
      <Button @click="login">Logg inn</Button>
    </div>
    <div v-else>
      <h1 class="text-4xl mb-4">Welcome {{ user?.name }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue"
import { useAuth0 } from "@auth0/auth0-vue"

const { loginWithRedirect, user, isAuthenticated } = useAuth0()

const login = () => {
  loginWithRedirect()
}
</script>
