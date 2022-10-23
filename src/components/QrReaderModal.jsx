import React from "react";
import { QrReader } from "react-qr-reader";
import useConnectDapp from "../hooks/useConnectDapp";

const style = {
  container: {
    width: "500px",
    height: "500px",
    margin: "auto",
    padding: "10px",
    borderRadius: "10px",
    border: "2px dashed white",
  },

  videoStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
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
    <div style={style.container}>
      <QrReader
        onResult={handleQrResult}
        scanDelay={300}
        videoContainerStyle={style}
        videoStyle={style.videoStyle}
      />
    </div>
  );
};

export default QrReaderModal;
