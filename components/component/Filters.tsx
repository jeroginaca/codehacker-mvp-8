"use client"

import { useSearchParams, useRouter } from "@/node_modules/next/navigation";
import { formUrlQuery } from "@/sanity/utils";
import { useState } from "react";

const links = [ "Web Design", "frontend", "backend", "fullstack"]

const Filters = () => {
    const [active, setActive] = useState("");
    const searchParams = useSearchParams()
    const router = useRouter();

    const handleFilter = (link: string) => {

      let newUrl = "";
      
      if(active === link){
          setActive("")

          newUrl = formUrlQuery({
              params: searchParams.toString(),
              key: "category",
              value: null
      })
      } else {
          setActive(link);

          newUrl = formUrlQuery({
              params: searchParams.toString(),
              key: "category",
              value: link.toLowerCase(),
          })
      }
      router.push(newUrl, { scroll: false })
  }
  return (
    <ul className=" text-white-800 body-text no-scrollbar flex w-full justify-center items-center max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
        {links.map((link) => (
            <button
            key={link}
            onClick={() => handleFilter(link)}
            className={`${active === link ? "gradient_blue-purple" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
         >
                {link}
            </button>
        ))}
    </ul>
  )
}

export default Filters