import { Typography, Image, Row, Col } from "antd";
import React from "react";
import MainLayout from "../core/MainLayout";

function Fashion() {
  return (
    <MainLayout>
      <Typography.Title style={{ marginBottom: 50 }} level={1}>
        Çağlar Gelinlik Defilesi
      </Typography.Title>

      <Row>
        <Col lg={6} style={{ marginBottom: 10 }}>
          {" "}
          <Image
            preview={false}
            alt=""
            width={"150%"}
            src={"/assets/img/" + "fashion.1.5.jpeg"}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <Image
            preview={false}
            alt=""
            width={300}
            src={"/assets/img/" + "fashion.1.1.jpeg"}
          />
        </Col>
        <Col md={12} lg={6}>
          <Image
            preview={false}
            alt=""
            width={"100%"}
            src={"/assets/img/" + "fashion.1.2.jpeg"}
          />
        </Col>
        <Col md={12} lg={6}>
          <Image
            preview={false}
            alt=""
            width={"150%"}
            src={"/assets/img/" + "fashion.1.3.jpeg"}
          />
        </Col>
        <Col md={12} lg={6}>
          <Image
            preview={false}
            alt=""
            width={"150%"}
            src={"/assets/img/" + "fashion.1.4.jpeg"}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <Image
            preview={false}
            alt=""
            width={"150%"}
            src={"/assets/img/" + "fashion.1.6.jpeg"}
          />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Fashion;
