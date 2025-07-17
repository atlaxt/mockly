<script setup>
const users = ref(null)

async function fetchUsers() {
  const res = await fetch('/api/users')
  users.value = await res.json()
}
</script>

<template>
  <NuxtLayout>
    <UCard variant="subtle" :ui="{ body: 'h-full' }">
      <template #header>
        <div class="flex md:flex-row flex-col gap-2 justify-between md:items-center items-start">
          <label>
            {{ "https://mockly.atlaxt.me/api/users" }}
          </label>
          <UButton icon="lucide:user" label="Kullanıcıları Getir" @click="fetchUsers" />
        </div>
      </template>
      <div class="overflow-y-auto h-full pb-12">
        <div v-if="users" style="margin-top: 16px;">
          <pre>{{ users }}</pre>
        </div>
      </div>
      <template #footer>
        asd
      </template>
    </UCard>
  </NuxtLayout>
</template>

<style>
div {
  font-family: Inter, sans-serif;
}
</style>
