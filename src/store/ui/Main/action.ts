export type Action = {
  setSectionOpen: (section: string, val: boolean) => void;
  setItemOpen: (section: string, category: string, val: boolean) => void;
  setAttributeOpenIndex: (
    section: string,
    category: string,
    val: number | null,
  ) => void;
};
