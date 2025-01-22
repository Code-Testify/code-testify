import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import WhatWeDo from "../../content/WhatWeDo.json";
import Services from "../../content/Services.json";
import Salesforce from "../../content/Salesforece.json";
import WhyChooseUs from "../../content/WhyChooseUs.json";
import ContactContent from "../../content/ContactContent.json";
import OurClients from "../../content/OurClients.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const OurClient = lazy(() => import("../../components/OurClients/OurClient"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        scrollPath="whatWeDo"
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={WhatWeDo.title}
        content={WhatWeDo.text}
        button={WhatWeDo.button}
        scrollPath="services"
        id="whatWeDo"
      />
      <ContentBlock
        direction="right"
        title={Services.title}
        content={Services.text}
        section={Services.section}
        scrollPath="services"
        icon="graphs.svg"
        id="services"
      />
      <ContentBlock
        direction="left"
        title={Salesforce.title}
        content={Salesforce.text}
        button={Salesforce.button}
        icon="salesforce.png"
        id="salesforce"
        scrollPath="undefined"
      />
      <OurClient
        id="ourClients"
        title={OurClients.title}
        content={OurClients.content}
        clientLogos={OurClients.clientLogos}
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
