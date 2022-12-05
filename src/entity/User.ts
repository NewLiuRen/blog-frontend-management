export default interface User {
  id: string;
  username: string;
  ip: string;
  area: string;
  lat: number;
  log: number;
  avatar: string;
  git: string;
  email: string;
  freeze: boolean;
  freezeCount: number;
  unfreezeDate: string;
  deleteFlag: boolean;
  lastLoginTime: string;
  gmtCreate: string;
}
