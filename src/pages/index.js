import styles from './main.css';
import { Row, Col, Card } from 'antd';

export default function () {
  return (
    <Card bordered={false} className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        <Row  gutter={8}>
          <Col span={8} className={styles.scroll}>
              <Card className={styles.grayDiv}>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<p>More</p>}
                >
                  Inner Card content
             </Card>
              </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card title="Card title" className={styles.grayDiv}>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"

                extra={<p>More</p>}
              >
                Inner Card content
             </Card>
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card title="Card title" className={styles.grayDiv}>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card> <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<p>More</p>}
              >
                Inner Card content
             </Card>

            </Card>
          </Col>
        </Row>
      </div>
    </Card>

  );
}
