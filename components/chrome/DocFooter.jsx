import React from "react";

const defaultLinks = [];

export function DocFooter({
  tagline = "Transforming digital workflows across the enterprise.",
  links = defaultLinks,
  wordmark = "[brand]",
  company = "[Company]",
  disclaimer,
  version,
  owner,
  reviewDate,
  classification,
  page,
  pages,
}) {
  const meta = [
    version != null && ["Version", version],
    owner != null && ["Owner", owner],
    reviewDate != null && ["Next review", reviewDate],
    classification != null && ["Classification", classification],
  ].filter(Boolean);
  return (
    <footer style={{ fontFamily: "var(--font-core)", color: "var(--text-body)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap", borderTop: "var(--border-width-hairline) solid var(--border-rule)", marginTop: "var(--space-8)", paddingTop: "var(--space-6)" }}>
        <span style={{ font: "var(--weight-bold) 20px/1 var(--font-core)", color: "var(--text-strong)", letterSpacing: "-0.01em" }}>{wordmark}</span>
        <span style={{ width: 1, alignSelf: "stretch", background: "var(--border-rule)" }} />
        <span style={{ font: "var(--weight-bold) var(--size-h4)/1.2 var(--font-core)", color: "var(--text-strong)" }}>{tagline}</span>
      </div>
      {links.length ? (
        <nav style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap", padding: "var(--space-5) 0 0" }}>
          {links.map((l) => (
            <a key={l} href="#" style={{ font: "var(--weight-semibold) var(--size-small)/1 var(--font-core)", color: "var(--text-strong)", textDecoration: "underline", textUnderlineOffset: "3px" }}>{l}</a>
          ))}
        </nav>
      ) : null}
      {meta.length || page != null ? (
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-2) var(--space-6)", borderTop: "var(--border-width-hairline) solid var(--border-rule)", margin: "var(--space-5) 0 0", padding: "var(--space-4) 0 0" }}>
          {meta.map(([k, v]) => (
            <span key={k} style={{ font: "var(--weight-regular) var(--size-caption)/1.4 var(--font-core)", color: "var(--text-muted)" }}>
              <span style={{ fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>{k} </span>
              <span style={{ color: "var(--text-strong)" }}>{v}</span>
            </span>
          ))}
          {page != null ? (
            <span style={{ marginLeft: "auto", font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)", color: "var(--text-strong)" }}>
              Page {page}{pages != null ? " of " + pages : ""}
            </span>
          ) : null}
        </div>
      ) : null}
      <p style={{ font: "var(--weight-regular) var(--size-caption)/1.6 var(--font-core)", color: "var(--text-muted)", margin: "var(--space-5) 0 0" }}>
        © {new Date().getFullYear()} {company}. All rights reserved.
      </p>
      {disclaimer ? (
        <p style={{ font: "var(--weight-regular) 12px/1.6 var(--font-core)", color: "var(--text-muted)", margin: "var(--space-2) 0 var(--space-8)", maxWidth: "760px" }}>
          {disclaimer}
        </p>
      ) : (
        <div style={{ height: "var(--space-8)" }} />
      )}
    </footer>
  );
}
