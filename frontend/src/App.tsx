import React from "react";
import logo from "./wojak.png";
import "./App.css";

function App() {
  return (
    <>
      <header className="App-header">
        <p>They don't know</p>
      </header>
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flex: 3,
            flexDirection: "column",
            paddingLeft: "50px",
          }}
        >
          <div>Socialize without compromise!</div>
          <div className="App-description">
            “They don't know” is a protocol you have been secretly waiting for
            since you finally bought your precious cold wallet. It gives you
            safety and freedom at the same time: you can store your NFTs in a
            cold wallet, without losing the ability to use them in services that
            support the protocol.
          </div>
          <div>How?</div>
          <div className="App-how">
            This is made possible with off-chain cryptography - signing a
            message containing your hot wallet address with your cold wallet.
            Then using the hot wallet, this information gets verified on-chain
            and stored in a smart contract.
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "row",
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
          <button style={{ width: "50%", alignSelf: "center" }}>Sign</button>
        </div>
        <div style={{ fontSize: 36, alignSelf: "center" }}>👉🏿</div>
        <div className="App-card">
          <h3 style={{ margin: 0 }}>Transaction</h3>
          <p>Switch and connect your hot wallet, then press submit.</p>
          <button
            style={{
              width: "50%",
              justifySelf: "flex-end",
              alignSelf: "center",
            }}
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
}

export default App;
