import { z } from "zod";
import { performRequest } from "../lib/dato-cms";

const queryTechByIdSchema = z.object({
  tech: z.object({
    id: z.string(),
  }),
})

export default async function getTechIdByTechName(tech: string) {
  const response = await performRequest({query: `
  query TechByName {
    tech(
      filter: {
        techName: {eq: "${tech}"}
      }
    ) {
      id
    }
  }
  `})

  const data = queryTechByIdSchema.safeParse(response.data);
  if(data.success) {
    return data.data;
  }

  throw new Error('tech not exists');
}