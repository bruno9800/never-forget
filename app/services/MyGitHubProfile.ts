import { StaticImageData } from "next/image";

export interface GithubUser {
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string | StaticImageData;
}

export default async function myGitHubProfile() {
  const username = 'bruno9800';
  const link = `https://api.github.com/users/${username}`

  const response = await fetch(link, {
    next: {
      revalidate: 60 * 60 * 24 * 1, // 1 dia;
    }
  });
  const data: GithubUser = await response.json();

  if(!response.ok) {
    return null;
  }

  return data;
}