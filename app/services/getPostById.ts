import { z } from "zod";
import { performRequest } from "../lib/dato-cms";


const postByIdSchema = z.object({
  post: z.object({
    id: z.string(),
    title: z.string(),
    _createdAt: z.string(),
    thumbnail: z.object({
      url: z.string().url()
    }),
    postContent: z.object({
      value: z.any(),
    }),

  })
})

export default async function getPostById(id: string) {
  const response = await performRequest({
    query: `
    query PostById {
      post(filter: {id: {eq: "${id}"}}) {
        id
        title
        _createdAt
        thumbnail {
          url
        }
        postContent {
          value
        }
      }
    }
    `
  });


  try {
    const { post } = postByIdSchema.parse(response.data);
    
    return post;
  }catch(err) {
    throw new Error('Post invalido' + err);
  }
}