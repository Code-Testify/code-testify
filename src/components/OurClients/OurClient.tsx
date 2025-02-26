import { Row } from "antd";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { ContentWrapper } from "../ContentBlock/styles";
import { SvgIcon } from "../../common/SvgIcon";

interface ourClientsProps {
  title: string;
  content: string;
  clientLogos: {
    id: number;
    name: string;
    logoUrl: string;
  }[];
  id: string;
}

const OurClient = ({ title, content, clientLogos, id }: ourClientsProps) => {
  return (
    <div>
      <Slide direction="up" triggerOnce>
        <Row
          justify="center"
          align="middle"
          id={id}
          style={{
            width: "100%",
          }}
        >
          <ContentWrapper
            style={{
              textAlign: "center",
            }}
          >
            <h6>{title}</h6>
            <p style={{ maxWidth: "768px", margin: "auto " }}>{content}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              {clientLogos.map((logo, index) => (
                <SvgIcon
                  key={index}
                  src={logo.logoUrl}
                  width="150px"
                  height="150px"
                />
              ))}
            </div>
          </ContentWrapper>
        </Row>
      </Slide>
    </div>
  );
};

export default OurClient;
