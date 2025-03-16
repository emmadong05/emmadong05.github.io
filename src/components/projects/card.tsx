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
            <p className = "text-sm dont-light tracking-wider"> {tag}</p>
            <circle className = {`h-2 w-2 rounded-full ${colors.get(type)}`}/>
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
    return(
        <motion.div
            initial = {{opacity: 0, y: 20}}
            animate = {{opacity: 1, y: 0}}
            transition = {{type: "spring", duration: 1, delay: 0.2 * index}}
            className = {` flex w-full cursor-pointer flex-col gap-4 rounded-xl bg-neutral-800 p-4 transition-colors hover:bg-neutral-700 ${isTopCard ? "h-auto" : "h-16 overflow-hideen"}`}
            onClick={()=> window.open(link, "_blank")}
        >
            <div className="flex w-full flex-row gap-4">
                <img src = {image} alt = {name} className = "h-16 w-16 rounded-xl"/>
                <div className = "flex flex-col justify-center">
                    <h1 className = "test-base font-semibold lg:text-lg"> 
                        {name} 
                    </h1>
                </div>
            </div>
            {
                isTopCard && (
                    <motion.div
                        className = "mt-2 p-2 bg-neutral-800 rounded-xl"
                        initial = {{opacity: 0, height: 0}}
                        animate = {{opacity: 1, height: "auto"}}
                    >
                        <p className= "text-sm">{description}</p>
                        <div className = "flex flex-wrap gap-2 mt-2">
                            {tags.languages.map((language, idx) => (
                                <Tags key ={idx} tag = {language} type = "language"/>
                            ))}
                            {tags.libraries.map((library, idx) => (
                                <Tags key ={idx} tag = {library} type = "library"/>
                            ))}
                        </div>
                    </motion.div>
                )
            }
        </motion.div>
    );
}