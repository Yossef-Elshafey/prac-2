const MapOnOptions = ({ options }: { options: string[] }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <option className=" bg-black" key={option} value={option}>
            {option}
          </option>
        );
      })}
    </>
  );
};

export default MapOnOptions;
