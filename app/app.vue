<script setup>
const data = ref(null)
const type = ref('users')

async function fetchData(selectedType = type.value) {
  type.value = selectedType
  const res = await fetch(`/api/${type.value}`)
  data.value = await res.json()
}
onMounted(() => fetchData('users'))
</script>

<template>
  <NuxtLayout>
    <UCard variant="subtle" :ui="{ body: 'h-full' }">
      <template #header>
        <div class="flex flex-col md:flex-row gap-2 justify-between md:items-center items-start w-full">
          <div class="flex items-center gap-2">
            <UButton
              icon="lucide:user"
              label="Kullanıcılar"
              :variant="type === 'users' ? 'solid' : 'ghost'"
              @click="fetchData('users')"
            />
            <UButton
              icon="lucide:list-todo"
              label="Todos"
              :variant="type === 'todos' ? 'solid' : 'ghost'"
              @click="fetchData('todos')"
            />
          </div>
        </div>
      </template>
      <div class="overflow-y-auto h-full pb-12">
        <div v-if="data" style="margin-top: 16px;">
          <pre>{{ data }}</pre>
        </div>
      </div>
      <template #footer>
        <span class="text-xs text-gray-400">mockly.atlaxt.me API demo</span>
      </template>
    </UCard>
  </NuxtLayout>
</template>

<style>
div {
  font-family: Inter, sans-serif;
}
</style>
