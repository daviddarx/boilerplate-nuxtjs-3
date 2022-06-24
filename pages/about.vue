<template>
  <article class="about">
    <h1>I am the about page</h1>
    <p class="test">Applied custom class</p>
  </article>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style lang="pcss" scoped>
.test {
  @apply applied;
}
</style>
