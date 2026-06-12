import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10 backdrop-blur-lg bg-black/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="pt-sans text-gray-400 flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> by <span className="federo font-bold">Gowtham D</span>
        </p>
        <p className="pt-sans text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
