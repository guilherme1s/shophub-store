import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

export function Search() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 h-12 w-full">
      <span className="text-muted-foreground">
        <SearchOutlinedIcon fontSize="small" />
      </span>
      <input
        type="text"
        className="bg-transparent border-0 outline-none text-sm w-full placeholder-muted-foreground"
        placeholder="Pesquisar produtos..."
        value={inputText}
        onChange={handleInputChange}
      />

      {inputText !== "" && (
        <button className="bg-primary text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-teste">
          Buscar
        </button>
      )}
    </div>
  );
}
