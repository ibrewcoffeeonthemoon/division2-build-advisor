export type Action = {
  action: {
    setSectionOpen: (section: string, val: boolean) => void;
    setTopicOpen: (section: string, topic: string, val: boolean) => void;
    setParagraphOpenIndex: (
      section: string,
      topic: string,
      val: number | null,
    ) => void;
  };
};
