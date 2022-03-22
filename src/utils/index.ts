export const textReplace = (text: string): string =>
  text
    .replace(/<[^>]+>/g, '')
    .replace(/&#8230;/g, '')
    .replace(/&#8217;/g, '');
