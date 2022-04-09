import { Col, Row, Image, Typography } from "antd";
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

function Bride() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState<boolean>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visibleID, setVisibleID] = useState<number>();

  return (
    <MainLayout>
      <Typography.Title style={{ marginBottom: 50 }} level={1}>
        Çağlar Gelinlik Lüks Gelinlik Modelleri
      </Typography.Title>

      <Row justify="center" gutter={30} style={{ marginBottom: 30 }}>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="sultanbey gelinlik"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.1.1.jpeg"}
            onClick={() => {
              setVisibleID(1);
              setVisible(true);
            }}
          />
        </Col>
      </Row>
      <Row justify="center" gutter={30} style={{ marginBottom: 20 }}>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="sultan gelinlik"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.6.7.jpeg"}
            onClick={() => {
              setVisibleID(6);
              setVisible(true);
            }}
          />
        </Col>

        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="sultan gelinlik"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.10.1.jpeg"}
            onClick={() => {
              setVisibleID(10);
              setVisible(true);
            }}
          />
        </Col>

        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="denizi gelinlik"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.7.5.jpeg"}
            onClick={() => {
              setVisibleID(7);
              setVisible(true);
            }}
          />
        </Col>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="çağlar gelinlik"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.4.1.jpeg"}
            onClick={() => {
              setVisibleID(4);
              setVisible(true);
            }}
          />
        </Col>
      </Row>

      <Row justify="center" gutter={30} style={{ marginBottom: 30 }}>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="sultanbeyli televizyona çıkan gelinlikçi"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.5.4.jpeg"}
            onClick={() => {
              setVisibleID(5);
              setVisible(true);
            }}
          />
        </Col>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="sultanbeyli ünlü gelinlikçi"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.3.10.jpeg"}
            onClick={() => {
              setVisibleID(3);
              setVisible(true);
            }}
          />
        </Col>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="sultanbeylinin en iyi kuaförü"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.8.4.jpeg"}
            onClick={() => {
              setVisibleID(8);
              setVisible(true);
            }}
          />
        </Col>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="gelinlikte bir numara"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.9.4.jpeg"}
            onClick={() => {
              setVisibleID(9);
              setVisible(true);
            }}
          />
        </Col>
      </Row>

      <Row justify="center" gutter={30}>
        <Col lg={6} style={{ marginBottom: 10 }}>
          <Image
            alt="sultanbeyli en iyi gelinlikçi"
            preview={{ visible: false }}
            width={250}
            src={"/assets/img/" + "bride.2.1.jpeg"}
            onClick={() => {
              setVisibleID(2);
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
          {visibleID === 1 && collection("bride", visibleID, 5)}
          {visibleID === 2 && collection("bride", visibleID, 1)}
          {visibleID === 3 && collection("bride", visibleID, 10)}
          {visibleID === 4 && collection("bride", visibleID, 3)}
          {visibleID === 5 && collection("bride", visibleID, 4)}
          {visibleID === 6 && collection("bride", visibleID, 9)}
          {visibleID === 7 && collection("bride", visibleID, 12)}
          {visibleID === 8 && collection("bride", visibleID, 8)}
          {visibleID === 9 && collection("bride", visibleID, 4)}
          {visibleID === 10 && collection("bride", visibleID, 1)}
        </Image.PreviewGroup>
      </div>
    </MainLayout>
  );
}

export default Bride;
