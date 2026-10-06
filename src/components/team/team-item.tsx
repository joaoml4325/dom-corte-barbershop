import { Members } from "@/types/members";
import { Instagram } from "@mui/icons-material";
import Link from "next/link";

type Props = {
    member: Members;
}

export const TeamItem = ({ member }: Props) => {
    return (
        <div
            key={member.id}
            className="w-70 border border-[#222] hover:border-(--gold) transition-colors duration-300 shadow-md shadow-black/30 group relative"
        >
            <div className="w-full h-100 overflow-hidden">
                <img
                    src={member.img}
                    alt={member.name}
                    className="w-max h-max transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="py-6 px-6 flex flex-col">
                <p className="text-(--yellow-bold) font-title text-4xl mb-4">{member.name}</p>
                <p className="text-(--light-gray) text-sm">{member.specialty}</p>
            </div>
            <Link
                href="https://www.instagram.com"
                target="_blank"
                className="group-hover:opacity-100 opacity-0 group-hover:cursor-pointer bg-black/60 absolute top-0 w-full h-full flex items-center justify-center transition-opacity duration-300"
            >
                <Instagram fontSize="large" />
            </Link>
        </div>
    );
}