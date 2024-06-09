import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePosts } from '@/context/PostsContext';

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
    username?: string; 
    userImage?: string;
}

const PostPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const { posts } = usePosts();
    const [post, setPost] = useState<Post | null>(null); 

    useEffect(() => {
        if (id) {
            const foundPost = posts.find((p) => p.id === Number(id)); 
            setPost(foundPost || null);
        }
    }, [id, posts]);

    if (!post) {
        return <div className="inset-0 flex items-center justify-center bg-white w-full h-screen">
                    <div className="animate-spin rounded-full border-4 border-black border-t-transparent h-14 w-14" />
                </div>
    }

    return (
        <main className="flex-1 pt-16">
            <article className="prose prose-gray mx-auto max-w-3xl px-4 py-12 dark:prose-invert md:px-6 md:py-16 lg:py-20">
                <div className="space-y-2 not-prose">
                    <h1 className="text-black text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-white">
                        {post.title}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 pb-2">
                            {post.userImage && <img src={post.userImage} width={24} height={24} alt="Author Avatar" className="rounded-full border" />}
                            <span>{post.username && <p className="text-sm text-gray-500">By {post.username}</p>}</span>
                        </div>
                    </div>
                </div>
                <p className='text-black dark:text-white'>
                    {post.body}
                </p>
                <div className="mt-4 flex flex-wrap justify-between gap-2">
                    <div className="flex gap-2">
                        {post.tags.map((tag, index) => (
                            <span key={index} className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white dark:bg-gray-800">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 dark:hover:text-red-500 hover:text-red-500 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-red-500 hover:stroke-red-500">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                            <span>{post.reactions.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover:stroke-blue-500">
                                <path d="M17 14V2" />
                                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                            </svg>
                            <span>{post.reactions.dislikes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 dark:hover:text-green-500 hover:text-green-500 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover:stroke-green-500">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span>{post.views}</span>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default PostPage;
