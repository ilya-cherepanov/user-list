import {
  RawResource,
  RawResourceDataPage,
  RawUser,
  RawUserDataPage,
  Resource,
  ResourceDataPage,
  User,
  UserAccount,
  UserDataPage,
} from "./types";

export function mapRawUserToUser(user: RawUser): User {
  return {
    id: user.id,
    avatar: user.avatar,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
  };
}

export function mapUserToRawUser(user: User): RawUser {
  return {
    id: user.id,
    avatar: user.avatar,
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
  };
}

export function mapFromRawUserDataPage(dataPage: RawUserDataPage): UserDataPage {
  return {
    page: dataPage.page,
    total: dataPage.total,
    perPage: dataPage.per_page,
    totalPages: dataPage.total_pages,
    data: dataPage.data.map(mapRawUserToUser),
  };
}

export function mapRawResourceToResource(resource: RawResource): Resource {
  return {
    id: resource.id,
    name: resource.name,
    year: resource.year,
    color: resource.color,
    pantoneValue: resource.pantone_value,
  };
}

export function mapFromRawResourceDataPage(resourcePage: RawResourceDataPage): ResourceDataPage {
  return {
    page: resourcePage.page,
    total: resourcePage.total,
    perPage: resourcePage.per_page,
    totalPages: resourcePage.total_pages,
    data: resourcePage.data.map(mapRawResourceToResource),
  };
}

export function extractUserAccount(): UserAccount | null {
  const user = localStorage.getItem('user');
  if (!user) {
    return null;
  }

  const userData = JSON.parse(user);
  if (typeof userData === 'object'
    && 'token' in userData
    && typeof userData.token === 'string'
    && 'email' in userData
    && typeof userData.email === 'string'
  ) {
    return userData;
  }

  return null;
}
