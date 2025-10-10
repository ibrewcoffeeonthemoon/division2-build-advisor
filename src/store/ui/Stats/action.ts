import { SectionName, TopicName } from "./state";

export type Action = {
  action: {
    setSectionOpen: (section: SectionName, val: boolean) => void;
    setTopicOpen: (
      section: SectionName,
      topic: TopicName,
      val: boolean,
    ) => void;
  };
};
