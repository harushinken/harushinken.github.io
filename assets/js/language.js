(() => {
  "use strict";

  const control = document.querySelector("[data-treehouse-page]");
  const source = document.getElementById("treehouse-translations");
  if (!control || !source) return;

  const translations = JSON.parse(source.textContent);
  const supported = ["ja", "en", "zh"];
  const storageKey = "treehouse-language";
  const pageKey = control.dataset.treehousePage;
  const articleSource = document.getElementById("treehouse-article");
  const articleTranslations = articleSource ? JSON.parse(articleSource.textContent) : null;

  function pageMetadata(dictionary, language) {
    if (pageKey === "article") return articleTranslations?.[language];
    const [group, entry] = pageKey.split(":");
    return entry ? dictionary[group]?.[entry] : dictionary.pages[pageKey];
  }

  function translateNavigation(dictionary) {
    const routes = {
      "/": "home",
      "/news/": "news",
      "/photography/": "photography",
      "/blog/": "blog",
      "/profile/": "profile",
      "/projects/": "profile",
      "/cv/": "profile",
    };
    document.querySelectorAll("#navbar a.nav-link").forEach((link) => {
      const route = new URL(link.href).pathname;
      const key = routes[route];
      if (!key) return;
      const text = Array.from(link.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (text) text.textContent = dictionary.ui[key];
      const current = link.querySelector(".sr-only");
      if (current) current.textContent = ` (${dictionary.ui.current})`;
    });
    const labels = {
      "#search-toggle": dictionary.ui.search,
      "#light-toggle": dictionary.ui.theme,
      ".navbar-toggler": dictionary.ui.menu,
    };
    Object.entries(labels).forEach(([selector, label]) => {
      const button = document.querySelector(selector);
      if (!button) return;
      button.title = label;
      button.setAttribute("aria-label", label);
      const hiddenText = button.querySelector(".sr-only");
      if (hiddenText) hiddenText.textContent = label;
    });
  }

  function setLanguage(requested) {
    const language = supported.includes(requested) ? requested : "ja";
    const dictionary = translations[language];
    document.documentElement.lang = dictionary.html_lang;
    document.querySelectorAll("[data-language]").forEach((section) => {
      section.hidden = section.dataset.language !== language;
    });
    control.setAttribute("aria-label", dictionary.ui.language);
    control.querySelectorAll("[data-set-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLanguage === language));
    });
    document.querySelectorAll("[data-treehouse-ui]").forEach((element) => {
      const text = dictionary.ui[element.dataset.treehouseUi];
      if (text) element.textContent = text;
    });

    const metadata = pageMetadata(dictionary, language);
    if (metadata) {
      // The theme's page heading sits outside the three translated content panels.
      const heading = document.querySelector(".post > .post-header");
      if (heading) {
        const title = heading.querySelector(".post-title");
        const description = heading.querySelector(".post-description");
        if (title) title.textContent = metadata.title;
        if (description) description.textContent = metadata.description;
      }
      document.title = `${metadata.title} · ${dictionary.profile.name}`;
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = metadata.description;
      const articleTag = document.querySelector("[data-article-tag]");
      if (articleTag) articleTag.textContent = metadata.tag ? `#${metadata.tag}` : "";
    }

    document.querySelectorAll("[data-treehouse-name]").forEach((element) => {
      element.textContent = dictionary.profile.name;
    });
    const brand = document.querySelector("#navbar .navbar-brand.title");
    if (brand) brand.textContent = dictionary.profile.name;
    translateNavigation(dictionary);
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Switching still works when the browser blocks storage.
    }
  }

  control.addEventListener("click", (event) => {
    const button = event.target.closest("[data-set-language]");
    if (button && control.contains(button)) setLanguage(button.dataset.setLanguage);
  });

  let savedLanguage = "ja";
  try {
    savedLanguage = localStorage.getItem(storageKey) || "ja";
  } catch {
    // Japanese is also the usable server-rendered fallback without JavaScript.
  }
  setLanguage(savedLanguage);
})();
