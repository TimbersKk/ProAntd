/* 
* 公共模块_按钮
*/

import React from 'react'
import "./Button.less"


interface propsType {
    type?: string
    danger?: any
    style?:any
    children?: string | JSX.Element
    onClick?:any
}


const Button: React.FC<propsType> = (props: propsType) => {

    const { type, style, children,onClick } = props;

    return <>
        <button className={`Button ${type}-btn`} style={style} onClick={onClick}>{children}</button>
    </>
}

export default Button