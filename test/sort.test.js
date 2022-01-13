import {
  divideTabsToGroup,
  sortTabsByTitle,
  getSortedTabs,
} from "../src/scripts.js";

const tabs = [
  {
    title: "いろはにほへと",
    groupId: -1,
  },
  {
    title: "Zamit",
    groupId: 0,
  },
  {
    title: "Gembucket",
    groupId: 2,
  },
  {
    title: "Ventosanzap",
    groupId: 3,
  },
  {
    title: "Trippledex",
    groupId: 2,
  },
  {
    title: "Konklab",
    groupId: 2,
  },
  {
    title: "Y-find",
    groupId: 1,
  },
  {
    title: "Bamity",
    groupId: 2,
  },
  {
    title: "Otcom",
    groupId: 1,
  },
  {
    title: "Span",
    groupId: 3,
  },
  {
    title: "Alpha",
    groupId: 0,
  },
  {
    title: "あいうえお",
    groupId: -1,
  },
];

describe("sort", () => {
  /**
   * グループごとに分割する
   */
  describe("#divideTabsToGroup()", () => {
    test("invalid call", () => {
      expect(divideTabsToGroup(null)).toStrictEqual({});
      expect(divideTabsToGroup([])).toStrictEqual({});
    });
    test("0", () => {
      const groups = divideTabsToGroup(tabs);
      expect(groups[0]).toStrictEqual([
        {
          title: "Zamit",
          groupId: 0,
        },
        {
          title: "Alpha",
          groupId: 0,
        },
      ]);
      expect(groups[1]).toStrictEqual([
        {
          title: "Y-find",
          groupId: 1,
        },
        {
          title: "Otcom",
          groupId: 1,
        },
      ]);
      expect(groups[2]).toStrictEqual([
        {
          title: "Gembucket",
          groupId: 2,
        },
        {
          title: "Trippledex",
          groupId: 2,
        },
        {
          title: "Konklab",
          groupId: 2,
        },
        {
          title: "Bamity",
          groupId: 2,
        },
      ]);
      expect(groups[3]).toStrictEqual([
        {
          title: "Ventosanzap",
          groupId: 3,
        },
        {
          title: "Span",
          groupId: 3,
        },
      ]);
    });
  });
  /**
   * タブのタイトルでソート
   */
  describe("#sortTabsByTitle()", () => {
    test("invalid call", () => {
      expect(sortTabsByTitle(null)).toStrictEqual([]);
      expect(sortTabsByTitle([])).toStrictEqual([]);
    });
    test("0", () => {
      expect(sortTabsByTitle(tabs)).toStrictEqual([
        {
          title: "Alpha",
          groupId: 0,
        },
        {
          title: "Bamity",
          groupId: 2,
        },
        {
          title: "Gembucket",
          groupId: 2,
        },
        {
          title: "Konklab",
          groupId: 2,
        },
        {
          title: "Otcom",
          groupId: 1,
        },
        {
          title: "Span",
          groupId: 3,
        },
        {
          title: "Trippledex",
          groupId: 2,
        },
        {
          title: "Ventosanzap",
          groupId: 3,
        },
        {
          title: "Y-find",
          groupId: 1,
        },
        {
          title: "Zamit",
          groupId: 0,
        },
        {
          title: "あいうえお",
          groupId: -1,
        },
        {
          title: "いろはにほへと",
          groupId: -1,
        },
      ]);
    });
  });
  /** ソートの実行 */
  describe("#getSortedTabs()", () => {
    test("invalid call", () => {
      expect(getSortedTabs(null)).toStrictEqual([]);
      expect(getSortedTabs([])).toStrictEqual([]);
    });
    test("0", () => {
      expect(getSortedTabs(tabs)).toStrictEqual([
        {
          title: "Alpha",
          groupId: 0,
        },
        {
          title: "Zamit",
          groupId: 0,
        },
        {
          title: "Otcom",
          groupId: 1,
        },
        {
          title: "Y-find",
          groupId: 1,
        },
        {
          title: "Bamity",
          groupId: 2,
        },
        {
          title: "Gembucket",
          groupId: 2,
        },
        {
          title: "Konklab",
          groupId: 2,
        },
        {
          title: "Trippledex",
          groupId: 2,
        },
        {
          title: "Span",
          groupId: 3,
        },
        {
          title: "Ventosanzap",
          groupId: 3,
        },
        {
          title: "あいうえお",
          groupId: -1,
        },
        {
          title: "いろはにほへと",
          groupId: -1,
        },
      ]);
    });
  });
});
