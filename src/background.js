import {
  divideTabsToGroup,
  sortTabsByTitle,
  getSortedTabs,
} from "./scripts.js";

//メニューを登録するコード
chrome.runtime.onInstalled.addListener(() => {
  console.log("on installed");

  chrome.contextMenus.create({
    id: "root",
    title: "TabSorter",
    contexts: ["action"],
    type: "normal",
  });

  chrome.contextMenus.create({
    parentId: "root",
    id: "sortAllTabs",
    title: "sort all tabs",
    contexts: ["action"],
    type: "normal",
  });

  // chrome.contextMenus.create({
  //   parentId: "root",
  //   id: "sortTest",
  //   title: "Test",
  //   contexts: ["action"],
  //   type: "normal",
  // });
});

/**
 * シンプルに全タブをソートしたリストを作った後に、
 * 先頭から一番後ろに移動すればソートできるとおもったけど、
 * なぜかこの方法だとグループが壊れるので、
 * グループごとにソートしてグループの末尾に挿入するようにしています
 */
function sortAllTabs() {
  chrome.tabGroups.query({}, (tabGroups) => {
    console.log("---- all tab groups ----");
    tabGroups.forEach((group) => {
      console.log(group);
    });
    console.log("------------------");
  });

  chrome.tabs.query(
    {
      currentWindow: true,
    },
    (tabs) => {
      console.log("pre-sort", tabs);

      const groups = divideTabsToGroup(tabs);
      // let sortedTabs = [];
      for (let [groupId, tabs] of Object.entries(groups)) {
        // sortedTabs = [...sortedTabs, ...sortTabsByTitle(tabs)];
        const lastIndex = tabs.slice(-1)[0].index;
        let sortedTabs = sortTabsByTitle(tabs);
        // そのグループの末尾にいるタブのインデックスに挿入してみる
        sortedTabs.forEach((tab) => {
          chrome.tabs.move(tab.id, { index: lastIndex });
        });
      }
    }
  );
}

//メニューがクリックされた時のコード
chrome.contextMenus.onClicked.addListener((event) => {
  console.log("on clicked");
  if (event.menuItemId === "sortAllTabs") {
    sortAllTabs();
  }
  if (event.menuItemId === "sortTest") {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const length = tabs.length;
      let first = tabs[0];
      let second = tabs[1];

      chrome.tabs.move(first.id, { index: -1 });
      chrome.tabs.move(second.id, { index: -1 });
    });
  }
});
