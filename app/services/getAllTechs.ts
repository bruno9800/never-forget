import { performRequest } from "../lib/dato-cms";

export default async function getAllTechs() {
  const response = await performRequest({query: `
  query MyQuery {
    allTeches(filter: {_status: {eq: published}}) {
      id
      techName
      techImg {
        url
      }
    }
  }
  `})

  return response.data;
}