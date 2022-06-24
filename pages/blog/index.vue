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
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'collectionblog' })
</script>

<style lang="pcss" scoped></style>
