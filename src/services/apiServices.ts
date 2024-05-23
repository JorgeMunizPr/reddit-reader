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
