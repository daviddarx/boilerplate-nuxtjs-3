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
    <div v-html="post.content_wysiwyg"></div>
  </article>
</template>

<script setup>
import { usePost } from '~/composables/usePost'

const route = useRoute()
const id = route.params.id[0]

const post = await usePost(id)

if (!post) throwError('No article found, 404')
</script>

<script>
export default {
  name: 'BlogDetailPage',
  mounted() {
    console.log('blog detail page mounted', this.post)
  },
}
</script>

<style lang="pcss" scoped>
p {
  @apply mt-4;
}
</style>
