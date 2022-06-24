<template>
  <article class="blog">
    <h1 class="animate-in">I am the blog page</h1>
    <article v-for="post in posts" class="blog-card animate-in animate-in--s1">
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
    console.log('blog page mounted', this.posts)
  },
}
</script>

<style lang="pcss" scoped></style>
