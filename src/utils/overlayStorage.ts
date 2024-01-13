export const LAST_SEEN_COUNT_KEY = 'overlay-last-seen';
export const LAST_SEEN_TIMESTAMP_KEY = 'overlay-last-seen-timestamp';

const setLastSeen = () => {
  localStorage.setItem(LAST_SEEN_TIMESTAMP_KEY, new Date().getTime().toString());

  const count = localStorage.getItem(LAST_SEEN_COUNT_KEY);
  localStorage.setItem(LAST_SEEN_COUNT_KEY, (count ? parseInt(count) + 1 : 1).toString());
};

const shouldShowOverlay = () => {
  const lastSeenCount = localStorage.getItem(LAST_SEEN_COUNT_KEY);
  const lastSeenTimestamp = localStorage.getItem(LAST_SEEN_TIMESTAMP_KEY);

  if (!lastSeenCount || !lastSeenTimestamp) return true;

  const count = parseInt(lastSeenCount);
  const timestamp = parseInt(lastSeenTimestamp);

  return new Date().getTime() - timestamp >= getHoursDelay(count) * 60 * 60 * 1000;
};

const getHoursDelay = (count: number) => {
  if (count === 1) return 0.2; // 12 minutes
  if (count === 2) return 2;
  if (count === 3) return 24;

  return 99999999;
};

export const overlayStorage = {
  setLastSeen,
  shouldShowOverlay,
};
