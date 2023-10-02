import { Server, Member, Profile } from "@prisma/client";

export type ServerWidthMemberWithProfiles = Server & {
    member: (Member & { profile: Profile})[];
};