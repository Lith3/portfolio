import Contact from "./contact/Contact";
import Mail from "../../assets/images/envelope.svg";
import Github from "../../assets/images/github-mark.svg";
import Linkedin from "../../assets/images/linkedin.svg";

export default function Contacts() {
  return (
    <div>
      <Contact
        logo={Mail}
        alt={"enveloppe"}
        text={"jorisbudin@gmail.com"}
        link={"mailto:jorisbudin@gmail.com"}
      />
      <Contact
        logo={Github}
        alt={"logo de Github"}
        text={"Mon Github"}
        link={"https://github.com/Lith3"}
      />
      <Contact
        logo={Linkedin}
        alt={"logo linkedin"}
        text={"Mon Linkedin"}
        link={"https://www.linkedin.com/in/joris-budin/"}
      />
    </div>
  );
}
