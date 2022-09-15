// ------------------ BASIC TYPES ---------------------

export enum Role {
  ADMIN = "ADMIN",
  CREATOR = "CREATOR",
  USER = "USER",
}

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  blogs: Blog[];
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  likes: User[];
  dislikes: User[];
  comments: Comment[];
  categories: Category[];
};

export type Comment = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  blogId: string;
  userId: string;
};

export type Category = {
  id: string;
  name: string;
  blogs: Blog[];
  createdAt: Date;
  updatedAt: Date;
};

// ------------------ BASIC TYPES ---------------------
