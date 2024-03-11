/// <reference types="vite/client" />

interface UserItem {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

interface UsersResponse {
  users: UserItem[];
}
