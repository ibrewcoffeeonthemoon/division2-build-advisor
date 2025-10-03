import { useState } from "react";
import * as AttributeField from "./Attribute";
import * as NameField from "./Name";
import { Attribute, DEFAULT_ATTRIBUTE } from "@/lib/type";

type Props<S, C> = {
  section: S;
  category: C;
};

export const Editor = <S extends string, C extends string>({
  section,
  category,
}: Props<S, C>) => {
  const [inputs, setInputs] = useState<Attribute[]>([]);

  const addNewInput = () => setInputs([...inputs, DEFAULT_ATTRIBUTE]);

  return (
    <div className="grid grid-cols-12 collapse-content px-3">
      <NameField.Input {...{ section, category }} />
      <AttributeField.Header />
      {inputs.map(({}, i) => (
        <AttributeField.Input key={i} />
      ))}
      <div className="col-span-12 p-2 flex flex-row justify-center">
        <button className="btn btn-primary btn-outline" onClick={addNewInput}>
          Add Attribute
        </button>
      </div>
    </div>
  );
};
