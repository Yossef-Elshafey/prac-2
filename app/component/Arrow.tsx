const Arrow = ({ customStyles }: { customStyles: string }) => {
  return (
    <>
      <span
        className={` border-t-4 border-l-4 ${customStyles}  transition-transform  inline-block ml-1`}
      ></span>
    </>
  );
};
export default Arrow;
