import { useFetch } from '#app'

export const usePosts = async () => {
  const { BACKEND_BASE_URL } = useRuntimeConfig()

  const postsResponse = await useFetch(`${BACKEND_BASE_URL}/graphql`, {
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
  })

  if (
    postsResponse?.data?.value?.data?.collectionblog &&
    postsResponse.data.value.data.collectionblog.length >= 1
  ) {
    return postsResponse.data.value.data.collectionblog
  }
}
