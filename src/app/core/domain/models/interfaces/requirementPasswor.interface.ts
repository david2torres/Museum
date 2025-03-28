export interface PasswordRequirement {
  id: number;
  icon: string;
  description: string;
  regex?: RegExp;
  fulfilled: boolean;
}
