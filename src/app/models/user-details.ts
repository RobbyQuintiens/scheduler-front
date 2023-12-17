interface UserDetails {
  sub: string;
  email_verified: boolean;
  realm_access: {
    roles: string[];
  };
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}
