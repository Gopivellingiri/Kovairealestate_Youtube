export const parseExpireTime = (expireStr) => {
  const num = parseInt(expireStr);
  if (expireStr.endsWith("d")) return num * 24 * 60 * 60 * 1000;
  if (expireStr.endsWith("h")) return num * 60 * 60 * 1000;
  if (expireStr.endsWith("m")) return num * 60 * 1000;

  return num;
};
