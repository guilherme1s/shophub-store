import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

export function Search() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex items-center w-full border border-border rounded-lg">
      <span className="flex items-center justify-center px-4 text-muted-foreground">
        <SearchOutlinedIcon fontSize="medium" />
      </span>

      <input
        type="text"
        className="text-lg outline-none border-0 px-2 py-3 placeholder:text-muted-foreground"
        placeholder="Pesquisar produtos..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
      {inputText !== "" && (
        <button className="bg-primary text-white px-5 py-3 text-base rounded-r-lg cursor-pointer hover:bg-primary-hover transition">
          Buscar
        </button>
      )}
    </div>
  );
}
