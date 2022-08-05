export function loginRoleCheck(role: any) {
  if (role.roleName === "Admin" || role.roleName === "Super Admin") {
    return true;
  }
  return false;
}

export function splitName(name: any) {
  try {
    const part = name.split(" ");

    if (part.length === 2) {
      return `${part[0].split("")[0]}${part[1].split("")[0]}`;
    }
    if (part.length < 2) {
      throw "new Error";
    }
    return `${part[0].split("")[0]}${part[0].split("")[1]}`;
  } catch (err: any) {
    return "N/A";
  }
}

export function setUserInLocalStorage(
  user_id: string,
  token: string,
  retoken: string
) {
  localStorage.setItem("user_id", user_id);
  localStorage.setItem("token", token);
  localStorage.setItem("retoken", retoken);
  return 1;
}

export function getUserInLocalStorage() {
  return {
    luser_id: localStorage.getItem("user_id"),
    ltoken: localStorage.getItem("token"),
    lretoken: localStorage.getItem("retoken"),
  };
}

export function favoriteInitCheck(favs: string[], id: string) {
  const isFav = favs.find((item: any) => item === id);
  if (!isFav) {
    return true;
  }
  return false;
}

export const Player = {};
