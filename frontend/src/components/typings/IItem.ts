export interface IItem {
  description: string;
  id: number;
  category: string;
  user_id: number;
  image_url: string;
}

export interface IItemList {
  items: IItem[];
}
