/**
 * 
 * Null값 제거하여 Object로 반환하는 함수
 */

const cleanNullArgs = (args: object): object => {
    const notNull = {};
    Object.keys(args).forEach(key => {
      if (args[key] !== null) {
        notNull[key] = args[key];
      }
    });
    return notNull;
  };
  
  export default cleanNullArgs;
  