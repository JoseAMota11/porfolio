import { profile } from "../../data/profile";

// TODO: replace with the Hero section in step 7.
export default function HomePage() {
  return (
    <main className="flex-1 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
    </main>
  );
}
