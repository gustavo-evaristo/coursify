export const textReplace = (text?: string): string =>
  text
    ?.replace(/<[^>]+>/g, '')
    .replace(/&#8230;/g, '')
    .replace(/&#8217;/g, '');

export const sortAsc = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const sortDsc = (a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
};
