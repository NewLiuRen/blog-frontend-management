export default interface Category {
  id?: string;
  level: number;
  name: string;
  icon: string;
  color: string;
  parentId: string;
  orderNum: number;
  privacy: boolean;
  gmtCreate: string;
  gmtModified: string;
}
