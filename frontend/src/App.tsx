import { FC, useCallback, useState } from "react";
import logo from "./wojak.png";
import "./App.css";
import { ethers } from "ethers";
import { DelegateOwnership, VerifySignature } from "../../typechain-types";
import verifySignatureArtifact from "./contracts/VerifySignature.json";
import delegateOwnershipArtifact from "./contracts/DelegateOwnership.json";

const getEthereumClient = (): any | undefined => {
  return (
    (typeof window !== "undefined" && (window as any).ethereum) || undefined
  );
};
const App: FC = () => {
  const [hotWallet, setHotWallet] = useState<string | undefined>();
  const [coldWallet, setColdWallet] = useState<string | undefined>();
  const [signature, setSignature] = useState<string | undefined>();
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>();
  const [verifySignatureContract, setVerifySignatureContract] = useState<
    undefined | VerifySignature
  >();
  const [delegateOwnershipContract, setDelegateOwnershipContract] = useState<
    undefined | DelegateOwnership
  >();
  const intializeEthers = useCallback(() => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum,
      "any"
    );

    setVerifySignatureContract(
      new ethers.Contract(
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        verifySignatureArtifact.abi as any,
        provider.getSigner(0)
      ) as VerifySignature
    );
    setDelegateOwnershipContract(
      new ethers.Contract(
        "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
        delegateOwnershipArtifact.abi as any,
        provider.getSigner(0)
      ) as DelegateOwnership
    );
  }, []);

  const initialize = useCallback(
    (userAddress: string) => {
      setSelectedAddress(userAddress);
      intializeEthers();
    },
    [intializeEthers]
  );

  const connectWallet = useCallback(async () => {
    const [address] = await getEthereumClient().request({
      method: "eth_requestAccounts",
    });
    initialize(address);
  }, [initialize]);

  const signMessage = async () => {
    if (hotWallet != null && verifySignatureContract != null) {
      const messageHash = await verifySignatureContract?.getMessageHash(
        hotWallet
      );
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum,
        "any"
      );
      const sign = await provider
        .getSigner(coldWallet)
        .signMessage(ethers.utils.arrayify(messageHash));

      setSignature(sign);
    }
  };

  const submit = async () => {
    if (
      hotWallet != null &&
      coldWallet != null &&
      delegateOwnershipContract != null &&
      signature != null
    ) {
      await delegateOwnershipContract.setMapping(coldWallet, signature);
    }
  };

  return (
    <>
      <header className="App-header">
        <button onClick={connectWallet}>
          {selectedAddress ? selectedAddress : "Connect"}
        </button>
        <h1>They don't know</h1>
      </header>
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flex: 2,
            flexDirection: "column",
            paddingLeft: "50px",
          }}
        >
          <h2>Socialize without compromise!</h2>
          <div className="App-description">
            “They don't know” is a protocol you have been secretly waiting for
            since you finally bought your precious cold wallet. It gives you
            safety and freedom at the same time: you can store your NFTs in a
            cold wallet, without losing the ability to use them in services that
            support the protocol.
          </div>
          <h2>How?</h2>
          <div className="App-how">
            This is made possible with off-chain cryptography - signing a
            message containing your hot wallet address with your cold wallet.
            Then using the hot wallet, this information gets verified on-chain
            and stored in a smart contract.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div className="App-card">
          <h3 style={{ margin: 0 }}>Wallets</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: "10px",
              }}
            >
              <text>
                <text style={{ color: "blue" }}>COLD</text> WALLET
              </text>
              <input
                onChange={(e) => setColdWallet(e.target.value)}
                style={{ backgroundColor: "lightskyblue" }}
                type="text"
              ></input>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: "10px",
              }}
            >
              <text>
                <text style={{ color: "red" }}>HOT</text> WALLET
              </text>
              <input
                onChange={(e) => setHotWallet(e.target.value)}
                style={{ backgroundColor: "darksalmon" }}
                type="text"
              ></input>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 36, alignSelf: "center" }}>👉🏿</div>
        <div className="App-card">
          <h3 style={{ margin: 0 }}>Sign message</h3>
          <p>
            One time secure sign message in Metamask with your cold wallet, than
            disconnect your cold wallet forever.
          </p>
          <div style={{ display: "flex", flex: 1 }} />
          <button
            style={{ width: "50%", alignSelf: "center" }}
            onClick={signMessage}
          >
            Sign
          </button>
        </div>
        <div style={{ fontSize: 36, alignSelf: "center" }}>👉🏿</div>
        <div className="App-card">
          <h3 style={{ margin: 0 }}>Transaction</h3>
          <p>Switch and connect your hot wallet, then press submit.</p>
          <div style={{ display: "flex", flex: 1 }} />
          <button
            style={{
              width: "50%",
              justifySelf: "flex-end",
              alignSelf: "center",
            }}
            onClick={submit}
          >
            Submit
          </button>
        </div>
        <div style={{ fontSize: 36, alignSelf: "center" }}>👉🏿</div>
        <div className="App-card">
          <h3 style={{ margin: 0 }}>Socialize without compromise!</h3>
          <p>
            Congrats, now you are on the safe side! No need to worry about the
            abundance of scams and viruses on Discord, Twitter, and malicious
            websites.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
