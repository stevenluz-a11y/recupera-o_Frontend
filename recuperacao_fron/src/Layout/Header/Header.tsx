export default function Header() {
    return (
        <header className="mt-auto max-w-7xl px-4 pb-7 pt-5">
            <nav className="flex items-center justify-between">
                <a href="#">
                <img src="public/logo.svg" alt="PetCare" className="h-10 w-auto" />
                </a>
                <button 
                type="button"
                className="cursor-pointer rounded-lg bg-gray-100 p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                Lista de Favoritos
                </button>
            </nav>
        </header>
    );
}