<template>
  <article class="blog-detail">
    <h1>
      {{ postResponse.data.collectionblog_by_id.title }}
    </h1>
    <p>
      {{ postResponse.data.collectionblog_by_id.date_created }}
    </p>
    <p>
      {{ postResponse.data.collectionblog_by_id.short_content }}
    </p>
    <div v-html="postResponse.data.collectionblog_by_id.content_wysiwyg"></div>
  </article>
</template>

<script setup>
const route = useRoute()
const id = '4c78dfe0-8d80-4183-9119-406ce4e21d32' // route.params.id

console.log('route', route.params.id[0])

const { data: postResponse } = await useFetch(
  'https://dex2bcoq.directus.app/graphql',
  {
    method: 'POST',
    body: JSON.stringify({
      query: `
      query Post {
        collectionblog_by_id(id: "${id}") {          
          id
          short_content
          title
          date_created
          content_wysiwyg
        }
      }
    `,
    }),
  }
)

if (!postResponse) throwError('No article found, 404')
</script>

<script>
export default {
  name: 'BlogDetailPage',
  mounted() {
    /* console.log(
      'blog detail page mounted',
      this.postResponse.data.collectionblog_by_id
    ) */
  },
}
</script>

<style lang="pcss" scoped>
p {
  @apply mt-4;
}
</style>
