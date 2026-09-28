export function getPage(pageName) {
    return fetch(`views/${pageName}.html`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Page could not be loaded.");
            }

            return response.text();
        });
}