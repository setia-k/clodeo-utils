import fromNow from '../fromNow';

describe('fromNow', () => {
  // Set system time to 12 December 2022 11:30:00
  jest.useFakeTimers().setSystemTime(new Date('2022-12-12 11:30:00.00 +0000 UTC'));

  describe('Time', () => {
    it('should return "a few seconds ago" when time is 11:29:50', () => {
      expect(fromNow('2022-12-12 11:29:50.00 +0000 UTC')).toBe('a few seconds ago');
    });

    it('should return "a minute ago" when time is 11:29:00', () => {
      expect(fromNow('2022-12-12 11:29:00.00 +0000 UTC')).toBe('a minute ago');
    });

    it('should return "an hour ago" when time is 10:30:00', () => {
      expect(fromNow('2022-12-12 10:30:00.00 +0000 UTC')).toBe('an hour ago');
    });

    it('should return "3 hour ago" when time is 08:30:00', () => {
      expect(fromNow('2022-12-12 08:30:00.00 +0000 UTC')).toBe('3 hours ago');
    });
  });

  describe('Days', () => {
    it('should return "a day ago" when time is 11/12/2022 ', () => {
      expect(fromNow('2022-12-11 11:30:00.00 +0000 UTC')).toBe('a day ago');
    });

    it('should return "3 days ago" when time is 9/12/2022 ', () => {
      expect(fromNow('2022-12-09 11:30:00.00 +0000 UTC')).toBe('3 days ago');
    });
  });

  describe('Months', () => {
    it('should return "a month ago" when date is 11/11/2022 ', () => {
      expect(fromNow('2022-11-11 11:30:00.00 +0000 UTC')).toBe('a month ago');
    });

    it('should return "3 months ago" when date is 9/9/2022 ', () => {
      expect(fromNow('2022-09-09 11:30:00.00 +0000 UTC')).toBe('3 months ago');
    });
  });

  describe('Years', () => {
    it('should return "a year ago" when date is 12/12/2021 ', () => {
      expect(fromNow('2021-12-12 11:30:00.00 +0000 UTC')).toBe('a year ago');
    });

    it('should return "3 years ago" when date is 12/12/2019 ', () => {
      expect(fromNow('2019-12-12 11:30:00.00 +0000 UTC')).toBe('3 years ago');
    });
  });

  describe('Falsy Values', () => {
    it('should return empty string for falsy values', () => {
      expect(fromNow('')).toBe('');
      expect(fromNow(null as any)).toBe('');
      expect(fromNow(undefined as any)).toBe('');
    });
  });
});
