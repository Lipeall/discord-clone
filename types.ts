import { Server, Member, Profile } from "@prisma/client";

export type ServerWidthMemberWithProfiles = Server & {
    members: (Member & { profile: Profile})[];
};