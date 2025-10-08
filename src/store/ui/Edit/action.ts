export type Action = {
  setSectionOpen: (section: string, val: boolean) => void;
  setTopicOpen: (section: string, topic: string, val: boolean) => void;
  setAttributeOpenIndex: (
    section: string,
    topic: string,
    val: number | null,
  ) => void;
};
