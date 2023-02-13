//TODO: atob is deprecated, please update
/**
 * Parse JWT Token
 * @param data {any} The data to parse
 * @returns {object} The parsed data
 */
function parseJwt(data: any): object {
  const base64Url = data.access_token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return { ...JSON.parse(jsonPayload), Permission: data.permission, FullName: data.fullName, PictureUrl: data.pictureUrl };
}

export default parseJwt;
