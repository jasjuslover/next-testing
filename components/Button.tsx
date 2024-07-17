type Props = {
  text: string;
  onClick: () => void;
};

function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-black py-3 px-4 rounded"
      role="button"
    >
      {text}
    </button>
  );
}

export default Button;
