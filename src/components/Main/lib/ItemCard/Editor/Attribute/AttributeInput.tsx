export const AttributeInput = () => {
  return (
    <select
      className="select select-ghost col-span-7 z-10"
      defaultValue="Weapon Damage"
    >
      <option disabled={true}>Attribute</option>
      <option>Weapon Damage</option>
      <option>Critical Hit Chance</option>
      <option>Critical Hit Damage</option>
      <option>Headshot Damage</option>
    </select>
  );
};
