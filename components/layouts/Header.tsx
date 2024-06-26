import Link from "next/link";
import { useAuth } from '@/context/AuthContext';
import { ThemeToggle } from "../ThemeToggle";
import { useMediaQuery } from '@react-hook/media-query';

export const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const isWide = useMediaQuery('(min-width: 640px)');

    return (
        <header className="bg-white text-gray-900 px-4 lg:px-6 h-16 fixed top-0 left-0 right-0 z-50 border-b border-black dark:bg-black dark:border-white">
            <div className="container mx-auto flex items-center justify-between h-full relative">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <span className="text-2xl font-bold font-serif dark:text-white">Medium</span>
                </Link>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <nav className="flex gap-4 sm:gap-6"> 
                        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 dark:text-white" prefetch={false}>
                            Home
                        </Link>
                        <Link href="/posts" className="text-sm font-medium hover:underline underline-offset-4 dark:text-white" prefetch={false}>
                            Posts
                        </Link>
                        {!user && (
                            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4 dark:text-white" prefetch={false}>
                                Login
                            </Link>
                        )}
                    </nav>
                    
                    {user && (
                        <div className="flex items-center space-x-2">
                            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className={`w-8 h-8 rounded-full border ${isWide ? 'block' : 'hidden'}`} />
                            <span className={`text-sm font-medium dark:text-white ${isWide ? 'block' : 'hidden'}`}>{`${user.firstName} ${user.lastName} `}</span>
                            <button onClick={logout} className="w-7 h-7 text-sm">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path className="dark:stroke-white"
                                            stroke="#000000"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"
                                        ></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
