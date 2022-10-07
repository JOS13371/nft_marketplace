export const makeid = (Length) => {
  let result = '';
  const charracters = 'abcdefghijklmnopqrstuvwxyz123456789';
  const charractersLength = charracters.length;

  for (let i = 0; i < Length; i++) {
    result += charracters.charAt(Math.floor(Math.random() * charractersLength));
  }
  return result;
};

