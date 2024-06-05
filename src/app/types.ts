export interface RawUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type UpdatedRawUser = Omit<Partial<RawUser>, 'id'>;

interface RawDataPage {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface RawUserDataPage extends RawDataPage {
  data: RawUser[];
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export type UpdatedUser = Omit<Partial<User>, 'id'>;

interface DataPage {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface UserDataPage extends DataPage {
  data: User[];
}
