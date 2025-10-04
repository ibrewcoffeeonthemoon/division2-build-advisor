export type Action = {
  setCollapseOpen: (section: string, val: boolean) => void;
  setOpenedIndex: (section: string, category: string, val: null) => void;
};
