import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-black text-gray-900 px-4 lg:px-6 h-16 flex items-center justify-between shadow-md">
            <div className="container mx-auto flex items-center justify-between h-full relative">
                <p className="text-xs">&copy; 2024 Medium. All rights reserved.</p>
                <p className="text-xs">Made by <b>Vladislav</b></p>
            </div>
        </footer>
    );
};