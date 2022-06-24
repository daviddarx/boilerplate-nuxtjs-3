import { useFetch } from '#app'

export const usePosts = async () => {
  const postsResponse = await useFetch(
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

  if (
    postsResponse?.data?.value?.data?.collectionblog &&
    postsResponse.data.value.data.collectionblog.length >= 1
  ) {
    return postsResponse.data.value.data.collectionblog
  }
}
