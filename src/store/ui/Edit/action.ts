import { SectionName, TopicName } from "./state";

export type Action = {
  action: {
    setSectionOpen: (section: SectionName, val: boolean) => void;
    setTopicOpen: <S extends SectionName>(
      section: S,
      topic: TopicName<S>,
      val: boolean,
    ) => void;
    setParagraphOpenIndex: <S extends SectionName>(
      section: S,
      topic: TopicName<S>,
      val: number | null,
    ) => void;
  };
};
