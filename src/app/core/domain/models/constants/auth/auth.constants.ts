export const AUTH_MODES = {
  LOGIN: 'login',
  RESET: 'sendResetLink',
  CHANGE: 'changePassword',
  ENTITIES: 'entities',
  BOARD: 'dashBoard',
} as const;

export const NAVIGATION_TO = {
  LOGIN: `/auth/${AUTH_MODES.LOGIN}`,
  RESET: `/auth/${AUTH_MODES.RESET}`,
  CHANGE: `/auth/${AUTH_MODES.CHANGE}`,
  ENTITIES: `/auth/${AUTH_MODES.ENTITIES}`,
  BOARD: `/dashBoard/home`,
};

export type AuthMode = (typeof AUTH_MODES)[keyof typeof AUTH_MODES];
