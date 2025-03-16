import { Page } from "../../stores/page.store";
import AboutPage from "../about/page";
import ContactsPage from "../contacts/page";
import ProjectsPage from "../projects/page";
import ResumePage from "../resume/page";

const pages = [
    {
        page: Page.ABOUT,
        component: <AboutPage />
    },
    {
        page: Page.CONTACTS,
        component: <ContactsPage />
    },
    {
        page: Page.PROJECTS,
        component: <ProjectsPage />
    },
    {
        page: Page.RESUME,
        component: <ResumePage />
    },
];