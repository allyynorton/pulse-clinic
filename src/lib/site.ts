/**
 * Canonical site identity. Every module that needs the site's URL, name, or
 * service area imports from here so the values can never drift apart.
 *
 * SITE_URL is normalized: NEXT_PUBLIC_SITE_URL is set in Vercel and has
 * historically carried a trailing slash, which produced "//About" style URLs
 * wherever it was concatenated with a path. Stripping it once, here, is the
 * single place that concern is handled.
 */
const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.pulsewholehealth.com";

export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

export const SITE_NAME = "Pulse Whole Health";

export const LEGAL_NAME = "Pulse Whole Health I, P.C.";

export const CONTACT_EMAIL = "contact@pulsewholehealth.com";

/** The only state the practice is licensed to treat patients in. */
export const SERVICE_STATE = "Pennsylvania";
export const SERVICE_STATE_CODE = "PA";

/** Organization entity id, referenced by every other schema block. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
