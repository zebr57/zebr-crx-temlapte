chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((err) => {
  console.log(err);
});

// 监听标签页地址更新时
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (!tab.url) return;

  // const url = new URL(tab.url);

  // if (url.origin.includes("https://shen-linqiang.gitee.io")) {
  //   chrome.sidePanel.setOptions({ tabId, path: "index.html", enabled: true });
  // } else {
  //   chrome.sidePanel.setOptions({ tabId, enabled: false });
  // }
});

// 监听标签页切换时
// chrome.tabs.onActivated.addListener(function (activeInfo) {
//   const tabId = activeInfo.tabId;

//   // 获取当前选项卡的信息
//   chrome.tabs.get(tabId, function (tab) {

//   });
// });
