import React, { useState } from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import CodeIcon from "@rsuite/icons/Code";
import PageIcon from "@rsuite/icons/Page";
import DetailIcon from "@rsuite/icons/Detail";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import FileDownloadIcon from "@rsuite/icons/FileDownload";
import FileUploadIcon from "@rsuite/icons/FileUpload";

function App() {
  const [value, setValue] = useState("New File");
  const [icon, setIcon] = useState(PageIcon);

  return (
    <div>
      <Dropdown title={value} icon={<PageIcon />}>
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
