"use client";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import React, { useState } from "react";

// SSR을 비활성화하고 클라이언트 사이드에서만 로드하도록 설정
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const VipPrEditorComponent = () => {
  const [contents, setContents] = useState("");

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "#ffffff",
              "#facccc",
              "#ffebcc",
              "#ffffcc",
              "#cce8cc",
              "#cce0f5",
              "#ebd6ff",
              "#bbbbbb",
              "#f06666",
              "#ffc266",
              "#ffff66",
              "#66b966",
              "#66a3e0",
              "#c285ff",
              "#888888",
              "#a10000",
              "#b26b00",
              "#b2b200",
              "#006100",
              "#0047b2",
              "#6b24b2",
              "#444444",
              "#5c0000",
              "#663d00",
              "#666600",
              "#003700",
              "#002966",
              "#3d1466",
              "custom-color",
            ],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
  };

  const onChangeContents = (contents: any) => {
    setContents(contents);
  };

  return (
    <div style={{ height: "700px" }}>
      <ReactQuill
        style={{ height: "100%" }}
        modules={modules}
        onChange={onChangeContents}
      />

      {/* <div dangerouslySetInnerHTML={{ __html: contents }} /> */}
    </div>
  );
};

export default VipPrEditorComponent;
