<template>
  <div class="fixed left-0 top-0 w-screen h-dvh flex ">
    <div class="mx-auto flex flex-row w-6xl justify-center border">
      <div class="h-full w-full flex flex-row">
        <app-navi />
        <div class="w-full h-full">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
