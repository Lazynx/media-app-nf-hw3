import { PostsList } from "@/components/PostsList";
import { usePosts } from "@/context/PostsContext";

export default function Home() {
    const { posts, loading, error } = usePosts();

    return (
        <main className="flex-1 pt-16">
            <section className="w-full py-8 md:py-18 lg:py-26 bg-white">
                <div className="container space-y-12 px-4 md:px-6">
                    {loading ? (
                        <div className="inset-0 flex items-center justify-center bg-white w-full h-screen">
                            <div className="animate-spin rounded-full border-4 border-black border-t-transparent h-14 w-14" />
                        </div>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <PostsList posts={posts} />
                    )}
                </div>
            </section>
        </main>
    );
};
