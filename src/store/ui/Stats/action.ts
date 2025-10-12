import { DamageResult, SectionName, Selection, TopicName } from "./state";

export type Action = {
  action: {
    setSectionOpen: (section: SectionName, val: boolean) => void;
    setTopicOpen: (
      section: SectionName,
      topic: TopicName,
      val: boolean,
    ) => void;
    setTopicSelection: (
      section: SectionName,
      topic: TopicName,
      val: Selection<SectionName>,
    ) => void;
    setParagraphOpen: (
      section: SectionName,
      topic: TopicName,
      val: boolean,
    ) => void;
    stashDamageResult: (topic: TopicName, val: DamageResult) => void;
  };
};
