export interface IAuthorRequest {
  name: string;
}

export interface IAuthor {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthorUpdate {
  id: string;
  name?: string;
  updated_at?: Date;
}

export interface IAuthorId {
  id: string;
}
