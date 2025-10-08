export type State = {
  state: {
    section: {
      open: Record<string, boolean>;
      item: {
        open: Record<string, Record<string, boolean>>;
      };
    };
  };
};

export const state: () => State["state"] = () => ({
  section: {
    open: {
      Damage: false,
    },
    item: {
      open: {
        Damage: {
          Primary: false,
          Secondary: false,
          Sidearm: false,
          Signature: false,
        },
      },
    },
  },
});
