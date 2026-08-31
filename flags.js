// Prepends country flags to the language switcher entries.
// Mintlify derives switcher labels from the language code with no label
// config, so the flags are added client-side by exact text match.
(function () {
  var FLAGS = {
    "English": "🇺🇸",
    "Русский": "🇷🇺",
    "中文": "🇨🇳",
    "简体中文": "🇨🇳",
    "Deutsch": "🇩🇪",
    "Português": "🇧🇷",
    "Español": "🇪🇸"
  };

  function decorate() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var text = node.nodeValue ? node.nodeValue.trim() : "";
      if (!FLAGS[text]) continue;
      var el = node.parentElement;
      if (!el || el.closest("article")) continue;
      node.nodeValue = node.nodeValue.replace(text, FLAGS[text] + " " + text);
    }
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      decorate();
    });
  }

  function start() {
    new MutationObserver(schedule).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
    schedule();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
