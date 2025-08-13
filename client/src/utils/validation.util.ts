export const emailValidation = (emailInfo: string) => {
  return String(emailInfo)
    .toLocaleLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
};