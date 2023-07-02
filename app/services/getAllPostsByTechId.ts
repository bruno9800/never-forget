import z from "zod";
import { performRequest } from "../lib/dato-cms";

const getAllPostsByTechIdSchema = z.object({
  allPosts: z.array(z.object({
    id: z.string(),
    title: z.string(),
    link: z.string().url().nullable(),
    publisher: z.string().nullable(),
    _createdAt: z.string(),
    contentPreview: z.string(),
    thumbnail: z.object({
      url: z.string().url().nullable(),
    }),
    techs: z.array(z.object({
      techName: z.string(),
    })),
  }))
})

export type AllPostsByTechIdType = z.infer<typeof getAllPostsByTechIdSchema>;

export default async function getAllPostsByTechId(id: string) {
  const response = await performRequest({query: `
  query PostsByTech {
    allPosts(filter: {techs: {anyIn: ["${id}"]}}) {
      id
      title
      link
      publisher
      _createdAt
      contentPreview
      thumbnail {
        url
      }
      techs {
        techName
      }
    }
  }
  `})
  console.log(response.data);

  const data = getAllPostsByTechIdSchema.safeParse(response.data);

  if(data.success){
    return data.data;
  }

  throw new Error(`${data.error}`);
}