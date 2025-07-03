export interface AuthResponseType {
  name: string;
  email: string;
  refresh: string;
  access: string;
}

export type TokenRefreshResponseType = Pick<AuthResponseType, "access">;
