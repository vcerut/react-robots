import { UserType } from "./users.types";

const URL = "https://random-data-api.com/api/users/random_user?size=10";

//parentesi angolari servono quando l'implementazione del typing usa il generic
export const getUsers = async (): Promise<UserType[]> => {
  const res: Response = await fetch(URL);
  if (res.status === 200) {
    const data = (await res.json()) as UserType[];
    return data;
  }
  return [];
};
