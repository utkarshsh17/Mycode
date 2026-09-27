const Tooltip = ({ children, text, position = 'top' }) => {
  return (
    <div className="relative group/tooltip inline-flex">
      {children}
      <div
        className={`absolute z-50 pointer-events-none whitespace-nowrap opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 ${
          position === 'top'
            ? 'bottom-full left-1/2 -translate-x-1/2 mb-2 origin-bottom'
            : 'top-full left-1/2 -translate-x-1/2 mt-2 origin-top'
        }`}
      >
        <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          {text}
          {position === 'top' && (
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-gray-800" />
          )}
          {position === 'bottom' && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-white dark:border-b-gray-800" />
          )}
        </div>
      </div>
    </div>
  );
};

export { Tooltip };
