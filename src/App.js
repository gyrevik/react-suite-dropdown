import React, { useState } from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import PageIcon from "@rsuite/icons/Page";
import DetailIcon from "@rsuite/icons/Detail";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import FileDownloadIcon from "@rsuite/icons/FileDownload";

const getIcon = (strSelected) => {
  switch (strSelected) {
    case "New File":
      return <PageIcon />;
    case "New File with Current Profile":
      return <FolderFillIcon />;
    case "Download As...":
      return <FileDownloadIcon />;
    case "Export PDF":
      return <DetailIcon />;
    default:
      return <PageIcon />;
  }
};

function App() {
  const [value, setValue] = useState("New File");

  return (
    <div>
      <Dropdown title={value} icon={getIcon(value)}>
        <Dropdown.Item icon={<PageIcon />} onSelect={(eventKey, e) => setValue("New File", e)}>
          New File
        </Dropdown.Item>
        <Dropdown.Item icon={<FolderFillIcon />} onSelect={(eventKey, e) => setValue("New File with Current Profile")}>
          New File with Current Profile
        </Dropdown.Item>
        <Dropdown.Item icon={<FileDownloadIcon />} onSelect={(eventKey, e) => setValue("Download As...")}>
          Download As...
        </Dropdown.Item>
        <Dropdown.Item icon={<DetailIcon />} onSelect={(eventKey, e) => setValue("Export PDF")}>
          Export PDF
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default App;
