<script setup lang="ts">
defineProps<{
  features: LandingFeature[]
}>()
</script>

<template>
  <section class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="feature in features"
      :key="feature.title"
      class="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
    >
      <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-300">
        <UIcon :name="feature.icon" class="h-5 w-5" />
      </span>
      <h3 class="mt-4 text-base font-semibold text-white">
        {{ feature.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-400">
        {{ feature.description }}
      </p>
    </div>
  </section>
</template>
