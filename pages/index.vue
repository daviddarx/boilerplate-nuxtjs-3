<template>
  <article class="home">
    <h1>I am the home page</h1>
    Windows dimensions: {{ width }} / {{ height }}<br />
    Windows width doubled: {{ widthDoubled }}
  </article>
</template>

<script>
import { useWindowDimensions } from '@/composables/useWindowDimensions.js'

export default {
  name: 'HomePage',
  setup() {
    console.log('setup home page (client & server)')

    const { width, height } = useWindowDimensions()

    return {
      width,
      height,
    }
  },
  computed: {
    widthDoubled() {
      return this.width * 2
    },
  },
}
</script>

<style lang="pcss" scoped></style>
