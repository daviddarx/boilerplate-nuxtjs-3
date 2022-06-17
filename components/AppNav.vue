<template>
  <nav class="nav">
    <h3 class="hidden">Main navigation</h3>
    <ul class="nav__list">
      <li class="nav__el">
        <nuxt-link to="/about" class="nav__link">About</nuxt-link>
      </li>
      <li class="nav__el">
        <nuxt-link to="/blog" class="nav__link">Blog</nuxt-link>
      </li>
      <li class="nav__el">
        <nuxt-link to="/contact" class="nav__link">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
}
</script>

<style lang="pcss" scoped>
.nav {
  @apply p-4;
  @apply text-gray-100;
  @apply bg-gray-500;
}
</style>
