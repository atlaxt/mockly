<script setup>
import { onMounted, ref } from 'vue'

const data = ref(null)
const type = ref('users')

const uuidData = ref(null)
const uuidVersion = ref('4')
const uuidName = ref('')

async function fetchData(selectedType = type.value) {
  type.value = selectedType
  if (selectedType === 'uuid') {
    uuidData.value = null
    return
  }
  const res = await fetch(`/api/${selectedType}`)
  data.value = await res.json()
}

async function fetchUuid() {
  let url = `/api/uuid?v=${uuidVersion.value}`
  if (uuidVersion.value === '5' && uuidName.value) {
    url += `&name=${encodeURIComponent(uuidName.value)}`
  }
  const res = await fetch(url)
  uuidData.value = await res.json()
}

onMounted(() => fetchData('users'))

useHead({
  title: 'Mockly',
})
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
            <UButton
              icon="lucide:key"
              label="UUID"
              :variant="type === 'uuid' ? 'solid' : 'ghost'"
              @click="fetchData('uuid')"
            />
          </div>
        </div>
      </template>
      <div class="overflow-y-auto h-full pb-12">
        <!-- users / todos gösterimi -->
        <div v-if="type !== 'uuid' && data" style="margin-top: 16px;">
          <pre>{{ data }}</pre>
        </div>
        <!-- uuid gösterimi -->
        <div v-else-if="type === 'uuid'" class="flex flex-col gap-4 mt-4 max-w-lg">
          <div class="flex items-center gap-4">
            <label class="text-sm font-medium">Version:</label>
            <select v-model="uuidVersion" class="border rounded px-2 py-1 text-sm">
              <option value="1">
                v1
              </option>
              <option value="4">
                v4
              </option>
              <option value="5">
                v5
              </option>
            </select>
            <input
              v-if="uuidVersion === '5'"
              v-model="uuidName"
              placeholder="Name (for v5)"
              class="border rounded px-2 py-1 text-sm"
              style="min-width: 180px;"
            >
            <UButton label="Get UUID" icon="lucide:refresh-cw" size="xs" @click="fetchUuid" />
          </div>
          <div v-if="uuidData" style="margin-top: 16px;">
            <pre>{{ uuidData }}</pre>
          </div>
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
