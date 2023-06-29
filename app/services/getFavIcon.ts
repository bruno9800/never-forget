import { performRequest } from "../lib/dato-cms";

interface QueryFormat {
  data: {
    _site: {
      favicon: {
        url: string;
      }
    }
  }
}

export default async function getFavIcon() {
  const response: QueryFormat = await performRequest({
    query: 
      ` 
      query{
        _site{
          favicon {
            url
          }
        }
      }
      `,
  });
  
  return {
    faviconUrl: response.data._site.favicon.url,
  }
}