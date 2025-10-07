export type State = {
  state: {
    section: {
      open: Record<string, boolean>;
    };
  };
};

export const state: () => State["state"] = () => ({
  section: {
    open: {
      Damage: false,
    },
  },
});
