import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'active_visitor_count';

export default function ActiveVisitors() {
  // Initialize state from localStorage if available, otherwise null
  const [visitorCount, setVisitorCount] = useState<number | null>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const storedCount = localStorage.getItem(STORAGE_KEY);
      return storedCount ? parseInt(storedCount, 10) : null;
    }
    return null;
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor-count');

        if (!response.ok) {
          throw new Error('Failed to fetch visitor count');
        }

        const data = await response.json();

        if (data.success) {
          setVisitorCount(data.count);
          // Store the count in localStorage
          localStorage.setItem(STORAGE_KEY, data.count.toString());
          setError(null);
        } else {
          throw new Error('Failed to get visitor count');
        }
      } catch (err) {
        console.error('Error fetching visitor count:', err);
        setError('Could not load visitor count');
        // Don't clear visitorCount here to keep showing the stored count
      }
    };

    // Initial fetch
    fetchVisitorCount();

    // Set up interval to periodically update the visitor count (every 30 seconds)
    const intervalId = setInterval(fetchVisitorCount, 30000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center justify-center px-3 py-1.5 bg-blue-100 dark:bg-blue-900 rounded-full text-sm shadow-md hover:shadow-lg transition-shadow duration-200">
        {error ? (
          <span className="text-red-500 opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Offline
          </span>
        ) : (
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span>{visitorCount ?? 1}</span>
          </span>
        )}
      </div>
    </div>
  );
}
