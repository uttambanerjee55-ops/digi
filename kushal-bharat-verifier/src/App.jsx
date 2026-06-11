import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const userdata = {
    candidateName: "Kumari",
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

      console.log("Parsed ", params);
      setData(params);
    } catch (e) {
      console.error("Parse error:", e);
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

    let content = urlParams.get("content");
    if (content) {
      parseContent(content);
      return;
    }

    const data = {
      candidateName: urlParams.get("candidateName") || "Kumari",
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
            <span className="value">{data?.candidateName || "Monu"}</span>
          </div>
          <div className="field">
            <span className="label">Candidate ID : </span>
            <span className="value">{data?.candidateId || "CAN_038738552"}</span>
          </div>
          <div className="field">
            <span className="label">Sector Name : </span>
            <span className="value">{data?.sectorName || "Healthcare"}</span>
          </div>
          <div className="field">
            <span className="label">QP Name : </span>
            <span className="value">{data?.qpName || "General Duty Assistant"}</span>
          </div>
          <div className="field">
            <span className="label">QP Code : </span>
            <span className="value">{data?.qpCode || "HSS/Q5101"}</span>
          </div>
          <div className="field">
            <span className="label">QPVersion : </span>
            <span className="value">{data?.qpVersion || "3.0"}</span>
          </div>
          <div className="field">
            <span className="label">Result : </span>
            <span className="value">{data?.Result || "PASS"}</span>
          </div>
          <div className="field">
            <span className="label">Document ID : </span>
            <span className="value">{data?.documentID || "sl8u03z9f9rhx8f9"}</span>
          </div>
          <div className="field">
            <span className="label">IssuanceDate : </span>
            <span className="value">{data?.issuanceDate || "29-Dec-2025"}</span>
          </div>
          <div className="field">
            <span className="label">Type : </span>
            <span className="value">{data?.type || "Certificate"}</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
