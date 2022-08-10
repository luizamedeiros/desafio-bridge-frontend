import React from "react";
import email from "../../../assets/email.jpg";
import vercel from "../../../assets/vercel.jpg";
import github from "../../../assets/github.jpg";
import linkedin from "../../../assets/linkedin.webp";
import {
  EMAIL,
  LINKEDIN,
  EMAIL_LABEL,
  DEPLOYED_LINK,
  LINKEDIN_LABEL,
  GIT_BACKEND_LINK,
  GIT_FRONTEND_LINK,
  DEPLOYED_LINK_LABEL,
  GIT_BACKEND_LINK_LABEL,
  GIT_FRONTEND_LINK_LABEL,
} from "../terms.js";
import FakeButton from "./FakeButton";
import "../style.css";

const LinksDiv = () => {
  return (
    <div className="content">
      <FakeButton
        imgLink={vercel}
        hrefLink={DEPLOYED_LINK}
        buttonText={DEPLOYED_LINK_LABEL}
      />
      <FakeButton
        imgLink={github}
        hrefLink={GIT_BACKEND_LINK}
        buttonText={GIT_BACKEND_LINK_LABEL}
      />
      <FakeButton
        imgLink={github}
        hrefLink={GIT_FRONTEND_LINK}
        buttonText={GIT_FRONTEND_LINK_LABEL}
      />
      <FakeButton
        imgLink={linkedin}
        hrefLink={LINKEDIN}
        buttonText={LINKEDIN_LABEL}
      />
      <FakeButton
        imgLink={email}
        hrefLink={`mailto: ${EMAIL}`}
        buttonText={EMAIL_LABEL}
      />
    </div>
  );
};

export default LinksDiv;
