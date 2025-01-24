import { lazy } from "react";

import Salesforce from "../../content/Salesforece.json";
import WhyChooseUs from "../../content/WhyChooseUs.json";
import ContactContent from "../../content/ContactContent.json";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop />

            <ContentBlock
                direction="left"
                title={Salesforce.title}
                content={Salesforce.text}
                button={Salesforce.button}
                icon="salesforce.png"
                id="salesforce"
                scrollPath="undefined"
            />

            <MiddleBlock
                title={WhyChooseUs.title}
                content={WhyChooseUs.text}
                button={WhyChooseUs.button}
                scrollPath="contact"
                id="whyChooseUs"
            />
            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
            />
        </Container>
    );
};

export default Home;
