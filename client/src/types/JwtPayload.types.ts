export interface JwtPayload {
  _id: string; // Adjust this based on your token structure
  username: number; // Token expiration time (optional, depends on your token)
  email: number; // Issued at time (optional)
}


