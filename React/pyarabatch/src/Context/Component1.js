import React, { createContext } from "react";
import Componen2 from "./Componen2";
// const MyContext = createContext();
// const LastName = createContext();
export default function Component1() {
  return (
    <div>
      {/* <MyContext.Provider value="ADfar"> */}
        {/* <LastName.Provider value="Rashid"> */}
          <Componen2 />
        {/* </LastName.Provider> */}
      {/* </MyContext.Provider> */}
    </div>
  );
}
// export { MyContext,LastName };
