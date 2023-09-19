console.log("content loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
console.log(document.body);
import("./components/Demo");
