<template>
  <article class="blog-detail">
    <h1>
      {{ post.title }}
    </h1>
    <p>
      {{ post.date_created }}
    </p>
    <p>
      {{ post.short_content }}
    </p>
    <p v-html="post.content_wysiwyg"></p>
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
