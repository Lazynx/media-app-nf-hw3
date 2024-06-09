import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number; 
    username?: string; 
    userImage?: string;
}

interface PostsContextProps {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

const PostsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth(); 
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const headers = {
                    'Authorization': `Bearer ${token}`,
                };
                const response = await axios.get('https://dummyjson.com/posts', { headers });
                const fetchedPosts: Post[] = response.data.posts;

                for (let post of fetchedPosts) {
                    const userResponse = await axios.get(`https://dummyjson.com/users/${post.userId}`, { headers });
                    post.username = userResponse.data.username;
                    post.userImage = userResponse.data.image;
                }

                setPosts(fetchedPosts);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch posts');
                setLoading(false);
            }
        };

        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);

    return (
        <PostsContext.Provider value={{ posts, loading, error }}>
            {children}
        </PostsContext.Provider>
    );
};

const usePosts = (): PostsContextProps => {
    const context = useContext(PostsContext);
    if (context === undefined) {
        throw new Error('usePosts must be used within a PostsProvider');
    }
    return context;
};

export { PostsProvider, usePosts };
