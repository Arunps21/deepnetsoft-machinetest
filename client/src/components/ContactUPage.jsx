import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaBlenderPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import logo from "/dns.png";

function ContactUPage() {
  return (
    <>
      <Container fluid className="bg-black">
        <Row className="p-5 g-3">
          <Col lg={4} className="border rounded" align="center">
            <div className="p-3">
              <p className="text-info">CONNECT WITH US</p>
              <p className="text-white">
                <FaBlenderPhone className="text-warning" /> +91 9567843340
              </p>
              <p className="text-white">
                <CiMail className="text-warning" /> info@deepnetsoft.com
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            className="contactImg border rounded position-relative"
            align="center"
          >
            <img src={logo} alt="Company Logo" className="company-logo-top" />

            <div className="p-3 mt-5">
              <h2>
                <span className="text-primary">DEEP</span>
                <span className="text-white">NET</span>
                <span className="text-secondary">SOFT</span>
              </h2>
              <FiFacebook className="me-3 text-secondary" />
              <FaTwitter className="me-3 text-secondary" />
              <FaYoutube className="me-3 text-secondary" />
              <FiInstagram className="text-secondary" />
            </div>
          </Col>

          <Col lg={4} className="border rounded" align="center">
            <div className="p-3">
              <p className="text-info">FIND US</p>
              <p className="text-white">
                <CiLocationOn className="text-warning" /> First floor, Geo
                infopark,
              </p>
              <p className="text-white ms-4">Infopark EXPY, Kakkanad</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUPage;
