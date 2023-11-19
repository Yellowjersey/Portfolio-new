import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiCodesandbox,
  SiVisualstudiocode,
  SiCodepen,
  SiPostman,
  SiHeroku,
  SiGithub,
  SiVercel,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiBlender,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: 'center',
        paddingBottom: '50px',
        display: 'flex',
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <p>PhotoShop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
        <p>Illustrator</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
        <p>Blender</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
