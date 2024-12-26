interface ButtonProps {
  test?: string;
}

export default function Button({ test }: ButtonProps) {
  return (
    <button className="bg-primary-100 text-secondary-200 w-52 h-52">
      My Button From Lib {test}
    </button>
  );
}
