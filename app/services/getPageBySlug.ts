import { z } from "zod";
import { performRequest } from "../lib/dato-cms";

const queryPageBySlugSchema = z.object({
  page: z.object({
    id: z.string(),
    title: z.string(),
  })
})

export default async function getPageBySlug(slug: string) {
  const response = await performRequest({query: `
  query PageBySlug {
    page(filter: {slug: {eq: "${slug}"}}) {
      id
      title
    }
  }
  `})

  const data = queryPageBySlugSchema.safeParse(response.data);

  if(data.success) {
    return data.data;
  }

  return null;
}