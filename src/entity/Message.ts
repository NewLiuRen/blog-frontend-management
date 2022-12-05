export default interface Message {
  id?: string;
  content: string;
  reply: string;
  deleteFlag: boolean;
  view: boolean;
  userId: string;
  gmtCreate: string;
}
