import { useFetch } from '#app'

export const usePost = async (id) => {
  console.log('test ' + id)
  const postResponse = await useFetch('https://dex2bcoq.directus.app/graphql', {
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
