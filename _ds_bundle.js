/* @ds-bundle: {"format":4,"namespace":"ServiceNowDocumentsDesignSystem_d7be20","components":[{"name":"DocFooter","sourcePath":"components/chrome/DocFooter.jsx"},{"name":"FeedbackBar","sourcePath":"components/chrome/FeedbackBar.jsx"},{"name":"AccentPanel","sourcePath":"components/document/AccentPanel.jsx"},{"name":"Callout","sourcePath":"components/document/Callout.jsx"},{"name":"DocCard","sourcePath":"components/document/DocCard.jsx"},{"name":"DocHeader","sourcePath":"components/document/DocHeader.jsx"},{"name":"InlineCode","sourcePath":"components/document/InlineCode.jsx"},{"name":"QuoteBanner","sourcePath":"components/document/QuoteBanner.jsx"},{"name":"SectionHeading","sourcePath":"components/document/SectionHeading.jsx"},{"name":"StepCard","sourcePath":"components/document/StepCard.jsx"},{"name":"TermList","sourcePath":"components/document/TermList.jsx"},{"name":"DocsArticle","sourcePath":"ui_kits/docs-article/DocsArticle.jsx"}],"sourceHashes":{"components/chrome/DocFooter.jsx":"41413e5122bb","components/chrome/FeedbackBar.jsx":"e5c6488e2052","components/document/AccentPanel.jsx":"0963d50b4e6a","components/document/Callout.jsx":"1b8699aa556c","components/document/DocCard.jsx":"72a3a066e09f","components/document/DocHeader.jsx":"74fcff583187","components/document/InlineCode.jsx":"4476f1595fc0","components/document/QuoteBanner.jsx":"0ba5f8f1b4db","components/document/SectionHeading.jsx":"c0dbaa1193c1","components/document/StepCard.jsx":"00f48f50463e","components/document/TermList.jsx":"22a4a3f0e4b6","ui_kits/docs-article/DocsArticle.jsx":"308349aec9f7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ServiceNowDocumentsDesignSystem_d7be20 = window.ServiceNowDocumentsDesignSystem_d7be20 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chrome/DocFooter.jsx
try { (() => {
const defaultLinks = [];
function DocFooter({
  tagline = "Transforming digital workflows across the enterprise.",
  links = defaultLinks,
  wordmark = "[brand]",
  company = "[Company]",
  disclaimer
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: "var(--font-core)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      borderTop: "var(--border-width-hairline) solid var(--border-rule)",
      marginTop: "var(--space-8)",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) 20px/1 var(--font-core)",
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, wordmark), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      alignSelf: "stretch",
      background: "var(--border-rule)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) var(--size-h4)/1.2 var(--font-core)",
      color: "var(--text-strong)"
    }
  }, tagline)), links.length ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      padding: "var(--space-5) 0 0"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--weight-semibold) var(--size-small)/1 var(--font-core)",
      color: "var(--text-strong)",
      textDecoration: "underline",
      textUnderlineOffset: "3px"
    }
  }, l))) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-regular) var(--size-caption)/1.6 var(--font-core)",
      color: "var(--text-muted)",
      margin: "var(--space-5) 0 0"
    }
  }, "\xA9 ", new Date().getFullYear(), " ", company, ". All rights reserved."), disclaimer ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-regular) 12px/1.6 var(--font-core)",
      color: "var(--text-muted)",
      margin: "var(--space-2) 0 var(--space-8)",
      maxWidth: "760px"
    }
  }, disclaimer) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--space-8)"
    }
  }));
}
Object.assign(__ds_scope, { DocFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/DocFooter.jsx", error: String((e && e.message) || e) }); }

// components/chrome/FeedbackBar.jsx
try { (() => {
function Btn({
  glyph,
  children,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "var(--weight-semibold) var(--size-small)/1 var(--font-core)",
      color: active ? "var(--td-white)" : "var(--text-strong)",
      background: active ? "var(--td-teal-700)" : "var(--surface-card)",
      border: "var(--border-width-hairline) solid " + (active ? "var(--td-teal-700)" : "var(--td-ink-400)"),
      borderRadius: "var(--radius-sm)",
      padding: "8px 14px",
      cursor: "pointer",
      transition: "background var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, glyph), children);
}
function FeedbackBar({
  question = "Was this content helpful?",
  stat = "50% found this useful",
  value = null,
  onVote = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      borderTop: "var(--border-width-hairline) solid var(--border-rule)",
      borderBottom: "var(--border-width-hairline) solid var(--border-rule)",
      padding: "var(--space-6) 0",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-small)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement(Btn, {
    glyph: "\uD83D\uDC4D",
    active: value === "yes",
    onClick: () => onVote("yes")
  }, "Yes"), /*#__PURE__*/React.createElement(Btn, {
    glyph: "\uD83D\uDC4E",
    active: value === "no",
    onClick: () => onVote("no")
  }, "No"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      marginLeft: "var(--space-2)"
    }
  }, stat));
}
Object.assign(__ds_scope, { FeedbackBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/FeedbackBar.jsx", error: String((e && e.message) || e) }); }

// components/document/AccentPanel.jsx
try { (() => {
const variants = {
  note: {
    background: "var(--surface-note)",
    accent: "var(--accent-note)"
  },
  info: {
    background: "var(--surface-info)",
    accent: "var(--accent-info)"
  },
  pass: {
    background: "var(--surface-pass)",
    accent: "var(--accent-pass)"
  },
  fail: {
    background: "var(--surface-fail)",
    accent: "var(--accent-fail)"
  }
};
function AccentPanel({
  variant = "note",
  accent,
  background,
  label,
  children,
  style
}) {
  const v = variants[variant] || variants.note;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: background || v.background,
      borderLeft: "var(--border-width-accent) solid " + (accent || v.accent),
      padding: "var(--doc-pad-panel)",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      marginBottom: "var(--space-2)"
    }
  }, label) : null, children);
}
Object.assign(__ds_scope, { AccentPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/AccentPanel.jsx", error: String((e && e.message) || e) }); }

// components/document/Callout.jsx
try { (() => {
const variants = {
  caution: {
    icon: "\u26A0\uFE0F",
    background: "var(--surface-caution)",
    border: "var(--border-caution)",
    label: "Important"
  },
  note: {
    icon: "\u2139\uFE0F",
    background: "var(--surface-note)",
    border: "var(--border-card)",
    label: "Note"
  }
};
function Callout({
  variant = "caution",
  label,
  children,
  style
}) {
  const v = variants[variant] || variants.caution;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: v.background,
      border: "var(--border-width-hairline) solid " + v.border,
      borderRadius: "var(--radius-md)",
      padding: "var(--doc-pad-panel)",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: "var(--space-2)"
    }
  }, v.icon), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)"
    }
  }, (label || v.label) + ":"), " ", children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Callout.jsx", error: String((e && e.message) || e) }); }

// components/document/DocHeader.jsx
try { (() => {
function DocHeader({
  title,
  meta = [],
  standfirst,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      margin: "0 0 var(--space-8)",
      ...style
    }
  }, meta.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      font: "var(--weight-semibold) var(--size-caption)/1.4 var(--font-core)",
      color: "var(--text-muted)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      marginBottom: "var(--space-4)"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--td-ink-200)"
    }
  }, "/") : null, /*#__PURE__*/React.createElement("span", null, m)))) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--size-h1)/1.2 var(--font-core)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title), standfirst ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-regular) 20px/1.7 var(--font-core)",
      color: "var(--text-body)",
      margin: "var(--space-5) 0 0",
      paddingTop: "var(--space-5)",
      borderTop: "var(--border-width-hairline) solid var(--border-rule)",
      maxWidth: "900px"
    }
  }, standfirst) : null);
}
Object.assign(__ds_scope, { DocHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DocHeader.jsx", error: String((e && e.message) || e) }); }

// components/document/InlineCode.jsx
try { (() => {
function InlineCode({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-code)",
      color: "var(--text-code)",
      background: "var(--surface-code)",
      padding: "1px 5px",
      borderRadius: "var(--radius-sm)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { InlineCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/InlineCode.jsx", error: String((e && e.message) || e) }); }

// components/document/QuoteBanner.jsx
try { (() => {
function QuoteBanner({
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-quote)",
      border: "var(--border-width-hairline) solid var(--border-card)",
      borderRadius: "var(--radius-sm)",
      padding: "var(--doc-pad-card)",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      fontStyle: "italic",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      marginBottom: "var(--space-3)"
    }
  }, label) : null, children);
}
Object.assign(__ds_scope, { QuoteBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/QuoteBanner.jsx", error: String((e && e.message) || e) }); }

// components/document/SectionHeading.jsx
try { (() => {
const sizes = {
  h1: "var(--size-h1)",
  h2: "var(--size-h2)",
  h3: "var(--size-h3)"
};
function SectionHeading({
  level = 2,
  children,
  id,
  style
}) {
  const Tag = "h" + level;
  return /*#__PURE__*/React.createElement(Tag, {
    id: id,
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-light)",
      fontSize: sizes["h" + level] || "var(--size-h2)",
      lineHeight: "var(--leading-heading)",
      color: "var(--text-heading)",
      margin: level === 2 ? "var(--doc-gap-section) 0 var(--space-5)" : "0 0 var(--space-3)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/document/DocCard.jsx
try { (() => {
function DocCard({
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      border: "var(--border-width-hairline) solid var(--border-card)",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-card)",
      padding: "var(--doc-pad-card)",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 3
  }, title) : null, children);
}
Object.assign(__ds_scope, { DocCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DocCard.jsx", error: String((e && e.message) || e) }); }

// components/document/StepCard.jsx
try { (() => {
function StepCard({
  number,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    style: style
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 3
  }, number != null ? number + ". " : "", title), children);
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/document/TermList.jsx
try { (() => {
function TermList({
  items = [],
  ordered = false,
  style
}) {
  const Tag = ordered ? "ol" : "ul";
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: "0 0 var(--space-4)",
      paddingLeft: "var(--doc-list-indent)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      ...style
    }
  }, items.map((it, i) => {
    const item = typeof it === "string" || React.isValidElement(it) ? {
      text: it
    } : it;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        marginBottom: "var(--space-1)"
      }
    }, item.term ? /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: "var(--weight-bold)",
        color: "var(--text-strong)"
      }
    }, item.term, ": ") : null, item.text);
  }));
}
Object.assign(__ds_scope, { TermList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/TermList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-article/DocsArticle.jsx
try { (() => {
function DocsArticle() {
  const [vote, setVote] = React.useState(null);
  return /*#__PURE__*/React.createElement("article", {
    className: "td-doc",
    style: {
      maxWidth: "var(--doc-measure)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-7) 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DocHeader, {
    meta: ["Product area", "Release name", "Updated month year"],
    title: "Feature name and what it does",
    standfirst: "One or two sentences that say plainly what the capability does and why the reader is here. It carries considerations the reader should review before enabling it."
  }), /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 2
  }, "What You Need to Know"), /*#__PURE__*/React.createElement(__ds_scope.DocCard, null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 3
  }, "First concept"), /*#__PURE__*/React.createElement("p", null, "Explain the behaviour in full sentences. State what the system does when the setting is enabled, and where the processing happens, without commentary."), /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 3
  }, "Second concept"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Name the condition, then the consequence. Parenthetical examples are fine (e.g., a regional compliance requirement, or any restriction on where processing may occur).")), /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 2
  }, "Notification"), /*#__PURE__*/React.createElement("p", null, "Starting with the named release, an informational banner appears when one or more items use this capability:"), /*#__PURE__*/React.createElement(__ds_scope.QuoteBanner, {
    label: "Banner Message:"
  }, "\"Quote product copy exactly as the reader will see it in the interface, including any inline", " ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "documentation link"), " and the bracketed action text at the end. [View affected items]\""), /*#__PURE__*/React.createElement(__ds_scope.AccentPanel, {
    label: "Banner Actions:"
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: [{
      term: "View affected items",
      text: "Click to see which items use the capability"
    }, {
      term: "Show less",
      text: "Collapse the banner (it will reappear in future sessions)"
    }]
  })), /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 2
  }, "Action Required"), /*#__PURE__*/React.createElement("p", null, "Before enabling or continuing to use this capability, you must:"), /*#__PURE__*/React.createElement(__ds_scope.StepCard, {
    number: 1,
    title: "Review Your Policies"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Action:"), " Confirm that the configuration aligns with your organization's governance and compliance standards."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Key Questions:")), /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: ["Does your organization have requirements about where data is processed?", "Are there regulatory requirements that mandate data stay within specific boundaries?", "Does your privacy policy allow for processing outside your chosen location?"]
  })), /*#__PURE__*/React.createElement(__ds_scope.StepCard, {
    number: 2,
    title: "Understand What Is Sent"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Sent to the service:")), /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    items: ["The request generated by the feature", "Context needed to complete the request"]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Not sent to the service:")), /*#__PURE__*/React.createElement(__ds_scope.AccentPanel, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: ["Your records", "User credentials and authentication data", "Internal knowledge content", "Execution logs and history"]
  }))), /*#__PURE__*/React.createElement(__ds_scope.AccentPanel, {
    variant: "info",
    label: "How the data is protected:"
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: [{
      term: "Encryption",
      text: "TLS 1.2 in transit"
    }, {
      term: "Masking",
      text: "If configured, sensitive data is masked before leaving your environment"
    }, {
      term: "Content filtering",
      text: "If configured, harmful content is detected and blocked"
    }, {
      term: "Access Controls",
      text: "Permissions determine who can trigger the capability"
    }]
  })), /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 2
  }, "If This Conflicts with Your Policies"), /*#__PURE__*/React.createElement("p", null, "Alternative approaches:"), /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    title: "Option 1: Use an internal source"
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: ["Configure the feature against your own internal content", "Confirm that content is comprehensive and current", "Keep all processing inside your environment"]
  })), /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    title: "Option 2: Remove the capability from affected items"
  }, /*#__PURE__*/React.createElement(__ds_scope.AccentPanel, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    ordered: true,
    style: {
      marginBottom: 0
    },
    items: ["Navigate to the administration area", "Open the item you want to change", /*#__PURE__*/React.createElement(React.Fragment, null, "Review the ", /*#__PURE__*/React.createElement(__ds_scope.InlineCode, null, "Tools"), " section"), "Find the capability in the assigned list and remove it", "Save the configuration", "Test the item to confirm it functions correctly without the capability"]
  }))), /*#__PURE__*/React.createElement(__ds_scope.Callout, {
    variant: "caution"
  }, "If the workflow depends on this capability, you may need to reconfigure its logic or provide alternative data sources."), /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 2
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    title: "Why is processing handled this way?"
  }, /*#__PURE__*/React.createElement("p", null, "The capability relies on a third-party service offered under a global deployment model. This means:"), /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: ["Requests are routed across the provider's global infrastructure", "Processing location is optimized by the provider for performance and availability", "The service is not region-locked", "This is a characteristic of the provider's service design, not a configuration choice"]
  })), /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    title: "What does the provider do with the data?"
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    items: ["Your records and internal data are not sent (only the request and its context)", /*#__PURE__*/React.createElement(React.Fragment, null, "The provider does ", /*#__PURE__*/React.createElement("strong", null, "not"), " use this data to train models"), "Any retention window is solely for service operation and debugging"]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "For detailed information, review:")), /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: [/*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "The provider's privacy resource center"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Security controls documentation"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Data retention documentation"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Service-specific terms"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Data processing addendum")]
  })), /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    title: "Can this be used in a compliant way?"
  }, /*#__PURE__*/React.createElement("p", null, "It depends on your specific requirements:"), /*#__PURE__*/React.createElement(__ds_scope.AccentPanel, {
    variant: "pass",
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--td-green-700)",
        fontSize: "var(--size-h4)"
      }
    }, "\u2713 Potentially Compliant If:")
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: ["Your policies allow for global processing with appropriate safeguards", "You've completed a risk assessment or impact assessment", "You've documented the necessity and business justification"]
  })), /*#__PURE__*/React.createElement(__ds_scope.AccentPanel, {
    variant: "fail",
    style: {
      marginBottom: 0
    },
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--td-red-700)",
        fontSize: "var(--size-h4)"
      }
    }, "\u2717 Likely Not Compliant If:")
  }, /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: ["Regulation mandates that data stay within a specific geography", "Your agreements prohibit onward transfers"]
  }))), /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    title: "Will a regional option be offered?"
  }, /*#__PURE__*/React.createElement("p", null, "Watch for updates:"), /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    style: {
      marginBottom: 0
    },
    items: ["Review quarterly release notes", "Subscribe to product documentation updates", "Engage with your account contact", "Provide feedback about your requirements"]
  })), /*#__PURE__*/React.createElement(__ds_scope.DocCard, {
    title: "Can processing location be configured?"
  }, /*#__PURE__*/React.createElement("p", null, "No. The capability uses a global deployment, which means:"), /*#__PURE__*/React.createElement(__ds_scope.TermList, {
    items: ["Processing location cannot be restricted to a specific region or country", "The provider determines routing based on their global infrastructure", "This is a characteristic of the provider's service, not configurable here"]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "If this doesn't align with your policies:"), " Use the alternative approaches listed above.")), /*#__PURE__*/React.createElement(__ds_scope.FeedbackBar, {
    style: {
      marginTop: "var(--space-9)"
    },
    value: vote,
    onVote: setVote
  }), /*#__PURE__*/React.createElement(__ds_scope.DocFooter, {
    wordmark: "[brand]",
    company: "[Company]"
  }));
}
Object.assign(__ds_scope, { DocsArticle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-article/DocsArticle.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DocFooter = __ds_scope.DocFooter;

__ds_ns.FeedbackBar = __ds_scope.FeedbackBar;

__ds_ns.AccentPanel = __ds_scope.AccentPanel;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.DocCard = __ds_scope.DocCard;

__ds_ns.DocHeader = __ds_scope.DocHeader;

__ds_ns.InlineCode = __ds_scope.InlineCode;

__ds_ns.QuoteBanner = __ds_scope.QuoteBanner;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TermList = __ds_scope.TermList;

__ds_ns.DocsArticle = __ds_scope.DocsArticle;

})();
