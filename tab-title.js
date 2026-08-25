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
      if (!text || text.length > 60) continue;
      // Skip the logo link: its hidden accessibility label contains the
      // site name and would produce "RWA NFT Cards home page - RWA NFT Cards".
      if (text.indexOf(SITE) !== -1) continue;
      return text;
    }
    return null;
  }

  var scheduled = false;
  function apply() {
    scheduled = false;
    var name = shortName();
    if (!name || name === SITE) {
      // No usable page name (e.g. the site root): collapse a redundant
      // "... home page - RWA NFT Cards" title to the plain site name.
      if (document.title.indexOf(SITE + " home page") !== -1) {
        document.title = SITE;
      }
      return;
    }
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
