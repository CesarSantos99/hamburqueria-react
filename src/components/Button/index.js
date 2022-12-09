import React from "react";

import { Button } from "./styles";

function botao({children, ...props}){
    return <Button {...props}>{children}</Button>
} 

export default botao