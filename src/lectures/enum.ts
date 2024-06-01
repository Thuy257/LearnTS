// enum number

enum StatusEnum {
    PEDDING, // 0
    IN_PROGRESS, // 1
    DONE, // 2
    CANCELLED, // 3
  }
  // or
  enum StatusEnum2 {
    PEDDING = 3, // 3
    IN_PROGRESS, // 4
    DONE, // 5
    CANCELLED, // 6
  }
  // or
  enum StatusEnum3 {
    PEDDING = 3, // 3
    IN_PROGRESS = 5, // 5
    DONE = 7, // 7
    CANCELLED = 9, // 9
  }
  
  // can asign any number to your enum vảiable
  const state1: StatusEnum = StatusEnum.PEDDING;
  const state2: StatusEnum = 1;
  // const state3: StatusEnum = -3; Error: Type '-3' is not assignable to type 'StatusEnum'.ts(2322)
  console.log(StatusEnum[0]); /** PENDDING */
  console.log(StatusEnum['DONE']); /** 2 */