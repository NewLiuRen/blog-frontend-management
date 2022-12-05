import type Tag from "./Tag";

export default interface Article {
  id: string;
  title: string;
  content: string;
  description: string;
  clickCount: number;
  agreeCount: number;
  agree: boolean;
  tagSet: Tag[];
  categoryId: string;
  gmtCreate: string;
  gmtModified: string;
}
