import { useFetch } from '#app'

export const usePost = async (id) => {
  const { BACKEND_BASE_URL } = useRuntimeConfig()

  const postResponse = await useFetch(`${BACKEND_BASE_URL}/graphql`, {
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
  })

  if (postResponse?.data?.value?.data?.collectionblog_by_id) {
    return postResponse.data.value.data.collectionblog_by_id
  }
}
