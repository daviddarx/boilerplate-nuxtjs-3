<template>
  <div class="website">
    <header class="header">
      <AppLogo />
      <AppNav />
    </header>
    <main class="content">
      <slot />
    </main>
    <AppFooter class="footer" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="postcss" scoped></style>
