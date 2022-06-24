<template>
  <article class="blog">
    <h1>I am the blog page</h1>
    <article
      v-for="post in postsResponse.data.collectionblog"
      class="blog-card"
    >
      <NuxtLink :to="`/blog/${post.id}`">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
      <p>{{ post.short_content }}</p>
    </article>
  </article>
</template>

<script setup>
const { data: postsResponse } = await useFetch(
  'https://dex2bcoq.directus.app/graphql',
  {
    method: 'POST',
    body: JSON.stringify({
      query: `
      query Posts {
        collectionblog {
          id
          title
          short_content
        }
      }
    `,
    }),
  }
)
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
