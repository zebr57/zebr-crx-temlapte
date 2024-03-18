// 可以导入资源
import logo from "../assets/vue.svg";
const url = chrome.runtime.getURL(logo);
console.log(url);

// 可以请求插件内的资源
const src = chrome.runtime.getURL("src/pages/help/index.html");

const iframe = new DOMParser().parseFromString(
  `<iframe class="crx" src="${src}"></iframe>`,
  "text/html"
).body.firstElementChild;

document.body.append(iframe);
