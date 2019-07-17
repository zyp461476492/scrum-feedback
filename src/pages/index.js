import styles from './main.css';
import { Row, Col, Card, Timeline, Badge, Icon } from 'antd';

export default function () {
  return (
    <Row gutter={8} className={styles.wrapper}>
      <Col span={8} className={styles.item}>
        <div className={styles.itemHeader}>
          <div className={styles.left}>
            <Badge
              count={12}
              style={{ fontSize: '20px', verticalAlign: 'middle', backgroundColor: '#fff', color: '#999' }}
            />
            <Icon
              style={{ marginLeft: '5px', verticalAlign: 'middle', fontSize: '20px' }}
              type="smile"
              theme="twoTone"
              twoToneColor="#52c41a" />
          </div>
          <div className={styles.right}>
            <Icon
              style={{ marginRight: '5px', verticalAlign: 'middle', fontSize: '20px', cursor: 'pointer' }}
              type="plus-circle" />
          </div>
        </div>
        <div className={styles.itemBody}>
          <Timeline >
            <Timeline.Item color="green">
              <Card>
                <p>工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;</p>
              </Card>
            </Timeline.Item>
            <Timeline.Item color="green">
              <Card>
                <p>工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;</p>
              </Card>
            </Timeline.Item>
            <Timeline.Item color="green">
              <Card>
                <p>工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;</p>
              </Card>
            </Timeline.Item >
            <Timeline.Item color="green">
              <Card>
                <p>工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;</p>
              </Card>
            </Timeline.Item>
          </Timeline>
        </div>
      </Col>
      <Col span={8} className={styles.item}>
        <div className={styles.itemHeader}>
          <div className={styles.left}>
            <Badge
              count={2}
              style={{ fontSize: '20px', verticalAlign: 'middle', backgroundColor: '#fff', color: '#999' }}
            />
            <Icon style={{ marginLeft: '5px', verticalAlign: 'middle', fontSize: '20px' }} type="meh" theme="twoTone" />
          </div>
          <div className={styles.right}>
            <Icon style={{ marginRight: '5px', verticalAlign: 'middle', fontSize: '20px', cursor: 'pointer' }} type="plus-circle" />
          </div>
        </div>
        <div className={styles.itemBody}>
          <Timeline >
            <Timeline.Item>
              无数据
          </Timeline.Item>
          </Timeline>
        </div>
      </Col>
      <Col span={8} className={styles.item}>
        <div className={styles.itemHeader}>
          <div className={styles.left}>
            <Badge
              count={1}
              style={{ fontSize: '20px', verticalAlign: 'middle', backgroundColor: '#fff', color: '#999' }}
            />
            <Icon
              style={{ marginLeft: '5px', verticalAlign: 'middle', fontSize: '20px' }}
              type="frown"
              theme="twoTone"
              twoToneColor="red" />
          </div>
          <div className={styles.right}>
            <Icon
              style={{ marginRight: '5px', verticalAlign: 'middle', fontSize: '20px', cursor: 'pointer' }}
              type="plus-circle"
            />
          </div>
        </div>
        <div className={styles.itemBody}>
          <Timeline >
            <Timeline.Item color="red">
              无数据
          </Timeline.Item>
          </Timeline>
        </div>
      </Col>
    </Row>
  );
}
