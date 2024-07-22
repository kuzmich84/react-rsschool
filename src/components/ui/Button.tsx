interface ButtonProps {
  children: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
