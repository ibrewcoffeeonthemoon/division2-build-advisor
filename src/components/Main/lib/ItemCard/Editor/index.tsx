import { useState } from "react";
import { Header, Input, NameInput } from "./Input";
import { Attribute, DEFAULT_ATTRIBUTE } from "@/lib/type";

type Props<S, C> = {
  section: S;
  category: C;
};

export const Editor = <S, C>({ section, category }: Props<S, C>) => {
  const [inputs, setInputs] = useState<Attribute[]>([]);

  const addNewInput = () => setInputs([...inputs, DEFAULT_ATTRIBUTE]);

  return (
    <div className="grid grid-cols-12 collapse-content px-3">
      <NameInput />
      <Header />
      {inputs.map(({}, i) => (
        <Input key={i} />
      ))}
      <div className="col-span-12 p-2 flex flex-row justify-center">
        <button className="btn btn-primary btn-outline" onClick={addNewInput}>
          Add Attribute
        </button>
      </div>
    </div>
  );
};
