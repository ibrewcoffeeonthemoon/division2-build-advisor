export type Action = {
  setSectionOpen: (section: string, val: boolean) => void;
  setItemOpen: (section: string, item: string, val: boolean) => void;
  setAttributeOpenIndex: (
    section: string,
    item: string,
    val: number | null,
  ) => void;
};
