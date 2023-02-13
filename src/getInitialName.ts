/**
 * Get the initial name of the user
 * @param {string} name
 * @returns
 */
function getInitialName(name = '') {
  if (typeof name !== 'string') return '';
  if (name.length === 0) return '';

  const [firstName, lastName] = name.split(' ');
  return `${firstName[0]}${lastName ? lastName[0] : ''}`.toUpperCase();
}

export default getInitialName;
