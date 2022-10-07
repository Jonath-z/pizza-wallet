import { SignClient } from "@walletconnect/sign-client";

const client = async () => {
  return await SignClient.init({
    projectId: process.env.REACT_APP_WALLET_CONNECT_APP_ID,

    metadata: {
      name: "Pizza wallet",
      description: "Crypto wallet",
      // wallet URL
      url: "",
      // wallet icons (incon url)
      icons: [""],
    },
  });
};

const useConnectDapp = () => {
  const handleDappConnection = async (uri) => {
    const signClient = await client();

    await signClient.pair(uri);

    console.log("dapp connected");
  };

  return { handleDappConnection };
};

export default useConnectDapp;
