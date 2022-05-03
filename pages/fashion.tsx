import { Typography, Image, Row, Col } from "antd";
import React, { useState } from "react";
import MainLayout from "../core/MainLayout";

const alt_array: string[] = [
  "en iyi gelinlik",
  "sultanbeli gelinlik",
  "denizi gelinlik",
  "çağlar gelinlik",
  "sultanbeyli en iyi gelinlikçi",
  "sultanbeyli televizyona çıkan gelinlikçi",
  "sultanbeyli ünlü gelinlikçi",
  "sultanbeylinin en iyi kuaförü",
  "gelinlikte bir numara",
];

const group = (name: string, index: number, count: number) => {
  const arr: string[] = [];
  let i = 1;

  for (i; i < count + 1; i++) {
    arr.push("/assets/img/" + `${name}.${index}.${i}.jpeg`);
  }

  return arr;
};

const collection = (name: string, index: number, count: number) =>
  group(name, index, count).map((image_url, key) => (
    <Image alt={alt_array[index]} key={key} src={image_url} />
  ));

function Fashion() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState<boolean>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visibleID, setVisibleID] = useState<number>();

  return (
    <MainLayout>
      <Typography.Title style={{ marginBottom: 50 }} level={1}>
        Çağlar Gelinlik Defilesi
      </Typography.Title>

      <Row>
        <Col md={12} lg={6} style={{ marginBottom: 10 }}>
          <Image
            preview={{ visible: false }}
            alt="gelinlik modeller"
            width={300}
            src={"/assets/img/" + "fashion.1.1.jpeg"}
            onClick={() => {
              setVisibleID(1);
              setVisible(true);
            }}
          />
        </Col>
        <Col md={12} lg={6} style={{ marginBottom: 10 }}>
          <Image
            preview={{ visible: false }}
            alt="denizi gelinlik"
            width={300}
            src={"/assets/img/" + "fashion.1.2.jpeg"}
            onClick={() => {
              setVisibleID(1);
              setVisible(true);
            }}
          />
        </Col>
        <Col md={12} lg={6} style={{ marginBottom: 10 }}>
          <Image
            preview={{ visible: false }}
            alt="hasret"
            width={300}
            src={"/assets/img/" + "fashion.1.3.jpeg"}
            onClick={() => {
              setVisibleID(1);
              setVisible(true);
            }}
          />
        </Col>
        <Col md={12} lg={6} style={{ marginBottom: 10 }}>
          <Image
            preview={{ visible: false }}
            alt="çağlar gelinlik"
            width={300}
            src={"/assets/img/" + "fashion.1.4.jpeg"}
            onClick={() => {
              setVisibleID(1);
              setVisible(true);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} style={{ marginBottom: 10 }}>
          <Image
            preview={{ visible: false }}
            alt="denizi gelinlik"
            width={300}
            src={"/assets/img/" + "fashion.1.6.jpeg"}
            onClick={() => {
              setVisibleID(1);
              setVisible(true);
            }}
          />
        </Col>
      </Row>

      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {visibleID === 1 && collection("fashion", visibleID, 6)}
        </Image.PreviewGroup>
      </div>
    </MainLayout>
  );
}

export default Fashion;
