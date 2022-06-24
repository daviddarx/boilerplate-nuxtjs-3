<template>
  <article class="blog-detail">
    <h1>Nuxt Directus {{ post.title }}</h1>
    <p>
      {{ post.date_created }}
    </p>
    <p>
      {{ post.short_content }}
    </p>
    <div v-html="post.content_wysiwyg"></div>
  </article>
</template>

<script setup>
const { getItemById } = useDirectusItems()
const route = useRoute()

const post = await getItemById({
  collection: 'collectionblog',
  id: route.params.id,
})
if (!post) throwError('No article found, 404')
</script>

<style lang="pcss" scoped>
p {
  @apply mt-4;
}
</style>
