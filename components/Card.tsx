import Link from 'next/link';

type CardProps = {
    id: number; 
    title: string;
    body: string;
    tags: string[];
    reactions: { likes: number; dislikes: number };
    views: number;
    username?: string;
};

export const Card: React.FC<CardProps> = ({ id, title, body, tags, reactions, views, username }) => {
    return (
        <div className="w-full max-w-md rounded-lg bg-white shadow-md flex flex-col border">
            <div className="flex items-center px-4 py-2">
                <h2 className="text-lg text-black font-semibold">{title}</h2>
            </div>
            <div className="space-y-4 px-4">
                <p className="text-black">{body}</p>
            </div>
            
            <div className="mt-auto px-4 py-3 dark:border-gray-800">
                <div className="flex flex-wrap gap-2 mt-2 pb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-white dark:bg-gray-800">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 cursor-pointer">
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
                        <span>{reactions.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 cursor-pointer">
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
                        <span>{reactions.dislikes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-green-500 cursor-pointer">
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
                        <span>{views}</span>
                    </div>
                    <Link href={`/posts/${id}`} className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};
