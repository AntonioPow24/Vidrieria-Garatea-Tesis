

export const decodeToken= (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

export const getUserRole = () => {
    const token = localStorage.getItem('authToken');
    const userFromToken = token ? decodeToken(token) : null;

    const userRole = userFromToken ? userFromToken.role : null;

    return userRole
}