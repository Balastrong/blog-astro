import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { LAST_SEEN_COUNT_KEY, LAST_SEEN_TIMESTAMP_KEY, overlayStorage } from './overlayStorage';

const { setLastSeen, shouldShowOverlay } = overlayStorage;

describe('overlayStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('setLastSeen', () => {
    test('should be defined', () => {
      expect(setLastSeen).toBeDefined();
    });

    test('should begin with empty values', () => {
      expect(localStorage.getItem(LAST_SEEN_COUNT_KEY)).toBeNull();
      expect(localStorage.getItem(LAST_SEEN_TIMESTAMP_KEY)).toBeNull();
    });

    test('should set last seen timestamp', () => {
      setLastSeen();

      expect(localStorage.getItem(LAST_SEEN_TIMESTAMP_KEY)).toBeDefined();
      expect(localStorage.getItem(LAST_SEEN_COUNT_KEY)).toBe('1');
    });

    test('should increment last seen count', () => {
      setLastSeen();
      expect(localStorage.getItem(LAST_SEEN_COUNT_KEY)).toBe('1');
      setLastSeen();
      expect(localStorage.getItem(LAST_SEEN_COUNT_KEY)).toBe('2');
      setLastSeen();
      setLastSeen();
      setLastSeen();
      expect(localStorage.getItem(LAST_SEEN_COUNT_KEY)).toBe('5');
    });
  });

  describe('shouldShowOverlay', () => {
    test('should be defined', () => {
      expect(shouldShowOverlay).toBeDefined();
    });

    test('should return true if no values are set', () => {
      expect(shouldShowOverlay()).toBe(true);
    });

    test('should return false immediately after a setLastSeen', () => {
      setLastSeen();
      expect(shouldShowOverlay()).toBe(false);
    });

    test('should return false after 11:59 minutes', () => {
      setLastSeen();
      vi.setSystemTime(new Date().getTime() + 11 * 60 * 1000 - 1);
      expect(shouldShowOverlay()).toBe(false);
    });

    test('should return true after 12 minutes', () => {
      setLastSeen();
      vi.setSystemTime(new Date().getTime() + 12 * 60 * 1000);
      expect(shouldShowOverlay()).toBe(true);
    });

    test('should return false after 1:59:59 hours if setLastSeen twice', () => {
      setLastSeen();
      setLastSeen();
      vi.setSystemTime(new Date().getTime() + 2 * 60 * 60 * 1000 - 1);
      expect(shouldShowOverlay()).toBe(false);
    });

    test('should return true after 2 hours if setLastSeen twice', () => {
      setLastSeen();
      setLastSeen();
      vi.setSystemTime(new Date().getTime() + 2 * 60 * 60 * 1000);
      expect(shouldShowOverlay()).toBe(true);
    });
  });
});
