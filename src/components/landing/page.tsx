import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { PageStore, usePageStore } from "../../stores/page.store";
import { pages } from "./navpages";

export default function LandingPage() {
  const [showPages, setShowPages] = useState(false);
    const page = usePageStore((state)=>state.page);

  useEffect(() => {
    setTimeout(() => {
      setShowPages(true);
    }, 0);
  });

  return (
    <div className="flex h-screen w-screen flex-col font-poppins text-white">
      <div className="flex h-full w-full flex-row">
        <motion.div
          style={{
            width: "50%",
          }}
          className="flex flex-col gap-4 py-20 pl-10 pr-20"
        >
          {showPages && pages.find((item) => item.page === page)?.component}
        </motion.div>
      </div>
    </div>
  );
}