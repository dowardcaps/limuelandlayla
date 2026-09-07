import Monogram from "./Monogram";
import { couple, weddingDate } from "../../data/content";

export default function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-3 bg-paper px-4 py-10 text-center sm:gap-4 sm:px-6 sm:py-14">
      <Monogram size="md" />
      <p className="font-script text-xl text-navy sm:text-2xl">
        {couple.first} &amp; {couple.second}
      </p>
      <p className="tracked text-md text-navy/70">
        {weddingDate.display} &middot; {couple.hashtag}
      </p>
    </footer>
  );
}