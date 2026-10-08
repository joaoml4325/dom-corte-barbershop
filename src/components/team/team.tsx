import { TeamMembers } from "@/api/api";
import { Container } from "../container";
import { TeamItem } from "./team-item";

export const Team = () => {
    return (
        <div className="bg-(--blue) py-10">
            <Container>
                <h2 className="font-title text-4xl md:text-7xl font-bold text-(--title-color)">Nossa equipe</h2>
                <p className="max-w-70 md:max-w-full text-(--light-gray) mt-2 mb-16 text-xs md:text-[16px]">Nossa equipe de profissionais apaixonados pelo o que fazem.</p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {TeamMembers.map(member => (
                        <TeamItem key={member.id} member={member} />
                    ))}
                </div>
            </Container>
        </div>
    );
}