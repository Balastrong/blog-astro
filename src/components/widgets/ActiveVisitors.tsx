import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'active_visitor_count';
const TIMESTAMP_KEY = 'active_visitor_timestamp';

const DISPLAY_UPDATE_INTERVAL = 60000; // 30 seconds for UI refreshes

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
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if we need to make a new API call
    const shouldFetchNewCount = (): boolean => {
      if (typeof window === 'undefined') return false;

      // Get timestamp of last fetch
      const lastFetchTimestamp = localStorage.getItem(TIMESTAMP_KEY);
      const now = Date.now();

      // If no timestamp or it's older than our refresh interval, fetch new data
      return !lastFetchTimestamp || now - parseInt(lastFetchTimestamp, 10) > DISPLAY_UPDATE_INTERVAL;
    };

    const fetchVisitorCount = async () => {
      try {
        // Only make API call if needed according to our rules
        if (shouldFetchNewCount()) {
          const response = await fetch('/api/visitor-count');

          if (!response.ok) {
            throw new Error('Failed to fetch visitor count');
          }

          const data = await response.json();

          if (data.success) {
            setVisitorCount(data.count);
            // Store the count and current timestamp in localStorage
            localStorage.setItem(STORAGE_KEY, data.count.toString());
            localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
            setError(false);
          } else {
            throw new Error('Failed to get visitor count');
          }
        } else {
          // Use cached value without making API call
          const storedCount = localStorage.getItem(STORAGE_KEY);
          if (storedCount) {
            setVisitorCount(parseInt(storedCount, 10));
          }
        }
      } catch (err) {
        setError(true);
        console.error('Error fetching visitor count:', err);
      }
    };

    // Initial fetch
    fetchVisitorCount();

    // Set up interval to periodically check if we need to update
    const intervalId = window?.setInterval(fetchVisitorCount, DISPLAY_UPDATE_INTERVAL);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className="flex items-center justify-center px-3 py-1.5 bg-blue-100 dark:bg-blue-900 rounded-full text-sm shadow-md hover:shadow-lg transition-shadow duration-200"
        title={error ? 'Error loading visitor count' : `Online visitors: ${visitorCount ?? 1}`}
      >
        {error ? (
          <span className="text-red-500 opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
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
