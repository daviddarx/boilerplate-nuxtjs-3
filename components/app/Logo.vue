<template>
  <div class="logo">
    <h2 class="logo__text">
      <nuxt-link to="/" class="logo__link">Logo</nuxt-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
}
</script>

<style lang="pcss" scoped>
h2 {
  @apply p-4;
  @apply text-gray-50;
  @apply bg-gray-800;
}
</style>
