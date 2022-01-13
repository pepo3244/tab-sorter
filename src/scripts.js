export function divideTabsToGroup(tabs) {
  if (!tabs) {
    return {};
  }
  let groups = {};
  tabs.forEach((tab) => {
    if (!groups[tab.groupId]) {
      groups[tab.groupId] = [];
    }
    groups[tab.groupId].push(tab);
  });
  return groups;
}

export function sortTabsByTitle(tabs) {
  if (!tabs) {
    return [];
  }
  let sortedTabs = [...tabs];
  sortedTabs.sort((lhs, rhs) => {
    if (lhs.title < rhs.title) {
      return -1;
    }
    if (lhs.title > rhs.title) {
      return 1;
    }
    return 0;
  });
  return sortedTabs;
}

export function getSortedTabs(tabs) {
  if (!tabs) {
    return [];
  }
  // まずはグループで分割する
  let groups = divideTabsToGroup(tabs);
  // そのあとグループごとにソート
  let sortedTabs = [];
  for (let [groupId, tabs] of Object.entries(groups)) {
    sortedTabs = [...sortedTabs, ...sortTabsByTitle(tabs)];
  }

  return sortedTabs;
}
