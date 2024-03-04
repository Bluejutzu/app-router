/** @format */

const session = null;

export default function Home() {
  if (!session) throw new Error("Auth is required to access this resource");

  return <main>This is an auth-only page</main>;
}
