import { DamageResult, SectionName, Selection, TopicName } from "./state";

export type Action = {
  action: {
    setSectionOpen: (section: SectionName, val: boolean) => void;
    setTopicOpen: (
      section: SectionName,
      topic: TopicName,
      val: boolean,
    ) => void;
    setTopicSelection: (section: SectionName, val: Selection) => void;
    setParagraphOpen: (
      section: SectionName,
      topic: TopicName,
      val: boolean,
    ) => void;
    stashDamageResult: (topic: TopicName, val: DamageResult) => void;
  };
};
