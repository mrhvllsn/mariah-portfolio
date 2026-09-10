import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))] text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}