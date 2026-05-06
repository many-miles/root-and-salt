export type MembershipStatus = "free" | "premium" | "expired";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  membershipStatus: MembershipStatus;
};
