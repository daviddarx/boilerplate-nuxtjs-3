<template>
  <article class="blog">
    <h1>I am the blog page</h1>
    <article v-for="post in posts" class="blog-card">
      <NuxtLink :to="`/blog/${post.id}`">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
      <p>{{ post.short_content }}</p>
    </article>
  </article>
</template>

<script setup>
import { usePosts } from '~/composables/usePosts'

const posts = await usePosts()
</script>

<script>
export default {
  name: 'BlogPage',
  mounted() {
    // console.log('blog page mounted', this.postsResponse.data.collectionblog[0])
  },
}
</script>

<style lang="pcss" scoped>
.blog-card {
  @apply mt-10;
}
</style>
