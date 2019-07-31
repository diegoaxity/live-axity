export interface Login {
  exist: boolean;
  data: LoginData[];
}

export interface LoginData {
  _id: string;
  userAlias: string;
  userName: string;
  userLastName: string;
  userEmail: string;
  userRegisterMethod: string;
  userMac: string;
  userCompany: string;
  userDate: string;
  userLastLogin: string;
  isVisible: boolean;
}
