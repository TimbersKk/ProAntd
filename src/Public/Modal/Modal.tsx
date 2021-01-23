/* 
* * 公共模块_Modal
*/
import React from 'react'
import Button from "../Button/Button"
import "./Modal.less"


interface propsType {
    visible?: boolean
    onOk?: any
    onCancel?: any
    okText?: string
    cancelText?: string
    title?: string | JSX.Element
    children?: string | JSX.Element
}


const Modal: React.FC<propsType> = (props: propsType) => {

    const { visible, onOk, onCancel, title, children, okText, cancelText } = props

    console.log(onOk, visible);

    return <>
        {visible ?
            <div>
                <div className="rgb" onClick={onCancel}>
                    <div className="Modal" onClick={(e) => {
                        e.stopPropagation()
                    }}>
                        <div className="title">
                            <div className="right">{title}</div>
                            <div className="left">
                                <span onClick={onCancel}>X</span>
                            </div>
                        </div>
                        <div className="content">{children}</div>
                        <div className="footer">
                            <div className="footer-btn">
                                <Button
                                    onClick={onCancel}
                                    type="default"
                                    style={{ marginRight: "10px" }}
                                >{cancelText ? cancelText : "取消"}</Button>
                                <Button
                                    type="primary"
                                    onClick={onOk}
                                >{okText ? okText : "保存"}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : ""}
    </>
}
export default Modal;