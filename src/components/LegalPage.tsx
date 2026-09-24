import Link from "next/link";

/**
 * Shared shell for legal/policy pages (Privacy Policy, Notice of Privacy
 * Practices). Holds every style decision in one place so the pages themselves
 * contain only their content.
 */

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2
        className="text-2xl font-bold mb-4"
        style={{ color: "#b8752f" }}
      >
        {heading}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function LegalSubsection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3
        className="text-lg font-semibold mb-3"
        style={{ color: "#b8752f" }}
      >
        {heading}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function LegalText({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-relaxed" style={{ color: "#5d6b57" }}>
      {children}
    </p>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5 list-disc" style={{ color: "#5d6b57" }}>
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Contact/address block, set apart from running text. */
export function LegalAddress({ lines }: { lines: string[] }) {
  return (
    <div
      className="rounded-lg p-5 space-y-1 not-italic"
      style={{ backgroundColor: "rgba(184, 117, 47, 0.06)", color: "#5d6b57" }}
    >
      {lines.map((line, i) => (
        <p key={i} className={i === 0 ? "font-semibold" : ""}>
          {line}
        </p>
      ))}
    </div>
  );
}

/** Fee schedule / data table. Scrolls horizontally on narrow screens. */
export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="py-3 px-4 font-semibold text-sm border-b-2"
                style={{ color: "#b8752f", borderColor: "#b8752f" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-cream">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="py-3 px-4 align-top"
                  style={{ color: "#5d6b57" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Signature / acknowledgment block shown on documents patients sign at intake. */
export function LegalSignature({
  heading,
  lines,
  note,
}: {
  heading?: string;
  lines: string[];
  note?: string;
}) {
  return (
    <div
      className="rounded-lg p-5 sm:p-6 mt-6 space-y-4"
      style={{ backgroundColor: "rgba(93, 107, 87, 0.06)" }}
    >
      {heading && (
        <p className="font-semibold" style={{ color: "#b8752f" }}>
          {heading}
        </p>
      )}
      {lines.map((line, i) => (
        <p key={i} className="leading-loose" style={{ color: "#5d6b57" }}>
          {line}
        </p>
      ))}
      {note && (
        <p className="text-sm italic pt-2" style={{ color: "#8a9584" }}>
          {note}
        </p>
      )}
    </div>
  );
}

export default function LegalPage({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  preamble,
  banner,
  children,
}: {
  title: string;
  subtitle?: string;
  effectiveDate: string;
  lastUpdated?: string;
  preamble?: string;
  banner?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f2eb" }}>
      <section className="pt-16 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-10">
              {preamble && (
                <p
                  className="italic leading-relaxed max-w-2xl mx-auto mb-8"
                  style={{ color: "#8a9584" }}
                >
                  {preamble}
                </p>
              )}
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-3"
                style={{ color: "#5d6b57" }}
              >
                Pulse Whole Health
              </p>
              <h1
                className="text-4xl font-bold mb-3"
                style={{ color: "#b8752f" }}
              >
                {title}
              </h1>
              {subtitle && (
                <p className="italic mb-3" style={{ color: "#5d6b57" }}>
                  {subtitle}
                </p>
              )}
              <p className="text-sm" style={{ color: "#8a9584" }}>
                Effective Date: {effectiveDate}
                {lastUpdated ? ` · Last Updated: ${lastUpdated}` : ""}
              </p>
            </header>

            {banner && (
              <div
                className="rounded-xl p-5 mb-10 text-center text-sm font-semibold leading-relaxed"
                style={{
                  backgroundColor: "rgba(184, 117, 47, 0.08)",
                  color: "#5d6b57",
                }}
              >
                {banner}
              </div>
            )}

            <article className="bg-white rounded-xl p-6 sm:p-10 border border-cream">
              {children}
            </article>

            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#a05a36" }}
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
