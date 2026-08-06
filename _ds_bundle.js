/* @ds-bundle: {"format":4,"namespace":"ServiceNowDocumentsDesignSystem_d7be20","components":[{"name":"DocFooter","sourcePath":"components/chrome/DocFooter.jsx"},{"name":"FeedbackBar","sourcePath":"components/chrome/FeedbackBar.jsx"},{"name":"DecisionTree","sourcePath":"components/diagrams/DecisionTree.jsx"},{"name":"LayerStack","sourcePath":"components/diagrams/LayerStack.jsx"},{"name":"LifecycleCircle","sourcePath":"components/diagrams/LifecycleCircle.jsx"},{"name":"RelationshipMap","sourcePath":"components/diagrams/RelationshipMap.jsx"},{"name":"Swimlane","sourcePath":"components/diagrams/Swimlane.jsx"},{"name":"Timeline","sourcePath":"components/diagrams/Timeline.jsx"},{"name":"AccentPanel","sourcePath":"components/document/AccentPanel.jsx"},{"name":"AtAGlance","sourcePath":"components/document/AtAGlance.jsx"},{"name":"BeforeAfter","sourcePath":"components/document/BeforeAfter.jsx"},{"name":"Callout","sourcePath":"components/document/Callout.jsx"},{"name":"ChapterTransition","sourcePath":"components/document/ChapterTransition.jsx"},{"name":"ComparisonCards","sourcePath":"components/document/ComparisonCards.jsx"},{"name":"DocCard","sourcePath":"components/document/DocCard.jsx"},{"name":"DocHeader","sourcePath":"components/document/DocHeader.jsx"},{"name":"Figure","sourcePath":"components/document/Figure.jsx"},{"name":"InlineCode","sourcePath":"components/document/InlineCode.jsx"},{"name":"KeyTakeaway","sourcePath":"components/document/KeyTakeaway.jsx"},{"name":"PriorityTag","sourcePath":"components/document/PriorityTag.jsx"},{"name":"QuoteBanner","sourcePath":"components/document/QuoteBanner.jsx"},{"name":"SectionHeading","sourcePath":"components/document/SectionHeading.jsx"},{"name":"StepCard","sourcePath":"components/document/StepCard.jsx"},{"name":"TermList","sourcePath":"components/document/TermList.jsx"},{"name":"DocsArticle","sourcePath":"ui_kits/docs-article/DocsArticle.jsx"}],"sourceHashes":{"components/chrome/DocFooter.jsx":"cc2f292d3b3a","components/chrome/FeedbackBar.jsx":"e5c6488e2052","components/diagrams/DecisionTree.jsx":"742eadf9f7c2","components/diagrams/LayerStack.jsx":"192da66592f2","components/diagrams/LifecycleCircle.jsx":"2f5b103a1e7e","components/diagrams/RelationshipMap.jsx":"e0f4dad5292a","components/diagrams/Swimlane.jsx":"299c67d909ed","components/diagrams/Timeline.jsx":"e8ecf62d914a","components/document/AccentPanel.jsx":"0963d50b4e6a","components/document/AtAGlance.jsx":"bc6f33247ffb","components/document/BeforeAfter.jsx":"fb4e85e0ccd5","components/document/Callout.jsx":"ac7262a179a5","components/document/ChapterTransition.jsx":"0642ff279cfc","components/document/ComparisonCards.jsx":"b52f9699d3b2","components/document/DocCard.jsx":"72a3a066e09f","components/document/DocHeader.jsx":"74fcff583187","components/document/Figure.jsx":"68c21d1f64f4","components/document/InlineCode.jsx":"4476f1595fc0","components/document/KeyTakeaway.jsx":"3cf06ef59e1f","components/document/PriorityTag.jsx":"b995e2de3061","components/document/QuoteBanner.jsx":"0ba5f8f1b4db","components/document/SectionHeading.jsx":"c0dbaa1193c1","components/document/StepCard.jsx":"00f48f50463e","components/document/TermList.jsx":"22a4a3f0e4b6","ui_kits/docs-article/DocsArticle.jsx":"308349aec9f7"},"inlinedExternals":[],"unexposedExports":[{"name":"priorityLevels","sourcePath":"components/document/PriorityTag.jsx"}]} */

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
  disclaimer,
  version,
  owner,
  reviewDate,
  classification,
  page,
  pages
}) {
  const meta = [version != null && ["Version", version], owner != null && ["Owner", owner], reviewDate != null && ["Next review", reviewDate], classification != null && ["Classification", classification]].filter(Boolean);
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
  }, l))) : null, meta.length || page != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
      gap: "var(--space-2) var(--space-6)",
      borderTop: "var(--border-width-hairline) solid var(--border-rule)",
      margin: "var(--space-5) 0 0",
      padding: "var(--space-4) 0 0"
    }
  }, meta.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      font: "var(--weight-regular) var(--size-caption)/1.4 var(--font-core)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase"
    }
  }, k, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)"
    }
  }, v))), page != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)",
      color: "var(--text-strong)"
    }
  }, "Page ", page, pages != null ? " of " + pages : "") : null) : null, /*#__PURE__*/React.createElement("p", {
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

// components/diagrams/DecisionTree.jsx
try { (() => {
const tones = {
  neutral: {
    accent: "var(--border-card)",
    background: "var(--surface-card)"
  },
  pass: {
    accent: "var(--accent-pass)",
    background: "var(--surface-pass)"
  },
  fail: {
    accent: "var(--accent-fail)",
    background: "var(--surface-fail)"
  },
  caution: {
    accent: "var(--border-caution)",
    background: "var(--surface-caution)"
  }
};
function DecisionTree({
  question,
  branches = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      margin: "0 auto",
      background: "var(--surface-note)",
      border: "var(--border-width-hairline) solid var(--border-card)",
      padding: "var(--space-5) var(--space-6)",
      textAlign: "center",
      font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)",
      color: "var(--text-strong)"
    }
  }, question), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      height: "var(--space-5)",
      background: "var(--td-teal-100)",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + Math.max(branches.length, 1) + ", minmax(0, 1fr))",
      gap: "var(--space-5)"
    }
  }, branches.map((b, i) => {
    const t = tones[b.tone] || tones.neutral;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: i === 0 ? "transparent" : "var(--td-teal-100)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        height: 2,
        background: "var(--td-teal-100)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: i === branches.length - 1 ? "transparent" : "var(--td-teal-100)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        height: "var(--space-4)",
        background: "var(--td-teal-100)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        padding: "3px 12px",
        borderRadius: "var(--radius-pill)",
        background: "var(--surface-reference)",
        font: "var(--weight-bold) 12px/1.5 var(--font-core)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--text-strong)"
      }
    }, b.answer), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        height: "var(--space-4)",
        background: "var(--td-teal-100)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        background: t.background,
        borderTop: "var(--border-width-accent) solid " + t.accent,
        border: "var(--border-width-hairline) solid var(--border-rule)",
        borderTopWidth: "var(--border-width-accent)",
        borderTopColor: t.accent,
        padding: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-bold) var(--size-small)/var(--leading-tight) var(--font-core)",
        color: "var(--text-strong)"
      }
    }, b.result), b.text ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-regular) var(--size-caption)/1.6 var(--font-core)",
        color: "var(--text-body)",
        marginTop: "var(--space-2)"
      }
    }, b.text) : null));
  })));
}
Object.assign(__ds_scope, { DecisionTree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/DecisionTree.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/LayerStack.jsx
try { (() => {
function LayerStack({
  layers = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, layers.map((layer, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "190px 1fr",
      gap: "var(--space-5)",
      alignItems: "center",
      background: i % 2 ? "var(--surface-card)" : "var(--surface-note)",
      border: "var(--border-width-hairline) solid var(--border-rule)",
      borderLeft: "var(--border-width-accent) solid " + (layer.accent || "var(--accent-note)"),
      padding: "var(--space-5) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-bold) var(--size-small)/var(--leading-tight) var(--font-core)",
      color: "var(--text-strong)"
    }
  }, layer.name), layer.note ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)",
      color: "var(--text-muted)",
      marginTop: "var(--space-1)"
    }
  }, layer.note) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, (layer.items || []).map((it, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: "var(--surface-page)",
      border: "var(--border-width-hairline) solid var(--border-rule)",
      borderRadius: "var(--radius-sm)",
      padding: "6px 12px",
      font: "var(--weight-semibold) var(--size-caption)/1.4 var(--font-core)",
      color: "var(--text-body)"
    }
  }, it))))));
}
Object.assign(__ds_scope, { LayerStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/LayerStack.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/LifecycleCircle.jsx
try { (() => {
function LifecycleCircle({
  stages = [],
  center,
  size = 420,
  style
}) {
  const n = Math.max(stages.length, 1);
  const radius = size / 2 - 58;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      margin: "0 auto var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 58,
      borderRadius: "50%",
      border: "2px dashed var(--td-teal-100)"
    }
  }), center ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: size * 0.34,
      height: size * 0.34,
      borderRadius: "50%",
      background: "var(--surface-note)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "var(--space-4)",
      boxSizing: "border-box",
      font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)",
      color: "var(--text-heading)"
    }
  }, center) : null, stages.map((s, i) => {
    const a = (-90 + i * 360 / n) * (Math.PI / 180);
    const label = typeof s === "string" ? s : s.title;
    const text = typeof s === "string" ? null : s.text;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "absolute",
        left: "calc(50% + " + (Math.cos(a) * radius).toFixed(1) + "px)",
        top: "calc(50% + " + (Math.sin(a) * radius).toFixed(1) + "px)",
        transform: "translate(-50%, -50%)",
        width: 132,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        margin: "0 auto var(--space-2)",
        borderRadius: "50%",
        background: "var(--border-card)",
        color: "var(--td-white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: "var(--weight-bold) var(--size-caption)/1 var(--font-core)"
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-bold) var(--size-small)/var(--leading-tight) var(--font-core)",
        color: "var(--text-strong)"
      }
    }, label), text ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)",
        color: "var(--text-muted)",
        marginTop: "var(--space-1)"
      }
    }, text) : null);
  }));
}
Object.assign(__ds_scope, { LifecycleCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/LifecycleCircle.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/RelationshipMap.jsx
try { (() => {
function RelationshipMap({
  center,
  nodes = [],
  size = 460,
  style
}) {
  const n = Math.max(nodes.length, 1);
  const radius = size / 2 - 70;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      margin: "0 auto var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, nodes.map((_, i) => {
    const deg = -90 + i * 360 / n;
    return /*#__PURE__*/React.createElement("div", {
      key: "l" + i,
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: radius,
        height: 1,
        background: "var(--td-teal-100)",
        transformOrigin: "0 50%",
        transform: "rotate(" + deg + "deg)"
      }
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      background: "var(--border-card)",
      color: "var(--td-white)",
      padding: "var(--space-4) var(--space-5)",
      textAlign: "center",
      maxWidth: size * 0.4,
      font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)"
    }
  }, center), nodes.map((node, i) => {
    const a = (-90 + i * 360 / n) * (Math.PI / 180);
    const label = typeof node === "string" ? node : node.title;
    const text = typeof node === "string" ? null : node.text;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "absolute",
        left: "calc(50% + " + (Math.cos(a) * radius).toFixed(1) + "px)",
        top: "calc(50% + " + (Math.sin(a) * radius).toFixed(1) + "px)",
        transform: "translate(-50%, -50%)",
        width: 150,
        background: "var(--surface-card)",
        border: "var(--border-width-hairline) solid var(--border-rule)",
        borderTop: "var(--border-width-accent) solid var(--accent-note)",
        padding: "var(--space-4)",
        textAlign: "center",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-semibold) var(--size-small)/var(--leading-tight) var(--font-core)",
        color: "var(--text-strong)"
      }
    }, label), text ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)",
        color: "var(--text-muted)",
        marginTop: "var(--space-1)"
      }
    }, text) : null);
  }));
}
Object.assign(__ds_scope, { RelationshipMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/RelationshipMap.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/Swimlane.jsx
try { (() => {
function Swimlane({
  lanes = [],
  laneWidth = 170,
  style
}) {
  const cols = Math.max(...lanes.map(l => (l.steps || []).length), 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-width-hairline) solid var(--border-rule)",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, lanes.map((lane, li) => /*#__PURE__*/React.createElement("div", {
    key: li,
    style: {
      display: "grid",
      gridTemplateColumns: laneWidth + "px 1fr",
      borderTop: li ? "var(--border-width-hairline) solid var(--border-rule)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: li % 2 ? "var(--surface-note)" : "var(--surface-reference)",
      borderRight: "var(--border-width-hairline) solid var(--border-rule)",
      padding: "var(--space-5)",
      display: "flex",
      alignItems: "center",
      font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, lane.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))",
      gap: "var(--space-4)",
      padding: "var(--space-5)",
      alignItems: "stretch"
    }
  }, Array.from({
    length: cols
  }).map((_, ci) => {
    const step = (lane.steps || [])[ci];
    if (!step) return /*#__PURE__*/React.createElement("div", {
      key: ci
    });
    return /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        background: "var(--surface-card)",
        border: "var(--border-width-hairline) solid var(--border-rule)",
        borderLeft: "var(--border-width-accent) solid " + (step.accent || "var(--accent-note)"),
        padding: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-semibold) var(--size-small)/var(--leading-tight) var(--font-core)",
        color: "var(--text-strong)"
      }
    }, step.title), step.text ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)",
        color: "var(--text-muted)",
        marginTop: "var(--space-1)"
      }
    }, step.text) : null);
  })))));
}
Object.assign(__ds_scope, { Swimlane });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Swimlane.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/Timeline.jsx
try { (() => {
const dot = {
  width: 13,
  height: 13,
  borderRadius: "50%",
  background: "var(--border-card)",
  border: "3px solid var(--surface-page)",
  boxSizing: "content-box",
  flex: "none"
};
const meta = {
  font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)",
  letterSpacing: "var(--tracking-caps)",
  textTransform: "uppercase",
  color: "var(--text-muted)"
};
const title = {
  font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)",
  color: "var(--text-strong)",
  margin: "var(--space-1) 0 var(--space-2)"
};
const body = {
  font: "var(--weight-regular) var(--size-small)/var(--leading-tight) var(--font-core)",
  color: "var(--text-body)"
};
function Timeline({
  items = [],
  orientation = "vertical",
  style
}) {
  if (orientation === "horizontal") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(" + Math.max(items.length, 1) + ", minmax(0, 1fr))",
        gap: "var(--space-5)",
        margin: "0 0 var(--doc-gap-block)",
        fontFamily: "var(--font-core)",
        ...style
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative",
        paddingTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 6,
        left: 0,
        right: i === items.length - 1 ? "50%" : "-20px",
        height: 2,
        background: "var(--td-teal-100)"
      }
    }), i === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 6,
        left: 0,
        width: "50%",
        height: 2,
        background: "var(--surface-page)"
      }
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...dot,
        position: "absolute",
        top: 0,
        left: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: meta
    }, it.label), /*#__PURE__*/React.createElement("div", {
      style: title
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: body
    }, it.text))));
  }
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: "0 0 var(--doc-gap-block)",
      padding: 0,
      fontFamily: "var(--font-core)",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "19px 1fr",
      gap: "var(--space-5)",
      position: "relative",
      paddingBottom: i === items.length - 1 ? 0 : "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: dot
  }), i === items.length - 1 ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 19,
      bottom: "calc(-1 * var(--space-7))",
      left: 8,
      width: 2,
      background: "var(--td-teal-100)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: meta
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: title
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: body
  }, it.text)))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Timeline.jsx", error: String((e && e.message) || e) }); }

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

// components/document/AtAGlance.jsx
try { (() => {
const labelStyle = {
  font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)",
  letterSpacing: "var(--tracking-caps)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  paddingTop: "3px"
};
function Row({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "210px 1fr",
      gap: "var(--space-5)",
      padding: "var(--space-4) 0",
      borderTop: "var(--border-width-hairline) solid var(--border-rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-regular) var(--size-body)/var(--leading-tight) var(--font-core)",
      color: "var(--text-body)"
    }
  }, children));
}
function List({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: "var(--doc-list-indent)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      margin: "0 0 var(--space-1)"
    }
  }, it)));
}
function AtAGlance({
  title = "At a Glance",
  purpose,
  audience,
  readingTime,
  prerequisites = [],
  takeaways = [],
  style
}) {
  const prereq = Array.isArray(prerequisites) ? prerequisites : [prerequisites];
  const keys = Array.isArray(takeaways) ? takeaways : [takeaways];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-note)",
      borderTop: "3px solid var(--border-card)",
      padding: "var(--space-7) var(--space-8) var(--space-7)",
      margin: "0 0 var(--doc-gap-section)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--weight-light) var(--size-h3)/var(--leading-heading) var(--font-core)",
      color: "var(--text-heading)",
      margin: "0 0 var(--space-5)"
    }
  }, title), purpose ? /*#__PURE__*/React.createElement(Row, {
    label: "Purpose"
  }, purpose) : null, audience ? /*#__PURE__*/React.createElement(Row, {
    label: "Who should read this"
  }, audience) : null, readingTime ? /*#__PURE__*/React.createElement(Row, {
    label: "Estimated reading time"
  }, readingTime) : null, prereq.filter(Boolean).length ? /*#__PURE__*/React.createElement(Row, {
    label: "Prerequisites"
  }, prereq.length > 1 ? /*#__PURE__*/React.createElement(List, {
    items: prereq
  }) : prereq[0]) : null, keys.filter(Boolean).length ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderLeft: "var(--border-width-accent) solid var(--accent-note)",
      padding: "var(--doc-pad-panel)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...labelStyle,
      paddingTop: 0,
      marginBottom: "var(--space-3)"
    }
  }, "Key takeaways"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: "var(--doc-list-indent)",
      font: "var(--weight-regular) var(--size-body)/var(--leading-tight) var(--font-core)",
      color: "var(--text-body)"
    }
  }, keys.filter(Boolean).map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      margin: "0 0 var(--space-2)"
    }
  }, t)))) : null);
}
Object.assign(__ds_scope, { AtAGlance });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/AtAGlance.jsx", error: String((e && e.message) || e) }); }

// components/document/BeforeAfter.jsx
try { (() => {
function Panel({
  label,
  title,
  points = [],
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: tone === "after" ? "var(--surface-note)" : "var(--surface-reference)",
      borderTop: "var(--border-width-accent) solid " + (tone === "after" ? "var(--accent-note)" : "var(--td-ink-400)"),
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-2)"
    }
  }, label), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)",
      color: "var(--text-strong)",
      marginBottom: "var(--space-3)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: "var(--doc-list-indent)",
      font: "var(--weight-regular) var(--size-small)/var(--leading-tight) var(--font-core)",
      color: "var(--text-body)"
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      margin: "0 0 var(--space-2)"
    }
  }, p))));
}
function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  before = {},
  after = {},
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 44px 1fr",
      alignItems: "stretch",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    label: beforeLabel,
    title: before.title,
    points: before.points || [],
    tone: "before"
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--weight-light) 26px/1 var(--font-core)",
      color: "var(--border-card)"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement(Panel, {
    label: afterLabel,
    title: after.title,
    points: after.points || [],
    tone: "after"
  }));
}
Object.assign(__ds_scope, { BeforeAfter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/BeforeAfter.jsx", error: String((e && e.message) || e) }); }

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
  },
  critical: {
    icon: "\u26D4",
    background: "var(--surface-critical)",
    border: "var(--priority-critical)",
    label: "Critical",
    accent: true
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
      borderLeft: (v.accent ? "var(--border-width-accent)" : "var(--border-width-hairline)") + " solid " + v.border,
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
      color: v.accent ? "var(--priority-critical)" : "var(--text-strong)",
      letterSpacing: v.accent ? "var(--tracking-caps)" : undefined,
      textTransform: v.accent ? "uppercase" : undefined
    }
  }, (label || v.label) + ":"), " ", children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Callout.jsx", error: String((e && e.message) || e) }); }

// components/document/ChapterTransition.jsx
try { (() => {
function ChapterTransition({
  label = "Next",
  next,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--doc-gap-transition) 0",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: "var(--border-width-hairline) solid var(--border-rule)",
      margin: "0 0 var(--space-5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) var(--size-caption)/1.4 var(--font-core)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-body)/var(--leading-tight) var(--font-core)",
      color: "var(--text-muted)"
    }
  }, children || (next ? /*#__PURE__*/React.createElement(React.Fragment, null, "We will discuss ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, next), ".") : null))));
}
Object.assign(__ds_scope, { ChapterTransition });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ChapterTransition.jsx", error: String((e && e.message) || e) }); }

// components/document/ComparisonCards.jsx
try { (() => {
const tones = {
  neutral: {
    accent: "var(--border-card)",
    background: "var(--surface-card)"
  },
  note: {
    accent: "var(--accent-note)",
    background: "var(--surface-note)"
  },
  info: {
    accent: "var(--accent-info)",
    background: "var(--surface-info)"
  },
  pass: {
    accent: "var(--accent-pass)",
    background: "var(--surface-pass)"
  },
  fail: {
    accent: "var(--accent-fail)",
    background: "var(--surface-fail)"
  }
};
function ComparisonCards({
  items = [],
  columns,
  style
}) {
  const cols = columns || Math.max(items.length, 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))",
      gap: "var(--space-5)",
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, items.map((it, i) => {
    const t = tones[it.tone] || tones.neutral;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: t.background,
        border: "var(--border-width-hairline) solid var(--border-rule)",
        borderTop: "var(--border-width-accent) solid " + t.accent,
        padding: "var(--space-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-bold) var(--size-h4)/var(--leading-tight) var(--font-core)",
        color: "var(--text-strong)"
      }
    }, it.title), it.subtitle ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--weight-regular) var(--size-caption)/1.5 var(--font-core)",
        color: "var(--text-muted)"
      }
    }, it.subtitle) : null, it.points && it.points.length ? /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: "var(--doc-list-indent)",
        font: "var(--weight-regular) var(--size-small)/var(--leading-tight) var(--font-core)",
        color: "var(--text-body)"
      }
    }, it.points.map((p, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        margin: "0 0 var(--space-2)"
      }
    }, p))) : null, it.footnote ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: "var(--space-3)",
        borderTop: "var(--border-width-hairline) solid var(--border-rule)",
        font: "var(--weight-semibold) var(--size-caption)/1.5 var(--font-core)",
        color: t.accent
      }
    }, it.footnote) : null);
  }));
}
Object.assign(__ds_scope, { ComparisonCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ComparisonCards.jsx", error: String((e && e.message) || e) }); }

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

// components/document/Figure.jsx
try { (() => {
function Figure({
  number,
  title,
  caption,
  source,
  framed = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "0 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: framed ? {
      border: "var(--border-width-hairline) solid var(--border-rule)",
      background: "var(--surface-card)",
      padding: "var(--space-7)"
    } : undefined
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) var(--size-small)/1.4 var(--font-core)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase"
    }
  }, number != null ? "Figure " + number : "Figure"), title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--size-small)/1.4 var(--font-core)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-rule)",
      padding: "0 var(--space-3)"
    }
  }, "|"), title) : null, caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-regular) var(--size-caption)/1.6 var(--font-core)",
      color: "var(--text-muted)",
      margin: "var(--space-2) 0 0",
      maxWidth: "760px"
    }
  }, caption) : null, source ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-regular) 12px/1.6 var(--font-core)",
      color: "var(--text-muted)",
      margin: "var(--space-1) 0 0"
    }
  }, "Source: ", source) : null));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Figure.jsx", error: String((e && e.message) || e) }); }

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

// components/document/KeyTakeaway.jsx
try { (() => {
function KeyTakeaway({
  label = "Remember",
  glyph = "\u2713",
  items = [],
  children,
  style
}) {
  const list = Array.isArray(items) ? items.filter(Boolean) : [items];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--surface-note)",
      borderTop: "3px solid var(--border-card)",
      padding: "var(--space-6) var(--space-7)",
      margin: "var(--doc-gap-section) 0 var(--doc-gap-block)",
      fontFamily: "var(--font-core)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "var(--border-card)",
      color: "var(--td-white)",
      font: "var(--weight-bold) 13px/1 var(--font-core)"
    }
  }, glyph), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) var(--size-caption)/1 var(--font-core)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label)), list.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 0,
      listStyle: "none",
      display: "grid",
      gap: "var(--space-3)"
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      font: "var(--weight-semibold) var(--size-h4)/var(--leading-tight) var(--font-core)",
      color: "var(--text-strong)"
    }
  }, t))) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-regular) var(--size-body)/var(--leading-body) var(--font-core)",
      color: "var(--text-body)",
      marginTop: list.length ? "var(--space-4)" : 0
    }
  }, children) : null);
}
Object.assign(__ds_scope, { KeyTakeaway });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/KeyTakeaway.jsx", error: String((e && e.message) || e) }); }

// components/document/PriorityTag.jsx
try { (() => {
const priorityLevels = {
  critical: {
    label: "Critical",
    color: "var(--priority-critical)",
    background: "var(--surface-critical)"
  },
  required: {
    label: "Required",
    color: "var(--priority-required)",
    background: "var(--surface-required)"
  },
  optional: {
    label: "Optional",
    color: "var(--priority-optional)",
    background: "var(--surface-optional)"
  },
  reference: {
    label: "Reference",
    color: "var(--priority-reference)",
    background: "var(--surface-reference)"
  }
};
function PriorityTag({
  level = "reference",
  label,
  solid = false,
  style
}) {
  const l = priorityLevels[level] || priorityLevels.reference;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "3px 10px",
      borderRadius: "var(--radius-sm)",
      border: "var(--border-width-hairline) solid " + l.color,
      background: solid ? l.color : l.background,
      color: solid ? "var(--td-white)" : l.color,
      font: "var(--weight-bold) 12px/1.4 var(--font-core)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, label || l.label);
}
Object.assign(__ds_scope, { priorityLevels, PriorityTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/PriorityTag.jsx", error: String((e && e.message) || e) }); }

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

__ds_ns.DecisionTree = __ds_scope.DecisionTree;

__ds_ns.LayerStack = __ds_scope.LayerStack;

__ds_ns.LifecycleCircle = __ds_scope.LifecycleCircle;

__ds_ns.RelationshipMap = __ds_scope.RelationshipMap;

__ds_ns.Swimlane = __ds_scope.Swimlane;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.AccentPanel = __ds_scope.AccentPanel;

__ds_ns.AtAGlance = __ds_scope.AtAGlance;

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ChapterTransition = __ds_scope.ChapterTransition;

__ds_ns.ComparisonCards = __ds_scope.ComparisonCards;

__ds_ns.DocCard = __ds_scope.DocCard;

__ds_ns.DocHeader = __ds_scope.DocHeader;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.InlineCode = __ds_scope.InlineCode;

__ds_ns.KeyTakeaway = __ds_scope.KeyTakeaway;

__ds_ns.PriorityTag = __ds_scope.PriorityTag;

__ds_ns.QuoteBanner = __ds_scope.QuoteBanner;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TermList = __ds_scope.TermList;

__ds_ns.DocsArticle = __ds_scope.DocsArticle;

})();
