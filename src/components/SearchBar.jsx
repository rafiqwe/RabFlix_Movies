export default function SearchBar({ onSearch, placeholder }) {
  return (
    <div className="mb-6 flex justify-center mt-6 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-xl px-4 py-2 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
}
