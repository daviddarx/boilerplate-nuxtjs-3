<template>
  <div class="website">
    <header class="website__header">
      <AppLogo />
      <AppNav />
    </header>
    <main class="website__content text-content">
      <slot />
    </main>
    <AppFooter class="website__footer" />
    <AppTransition />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="pcss" scoped>
.website {
  @apply flex flex-col min-h-screen;
}

.website__header {
  @apply relative z-50;
}

.website__content {
  @apply flex-grow ;
  @apply p-10 pt-0;
}
.website__footer {
  @apply p-4;
}
</style>
