import React from "react";
import { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Spin } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  if (isFetching) return <Spin />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="search cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                hoverable
                extra={
                  <img
                    className="crypto-img"
                    src={currency.iconUrl}
                    alt="cryptologo"
                    style={{ width: "2rem" }}
                  />
                }
              >
                <p>Price:{millify(currency.price)}</p>
                <p>Market Cap:{millify(currency.marketCap)}</p>
                <p>Daily change:{millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
