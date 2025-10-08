export type Action = {
  setSectionOpen: (section: string, val: boolean) => void;
  setTopicOpen: (section: string, item: string, val: boolean) => void;
  setAttributeOpenIndex: (
    section: string,
    item: string,
    val: number | null,
  ) => void;
};
