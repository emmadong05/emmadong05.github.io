import { motion } from "motion/react"

const colors = new Map<string,string>([
    ["language", "bg-pink-500"],
    ["library", "bg-purple-500"],
]);

const Tags = ({
    tag, 
    type
}: {
    tag: string;
    type: "language" | "library";
}) => {
    return (
        <div className= "flex flex-row items-center justify-center gap-1">
            <p className = "text-sm font-light tracking-wider whitespace-nowrap"> {tag}</p>
            <div className = {`h-2 w-2 rounded-full ${colors.get(type)}`}/>
        </div>
    );
};

export default function ProjectCard ({
    name,
    description,
    link,
    image,
    tags,
    index,
    isTopCard,
}: {
    name:string;
    description: string;
    link: string;
    image?: string;
    tags: {languages: string[]; libraries: string[]};
    index: number;
    isTopCard: boolean;
}) { 
    if (isTopCard) {
        return(
            <motion.div
                initial = {{opacity: 0, y: 20}}
                animate = {{opacity: 1, y: 0}}
                transition = {{type: "spring", duration: 1, delay: 0.2 * index}}
                className = "flex h-32 w-full cursor-pointer flex-col gap-4 rounded-xl bg-neutral-800 p-4 transition-colors hover:bg-neutral-700"
                onClick={()=> window.open(link, "_blank")}
            >
                <div className="flex w-full flex-row gap-4">
                    <img src={image} alt={name} className="h-16 w-16 rounded-xl" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-base font-semibold lg:text-lg">{name}</h1>
                        <p className="py-1 text-xs font-light lg:text-sm">{description}</p>
                    </div>
                </div>
                <div className="flex w-full flex-row gap-4 overflow-auto no-scrollbar">
                    {tags.languages.map((language, index) => (<Tags key={index} tag={language} type="language" />))}
                    {tags.libraries.map((library, index) => (<Tags key={index} tag={library} type="library" />))}
                </div>
            </motion.div>
        );
    }
    return(
        <motion.div
            initial = {{opacity: 0, y: 20}}
            animate = {{opacity: 1, y: 0}}
            transition = {{type: "spring", duration: 1, delay: 0.2 * index}}
            className = "flex h-16 w-full cursor-pointer flex-col gap-4 rounded-xl bg-neutral-800 p-4 transition-colors hover:bg-neutral-700"
            onClick={()=> window.open(link, "_blank")}
        >
            <div className="flex w-full flex-row gap-4">
                <img src={image} alt={name} className="h-8 w-8 rounded-xl" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-base font-semibold lg:text-lg">{name}</h1>
                </div>
            </div>
        </motion.div>
    );
}