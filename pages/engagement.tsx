import React, { useState } from "react";
import MainLayout from "../core/MainLayout";
import { Col, Image, Row, Typography } from "antd";

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

function Engagement() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState<boolean>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visibleID, setVisibleID] = useState<number>();

  return (
    <MainLayout>
      <Typography.Title style={{ marginBottom: 50 }} level={1}>
        Çağlar Gelinlik Lüks Nişanlık Modelleri
      </Typography.Title>

      <Row>
        <Col lg={6} style={{ marginBottom: 10 }}>
          {" "}
          <Image
            alt=""
            preview={{ visible: false }}
            width={300}
            src={"/assets/img/" + "engagement.1.1.jpeg"}
            onClick={() => {
              setVisibleID(1);
              setVisible(true);
            }}
          />
        </Col>
        <Col lg={6} style={{ marginBottom: 10 }}>
          {" "}
          <Image
            alt=""
            preview={{ visible: false }}
            width={300}
            src={"/assets/img/" + "engagement.2.1.jpeg"}
            onClick={() => {
              setVisibleID(2);
              setVisible(true);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} style={{ marginBottom: 10 }}>
          {" "}
          <Image
            alt=""
            preview={{ visible: false }}
            width={300}
            src={"/assets/img/" + "engagement.3.1.jpeg"}
            onClick={() => {
              setVisibleID(3);
              setVisible(true);
            }}
          />
        </Col>

        <Col lg={6} style={{ marginBottom: 10 }}>
          {" "}
          <Image
            alt=""
            preview={{ visible: false }}
            width={300}
            src={"/assets/img/" + "engagement.4.3.jpeg"}
            onClick={() => {
              setVisibleID(4);
              setVisible(true);
            }}
          />
        </Col>
        <Col lg={6} style={{ marginBottom: 10 }}>
          {" "}
          <Image
            alt=""
            preview={{ visible: false }}
            width={300}
            src={"/assets/img/" + "engagement.5.1.jpeg"}
            onClick={() => {
              setVisibleID(5);
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
          {visibleID === 1 && collection("engagement", visibleID, 4)}
          {visibleID === 2 && collection("engagement", visibleID, 10)}
          {visibleID === 3 && collection("engagement", visibleID, 6)}
          {visibleID === 4 && collection("engagement", visibleID, 24)}
          {visibleID === 5 && collection("engagement", visibleID, 11)}
        </Image.PreviewGroup>
      </div>
    </MainLayout>
  );
}

export default Engagement;
