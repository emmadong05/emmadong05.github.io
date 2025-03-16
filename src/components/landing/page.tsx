import { useEffect, useState} from "react";
import { PageStore, usePageStore } from "../../stores/page.store";

export default function LandingPage(){
    const [showPages, setShowPages] = useState(false);
    const page = usePageStore((state) => state.page)

    useEffect(() => {
        setTimeout( () => {
            setShowPages(true);
        },500); 
    }, []);

    return (
        <div>
            Hello!
        </div>
    );
}