export type LoginPayload = {
  username: string;
  password: string;
};

export type RegistrationPayload = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};
