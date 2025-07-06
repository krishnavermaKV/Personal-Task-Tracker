export function Button({ label, onClick}) {
    return (
        <div>
            <button onClick={onClick} className="bg-blue-700 hover:bg-gray-700 text-xl text-white font-bold w-full text-center px-2 py-3  rounded">
                {label}
            </button>
        </div>
    );
}