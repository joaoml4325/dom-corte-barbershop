type Props = {
    text: string;
    className: string;
    onClick: () => void;
}

export const Button = ({ text, className, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    );
}