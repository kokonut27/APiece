chrome.storage.sync.get(keys, options => {
    let enabled = options.enabled;

    if (!Object.keys(options).length) {
        enabled = defaultOptions.enabled;
        chrome.storage.sync.set(defaultOptions);
    }

    if (enabled == 1) {
        redirect();
    } else if (enabled == 2) {
        setTimeout(redirect, options.time * 60 * 1e3);
    }

    function redirect() {
        const redirects = options.redirects;

        const redirect = makehttps(redirects[Math.floor(Math.random() * redirects.length)]);

        const host = location.host.toLowerCase();

        for (const item of blacklist) {
            const itm = item.toLowerCase();
            if (host == itm || itm.includes(host) || new RegExp(itm).test(host)) {
                location.href = redirect;
            }
        }
    }

    function makehttps(url) {
        if (!/^https?:\/\//i.test(url)) {
            return `http://${url}`;
        }

        return url;
    }
});