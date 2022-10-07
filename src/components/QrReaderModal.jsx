import React from "react";
import { QrReader } from "react-qr-reader";
import useConnectDapp from "../hooks/useConnectDapp";

const style = {
  width: "500px",
  height: "500px",
  margin: "auto",
};

const QrReaderModal = () => {
  const { handleDappConnection } = useConnectDapp();

  const handleQrResult = (result, error) => {
    if (result) {
      console.log(result);
      handleDappConnection(result.text);
    }
    console.log({ result, error });
  };

  return (
    <div style={style}>
      <QrReader
        onResult={handleQrResult}
        scanDelay={300}
        videoContainerStyle={style}
      />
    </div>
  );
};

export default QrReaderModal;
