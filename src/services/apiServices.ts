import axios from 'axios';
import { formatDate } from './formatDate';

//TypeScript interfaces for the Reddit API response
export interface RedditPost {
  id: string;
  title: string;
  author: string;
  num_comments: number;
  ups: number;
  url: string;
  created_utc: number;
}

export interface RedditUserPost {
  link_title: string;
  link_url: string;
  ups: number;
  num_comments: number;
}

export interface RedditUser {
  latest_post: RedditUserPost[];
}

//Fetch post from a subreddit
export const fetchPosts = async (subreddit: string): Promise<RedditPost[]> => {
  try {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
    const posts = response?.data?.data?.children.map((child: any) => ({
      id: child.data.id,
      title: child.data.title,
      author: child.data.author,
      num_comments: child.data.num_comments,
      ups: child.data.ups,
      url: child.data.url,
      created_utc: formatDate(child.data.created_utc),
    }));
    return posts;
  } catch (error) {
    throw error;
  }
};

// Fetch details about Reddit user
export const fetchUser = async (username: string): Promise<RedditUser> => {
  try {
    const response = await axios.get(`https://www.reddit.com/user/${username}.json`);
    const posts: RedditUserPost[] = response.data.data.children.map((child: any) => ({
      link_title: child.data.link_title || child.data.title,
      link_url: child.data.link_url,
      ups: child.data.ups,
      num_comments: child.data.num_comments,
    }));

    const user: RedditUser = { latest_post: posts };
    return user;
  } catch (error) {
    throw error;
  }
};
