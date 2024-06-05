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

export interface RawResource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface RawResourceDataPage extends RawDataPage {
  data: RawResource[];
}

export interface Resource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantoneValue: string;
}

export interface ResourceDataPage extends DataPage {
  data: Resource[];
}
