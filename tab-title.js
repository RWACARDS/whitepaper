// Keeps the browser tab title short: "{page} - RWA NFT Cards" instead of
// the full on-page heading. The page name is read from the sidebar link
// for the current path, so it follows the active language automatically.
(function () {
  var SITE = "RWA NFT Cards";

  function shortName() {
    var path = location.pathname.replace(/\/+$/, "");
    if (!path) return null;
    var links = document.querySelectorAll(
      'a[href="' + path + '"], a[href="' + path + '/"]'
    );
    for (var i = 0; i < links.length; i++) {
      var text = (links[i].textContent || "").trim();
      if (text && text.length <= 60) return text;
    }
    return null;
  }

  var scheduled = false;
  function apply() {
    scheduled = false;
    var name = shortName();
    if (!name) return;
    var wanted = name + " - " + SITE;
    if (document.title !== wanted) document.title = wanted;
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(apply);
  }

  function start() {
    new MutationObserver(schedule).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
    window.addEventListener("popstate", schedule);
    schedule();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
