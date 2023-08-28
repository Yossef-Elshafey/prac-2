function CustomButton({ customName, customEffect }: CustomButtonProps) {
  return (
    <button className={`custom-button ${customEffect}`}>{customName}</button>
  );
}

export default CustomButton;
