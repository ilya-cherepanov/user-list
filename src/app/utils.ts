import { RawUser, RawUserDataPage, User, UserDataPage } from "./types";

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
