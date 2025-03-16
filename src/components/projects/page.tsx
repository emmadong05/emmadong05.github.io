import { useState, useRef, useEffect } from "react";
import ProjectCard from "./card";
import projects from "./projects.json"

export default function ProjectPage() {
    const [topCardIndex, setTopCardIndex] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect( ()=> {
        const handleScroll = () => {
            if (!listRef.current) return;
            const cards = Array.from(listRef.current.children) as HTMLDivElement[];
            for (let i = 0; i < cards.length; i++){
                const rect = cards[i].getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 100){
                    setTopCardIndex(i);
                    break;
                }
            }
        };

        listRef.current?.addEventListener("scroll", handleScroll);
        return () => listRef.current?.removeEventListener("scroll",handleScroll);
    },[]);
    return (
        <div
            ref = {listRef}
            className ="flex h-full w-full flex-col items-start gap-4 overflow-auto py-4 no-scrollbar"
        >
            {projects.map((project,index) => (
                <ProjectCard 
                    key={index} 
                    {...project} 
                    index= {index}
                    isTopCard= {index === topCardIndex} 
                />
            ))}
        </div>
    );
}