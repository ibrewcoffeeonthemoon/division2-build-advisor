export type State = {
  state: {
    section: {
      collapseOpen: Record<string, boolean>;
      category: {
        collapseOpen: Record<string, Record<string, boolean>>;
        attributes: {
          openedIndex?: number;
        };
      };
    };
  };
};
