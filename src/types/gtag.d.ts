export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      ...args: [string, string | Date, ...Record<string, unknown>[]]
    ) => void;
  }
}
