import React from 'react';
import { Modal,Button } from "../../../Public/Index"
export default () => {

  const [flag, setflag] = React.useState<boolean>(false)
  return (
    <>
      <Modal
        visible={flag}
        okText={"你好"}
        title={<b>你好</b>}
        onOk={() => {
          return setflag(!flag)
        }}
        onCancel={() => {
          return setflag(!flag)
        }}
      ></Modal>

      <button onClick={() => {
        setflag(!flag)
      }}>打开modal</button>

      <Button
        type="default"
      >
        111
      </Button>
    </>
  );
}

