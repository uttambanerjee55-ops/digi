import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const userdata = {
    candidateName: "Ram Kumari",
    candidateId: "CAN_038738553",
    sectorName: "Healthcare",
    qpName: "General Duty Assistant",
    qpCode: "HSS/Q5101",
    qpVersion: "3.0",
    Result: "PASS",
    documentID: "sl8u03zyf9rhx8f9",
    issuanceDate: "29-Dec-2025",
    type: "Certificate"
  };

  const queryString = Object.entries(userdata)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  const encoded = btoa(queryString);
  console.log(`user?content=${encoded}`);


  const parseContent = (encoded) => {
    try {

      let cleanEncoded = decodeURIComponent(decodeURIComponent(encoded));

      cleanEncoded = cleanEncoded.replace(/%2F/g, '/').replace(/%2B/g, '+');

      const decoded = atob(cleanEncoded);
      const params = {};

      decoded.split("&").forEach((pair) => {
        const [key, value] = pair.split("=");
        if (key && value) {
          params[key.trim()] = decodeURIComponent(value.trim().replace(/\+/g, " "));
        }
      });

      console.log("Parsed ", params); // Debug
      setData(params);
    } catch (e) {
      console.error("Parse error:", e);
      // Fallback to default data
      setData({
        candidateName: "Punam Kumari",
        candidateId: "CAN_038738553",
        sectorName: "Healthcare",
        qpName: "General Duty Assistant",
        qpCode: "HSS/Q5101",
        qpVersion: "3.0",
        Result: "PASS",
        documentID: "sl8u03zyf9rhx8f9",
        issuanceDate: "29-Dec-2025",
        type: "Certificate"
      });
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    // Try content param first (Base64)
    let content = urlParams.get("content");
    if (content) {
      parseContent(content);
      return;
    }

    // Direct params as backup (no Base64 needed)
    const data = {
      candidateName: urlParams.get("candidateName") || "Jhon Doe",
      candidateId: urlParams.get("candidateId") || "CAN_038738553",
      sectorName: urlParams.get("sectorName") || "Healthcare",
      qpName: urlParams.get("qpName") || "General Duty Assistant",
      qpCode: urlParams.get("qpCode") || "HSS/Q5101",
      qpVersion: urlParams.get("qpVersion") || "3.0",
      Result: urlParams.get("Result") || "PASS",
      documentID: urlParams.get("documentID") || "sl8u03zyf9rhx8f9",
      issuanceDate: urlParams.get("issuanceDate") || "29-Dec-2025",
      type: urlParams.get("type") || "Certificate"
    };

    setData(data);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="verification-badge">
          <img
            style={{ height: "80px", width: "80px" }}
            src="/verify1.jpg"
            alt="Verified Badge"
            className="badge-image"
          />
          <div className="badge-text">
            <span style={{ color: "#3796f0" }}>Verified</span>
          </div>
        </div>
        <div className="card">
          <div className="field">
            <span className="label">Candidate Name : </span>
            <span className="value">{data?.["candidateName"] || "Monu"}</span>
          </div>
          <div className="field">
            <span className="label">Candidate ID : </span>
            <span className="value">{data?.["candidateId"] || "CAN_038738552"}</span>
          </div>
          <div className="field">
            <span className="label">Sector Name : </span>
            <span className="value">{data?.["sectorName"] || "Healthcare"}</span>
          </div>
          <div className="field">
            <span className="label">QP Name : </span>
            <span className="value">{data?.["qpName"] || "General Duty Assistant"}</span>
          </div>
          <div className="field">
            <span className="label">QP Code : </span>
            <span className="value">{data?.["qpCode"] || "HSS/Q5101"}</span>
          </div>
          <div className="field">
            <span className="label">QPVersion : </span>
            <span className="value">{data?.["qpVersion"] || "3.0"}</span>
          </div>
          <div className="field">
            <span className="label">Result : </span>
            <span className="value">{data?.["Result"] || "PASS"}</span>
          </div>
          <div className="field">
            <span className="label">Document ID : </span>
            <span className="value">{data?.["documentID"] || "sl8u03z9f9rhx8f9"}</span>
          </div>
          <div className="field">
            <span className="label">IssuanceDate : </span>
            <span className="value">{data?.["issuanceDate"] || "29-Dec-2025"}</span>
          </div>
          <div className="field">
            <span className="label">Type : </span>
            <span className="value">{data?.["type"] || "Certificate"}</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header">
    <div className="nav-top">
      <div className="nav-top-right">
        <button className="nav-btn transparent">
          <img src="/helpline.png" alt="Technical Support" />
          <span style={{ marginLeft: "5px" }}>Technical Support</span>
        </button>
        <button className="nav-btn yellow">LOGIN</button>
        <button className="nav-btn transparent">Register</button>
      </div>
    </div>
    <div className="header-top">
      <img src="/koshal-bharat.png" alt="कौशल भारत" className="title-left" />
      <img
        src="/skill-india-logo.png"
        alt="कौशल भारत"
        className="title-middle"
      />
      <img src="/kushal-bharat.png" alt="कौशल भारत" className="title-right" />
    </div>
    <div className="nav-tab">HOME</div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <img src="/footer.png" alt="Skill India Logo" className="footer-logo" />
    </div>
  </footer>
);



export default App;
