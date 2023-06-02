/**
 * xóa các field undefined trong Object
 * @param value any
 * @returns new object
 */
const removeUndefined: <T extends Record<string, any>>(value: T) => T = (
  value
) => {
  Object.keys(value).forEach((key) =>
    value[key] === undefined ? delete value[key] : {}
  );
  return value;
};

export default removeUndefined;
