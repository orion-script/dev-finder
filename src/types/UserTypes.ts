export type User = {
    name: string;
    login: string;
    avatar_url: string;
    created_at: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    company: string | null;
    blog: string | null;
    location: string | null;
    twitter_username: string | null;
  };