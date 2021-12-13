export const ex1 = (function (): void {

  type User = {
    id: number;
    kind: string;
  };

  function makeCustomer<T extends User>(u: T): T {
    // Error（TS 编译器版本：v4.4.2）
    // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
    // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
    // but 'T' could be instantiated with a different subtype of constraint 'User'.
    return {
      id: u.id,
      kind: 'customer'
    }
  }

}())