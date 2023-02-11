const libReddit = "http://192.168.1.128:1337";
const excludedPaths = [
  "/poll",
  "/rpan",
  "/settings",
  "/topics",
  "/community-points",
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    if (url.hostname === "10.1.10.26:1337") return;

    for (const path of excludedPaths) {
      if (url.pathname.indexOf(path) === 0) return;
    }

    if (url.pathname.indexOf("/gallery") === 0) {
      return { redirectUrl: libReddit + url.pathname.slice("/gallery".length) };
    }

    return { redirectUrl: libReddit + url.pathname + url.search + url.hash };
  },
  {
    urls: [
      "*://reddit.com/*",
      "*://www.reddit.com/*",
      "*://np.reddit.com/*",
      "*://amp.reddit.com/*",
      "*://i.reddit.com/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
