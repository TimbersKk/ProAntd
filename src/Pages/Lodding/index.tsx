/* 懒加载 */
import React from 'react';
import { Spin } from "antd";
export default () => {
    return (
        <>
            <Spin tip="Lodding..." style={{background:"#F81D22"}} delay={500}>

            </Spin>
        </>
    )
}

