/**
 * 泛型
 */
interface Identities<V, M> {
  value: V,
  message: M
}
function identity<T, U>(value: T, message: U): Identities<T, U> {
  let identities: Identities<T, U> = {
    value,
    message
  };
  return identities;
}

console.log(identity(68, "Semlinker"));

export const pr1 = identity;