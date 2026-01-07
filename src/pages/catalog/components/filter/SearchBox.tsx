interface SearchBox {
  text: string;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBox({ text, onType }: SearchBox) {
  return (
    <div>
      <p className="text-lg font-bold">Pesquisar</p>
      <input
        type="text"
        placeholder="Pesquisar produtos"
        className="bg-white p-2 rounded-lg w-full mt-2 border-2 border-white focus:border-primary focus:outline-none"
        value={text}
        onChange={onType}
      />
    </div>
  );
}
