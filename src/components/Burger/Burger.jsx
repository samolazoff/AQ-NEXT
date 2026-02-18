const Burger = ({ open, setOpen }) => {

    return (
        <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-(--color-main) hover:text-(--color-primery) relative z-10"
            aria-label="Open menu"
        >
            <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                {open ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                )}
            </svg>
        </button>
    );
}

export default Burger;