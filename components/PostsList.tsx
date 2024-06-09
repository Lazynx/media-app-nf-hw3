import { Card } from "./Card";

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

interface PostsListProps {
    posts: Post[];
    loading?: boolean;
    error?: string | null;
}

export const PostsList: React.FC<PostsListProps> = ({ posts, loading, error = null }) => {
    if (loading) {
        <div className="inset-0 flex items-center justify-center bg-white w-full h-screen">
            <div className="animate-spin rounded-full border-4 border-black border-t-transparent h-14 w-14" />
        </div>
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
                <Card
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    tags={post.tags}
                    reactions={post.reactions}
                    views={post.views}
                    username={post.username}
                />
            ))}
        </div>
    );
};
