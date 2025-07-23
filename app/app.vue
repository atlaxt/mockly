<script setup lang="ts">
</script>

<template>
  <NuxtPage />
</template>

<!-- <script setup>
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
              color="neutral"
              icon="lucide:user"
              label="Kullanıcılar"
              :variant="type === 'users' ? 'solid' : 'ghost'"
              @click="fetchData('users')"
            />
            <UButton
              color="neutral"
              icon="lucide:list-todo"
              label="Todos"
              :variant="type === 'todos' ? 'solid' : 'ghost'"
              @click="fetchData('todos')"
            />
            <UButton
              color="neutral"
              icon="lucide:key"
              label="UUID"
              :variant="type === 'uuid' ? 'solid' : 'ghost'"
              @click="fetchData('uuid')"
            />
          </div>
          <UPopover :content="{ side: 'left', align: 'start' }">
            <UButton color="neutral" icon="lucide:info" variant="subtle" />

            <template #content>
              <div class="text-xs p-4 leading-relaxed max-w-xs">
                <b>/api/users</b> <br> 10 adet sahte kullanıcıyı JSON olarak döndürür.<br>
                <b>/api/users/1</b> <br> Belirli bir kullanıcıyı ID ile getirir.<br><br>
                <b>/api/todos</b> <br> Örnek yapılacaklar (todo) listesini döndürür.<br>
                <b>/api/todos/1</b> <br> Belirli bir todo’yu ID ile getirir.<br><br>
                <b>/api/uuid</b> <br> Rastgele UUID üretir. <br>
                <span class="text-gray-500 ml-2">Varsayılan: v4<br>
                  <b>?v=1</b> → UUID v1 <br>
                  <b>?v=5&amp;name=example</b> → UUID v5 (isimle birlikte)<br>
                </span>
              </div>
            </template>
          </UPopover>
        </div>
      </template>
      <div class="overflow-y-auto h-full pb-12">
        <div v-if="type !== 'uuid' && data" style="margin-top: 16px;">
          <pre>{{ data }}</pre>
        </div>
        <div v-else-if="type === 'uuid'" class="flex flex-col gap-4 mt-4 max-w-lg">
          <div class="flex items-center gap-4">
            <USelectMenu v-model="uuidVersion" value-key="id" class="w-24" :search-input="false" :items="[{ label: 'v1', id: '1' }, { label: 'v4', id: '4' }, { label: 'v5', id: '5' }]" />
            <input
              v-if="uuidVersion === '5'"
              v-model="uuidName"
              placeholder="Name (for v5)"
              class="border rounded px-2 py-1 text-sm"
              style="min-width: 180px;"
            >
            <UButton color="neutral" label="Get UUID" icon="lucide:refresh-cw" size="xs" @click="fetchUuid" />
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
-->
