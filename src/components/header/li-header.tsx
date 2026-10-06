type Props = {
    text: string;
    onClick?: () => void;
}

export const LiHeaderMd = ({ text, onClick }: Props) => {
    return (
        <li
            onClick={onClick}
            className="hover:text-(--yellow-light) pb-1 cursor-pointer before:transition-transform duration-300 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-(--gold) before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left"
        >
            {text}
        </li>
    );
}

export const LiHeaderSm = ({ text, onClick }: Props) => {
    return (
        <li
            onClick={onClick}
            className="border-b border-yellow-600 pb-1"
        >
            {text}
        </li>
    )
}