import { React, useContext, useState } from "react";

const countContext = React.createContext();
const Provider = countContext.Provider;
const Consumer = countContext.Consumer;

 

export { Provider, Consumer};
