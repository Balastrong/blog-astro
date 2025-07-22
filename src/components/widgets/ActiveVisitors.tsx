import { useEffect, useState, useRef } from 'react';

const STORAGE_KEY = 'active_visitor_count';
const TIMESTAMP_KEY = 'active_visitor_timestamp';

const DISPLAY_UPDATE_INTERVAL = 60000; // 60 seconds for UI refreshes
const MAX_API_CALLS = 5; // Maximum number of API calls before stopping

export default function ActiveVisitors() {
  const apiCallCount = useRef(0);
  const intervalIdRef = useRef<number | null>(null);

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

      // Check if we've already made 5 API calls
      if (apiCallCount.current >= 5) {
        return false;
      }

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
          const response = await fetch('/api/visitor-count-v2');

          if (!response.ok) {
            throw new Error('Failed to fetch visitor count');
          }

          const data = await response.json();

          if (data.success) {
            setVisitorCount(data.count);
            // Store the count and current timestamp in localStorage
            localStorage.setItem(STORAGE_KEY, data.count.toString());
            localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());

            // Increment API call counter
            apiCallCount.current += 1;

            // Clear interval after MAX_API_CALLS
            if (apiCallCount.current >= MAX_API_CALLS && intervalIdRef.current) {
              clearInterval(intervalIdRef.current);
              intervalIdRef.current = null;
            }

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
    intervalIdRef.current = window?.setInterval(fetchVisitorCount, DISPLAY_UPDATE_INTERVAL);

    // Clean up interval on component unmount
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  if (error) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://youtu.be/HAOMTH4uCkE"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${visitorCount ?? 1} online visitors - Click to watch related video`}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
      >
        <div
          className="flex items-center justify-center px-3 py-1.5 bg-blue-100 dark:bg-blue-900 rounded-full text-sm shadow-md hover:shadow-lg hover:scale-105 hover:rotate-1 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 cursor-pointer group"
          role="button"
          tabIndex={-1}
        >
          <span className="flex items-center">
            <span
              className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse group-hover:animate-ping group-hover:bg-green-400"
              style={{
                animationDuration: '2s',
              }}
              aria-hidden="true"
            ></span>
            <span className="group-hover:font-medium transition-all duration-300">{visitorCount ?? 1}</span>
          </span>
        </div>
      </a>
    </div>
  );
}
