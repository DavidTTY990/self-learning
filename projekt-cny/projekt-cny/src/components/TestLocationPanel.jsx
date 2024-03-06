export default function TestLocationPanel({ handleTargetLocationClick }) {
  return (
    <div
      className="btn-group-vertical"
      style={{
        position: "absolute",
        zIndex: 3,
        right: "5%",
      }}
    >
      <button
        className="btn btn-warning btn-lg mt-2"
        onClick={(e) => handleTargetLocationClick(e, "朵朵嚐嚐")}
      >
        <span>朵朵嚐嚐</span>
      </button>
      <button
        className="btn btn-warning btn-lg mt-2"
        onClick={(e) => handleTargetLocationClick(e, "貓谷")}
      >
        <span>貓谷</span>
      </button>
      <button
        className="btn btn-warning btn-lg mt-2"
        onClick={(e) => handleTargetLocationClick(e, "Toast Chat")}
      >
        <span>Toast Chat</span>
      </button>
    </div>
  );
}