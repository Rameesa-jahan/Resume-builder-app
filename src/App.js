import Create from "./Components/CreateResume/Create";
import jsPDF from "jspdf";
import React, { useRef } from "react";

function App() {
  const createref = useRef(null);

  const handleGenerate = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: "a2",
    });

    doc.setFont("Integer-Regular", "normal");

    doc.html(createref.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  return (
    <div>
      <div ref={createref}>
        <Create handleGenerate={handleGenerate} />
      </div>
    </div>
  );
}

export default App;
