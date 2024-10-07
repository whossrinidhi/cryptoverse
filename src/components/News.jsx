import React from "react";
import { useGetNewsQuery } from "../services/newsApi";
import { Row, Col, Card, Spin } from "antd";
const { Meta } = Card;
const News = ({ simplified }) => {
  const limit = simplified ? 4 : 12;
  const { data: news, isFetching } = useGetNewsQuery();
  if (isFetching) return <Spin />;
  return (
    <>
      <Row gutter={[10, 15]} className="news-card-container">
        {news?.items.slice(0, limit).map((news, index) => (
          <Col xs={24} sm={12} lg={12} key={index}>
            <Card
              hoverable
              className="news-card"
              style={{ width: 500 }}
              cover={<img src={news.thumbnailProxied} alt="news" />}
            >
              <a href={news.newsUrl} target="_blank">
                <Meta title={news.title} description={news.snippet} />
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
