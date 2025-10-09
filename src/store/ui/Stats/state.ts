export type State = {
  state: {
    section: {
      open: Record<string, boolean>;
      topic: {
        open: Record<string, Record<string, boolean>>;
      };
    };
  };
};

export const state: () => State["state"] = () => ({
  section: {
    open: {
      Basic: false,
      Damage: false,
    },
    topic: {
      open: {
        Basic: {
          Primary: false,
          Secondary: false,
          Sidearm: false,
          Signature: false,
        },
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
