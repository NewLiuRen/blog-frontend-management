export default interface Comment {
  id?: string;
  content: string;
  top: boolean;
  sortNum: number;
  username: string;
  reply: string;
  replyGmtCreate: string;
  replyUsername: string;
  title: string;
  description: string;
  gmtCreate: string;
}
