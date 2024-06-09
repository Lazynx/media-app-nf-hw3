type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => {
    return (
        <button
            type={type}
            className="w-full rounded-md bg-gray-900 p-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
        >
            {children}
        </button>
    );
};
