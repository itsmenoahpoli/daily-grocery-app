export const env = <T>(key: T): T => {
  return process.env[`EXPO_PUBLIC_${key}`] as T;
};
