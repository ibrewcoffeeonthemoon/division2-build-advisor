export type Action = {
  setCollapseOpen: (section: string, val: boolean) => void;
  setCategoryOpen: (section: string, category: string, val: boolean) => void;
  setOpenedIndex: (
    section: string,
    category: string,
    val: number | null,
  ) => void;
};
