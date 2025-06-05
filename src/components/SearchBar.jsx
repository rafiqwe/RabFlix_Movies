export default function SearchBar({ onSearch, placeholder }) {
  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-xl px-4 py-2 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
}
