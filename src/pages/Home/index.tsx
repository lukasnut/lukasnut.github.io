import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import SolutionContent from "../../content/SolutionContent.json";
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
            direction="right"
            title={IntroContent.title}
            content={IntroContent.text}
            button={IntroContent.button}
            id="intro"
            img="/img/Introoo.gif"
          />
      
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />

      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
        img="/img/Close-Up.jpg"
      />

      <ContentBlock
        direction="right"
        title={ProductContent.title}
        content={ProductContent.text}
        id="product"
        carousel={{
          images: [
            '/img/products/Aruba.jpg',
            '/img/products/Axis.jpg',
            '/img/products/Milestone.jpg',
            '/img/products/Solarwinds.jpg',
            '/img/products/Sangfor.jpg'
          ],
          autoplay: true,
          delay: 3000,
          navigation: true,
          pagination: true,
        }}
      />

      <ContentBlock
        direction="left"
        title={SolutionContent.title}
        content={SolutionContent.text}
        id="service"
        carousel={{
          images: [
            '/img/Test3.jpg',
            '/img/Test2.jpg',
            '/img/Test1.jpg'
          ],
          autoplay: true,
          delay: 3000,
          navigation: true,
          pagination: true,
        }}
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
