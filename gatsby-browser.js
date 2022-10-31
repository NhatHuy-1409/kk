exports.onClientEntry = () => {
    const userLang = navigator.language.substr(0, 2)

    if (userLang !== "vi" && !window.location.pathname.startsWith("/en")) {
      window.location.pathname = `/en${window.location.pathname}`
    }
    if (userLang === "vi" && !window.location.pathname.startsWith("/vi")) {
      window.location.pathname = `/vi${window.location.pathname}`
    }
  }
