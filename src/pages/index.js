import React from 'react';
import styles from './main.css';
import {
  Badge,
  Card,
  Col,
  Form,
  Icon,
  Input,
  Modal,
  Row,
  Select,
  Timeline,
  Typography,
} from 'antd';

const { Text } = Typography;

const { TextArea } = Input;

const { Option } = Select;

const FeedbackForm = Form.create({ name: 'feedbackForm' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const labelCol = { span: 4 };

      return (
        <Modal
          visible={visible}
          title="feedback"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form labelAlign="right" labelCol={labelCol}>
            <Form.Item label="feedback">
              {getFieldDecorator('feedback', {
                rules: [{ required: true, message: '请输入反馈信息' }],
              })(<TextArea rows={4} />)}
            </Form.Item>
            <Form.Item label="类型">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '请输入反馈信息' }],
              })(
                <Select style={{ width: 120 }}>
                  <Option value="smile">
                    <Icon
                      style={{ marginRight: '5px' }}
                      type="smile"
                      theme="twoTone"
                      twoToneColor="green"
                    />
                    <Text strong>J (好的)</Text>
                  </Option>
                  <Option value="meh">
                    <Icon style={{ marginRight: '5px' }} type="meh" theme="twoTone" />
                    <Text strong>K (一般)</Text>
                  </Option>
                  <Option value="frown">
                    <Icon
                      style={{ marginRight: '5px' }}
                      type="frown"
                      theme="twoTone"
                      twoToneColor="red"
                    />
                    <Text strong>L (不好)</Text>
                  </Option>
                </Select>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class MainComponent extends React.Component {
  state = {
    visible: false,
    type: 'smile',
  };

  showModal = type => {
    // this.formRef.props.form.setFieldsValue({ type: type });
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <Row gutter={8} className={styles.wrapper}>
        <FeedbackForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          type={this.state.type}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <Col span={8} className={styles.item}>
          <div className={styles.itemHeader}>
            <div className={styles.left}>
              <Badge
                count={12}
                style={{
                  fontSize: '20px',
                  verticalAlign: 'middle',
                  backgroundColor: '#fff',
                  color: '#999',
                }}
              />
              <Icon
                style={{ marginLeft: '5px', verticalAlign: 'middle', fontSize: '20px' }}
                type="smile"
                theme="twoTone"
                twoToneColor="#52c41a"
              />
            </div>
            <div className={styles.right}>
              <Icon
                onClick={this.showModal}
                style={{
                  marginRight: '5px',
                  verticalAlign: 'middle',
                  fontSize: '20px',
                  cursor: 'pointer',
                }}
                type="plus-circle"
              />
            </div>
          </div>
          <div className={styles.itemBody}>
            <Timeline>
              <Timeline.Item color="green">
                <Card>
                  <p>
                    工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;
                  </p>
                </Card>
              </Timeline.Item>
              <Timeline.Item color="green">
                <Card>
                  <p>
                    工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;
                  </p>
                </Card>
              </Timeline.Item>
              <Timeline.Item color="green">
                <Card>
                  <p>
                    工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;
                  </p>
                </Card>
              </Timeline.Item>
              <Timeline.Item color="green">
                <Card>
                  <p>
                    工作内容更明确;工作规划更详细;工作划分帮助理清思路;站会让每天都有总结，及时沟通进度与问题;
                  </p>
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
                style={{
                  fontSize: '20px',
                  verticalAlign: 'middle',
                  backgroundColor: '#fff',
                  color: '#999',
                }}
              />
              <Icon
                style={{ marginLeft: '5px', verticalAlign: 'middle', fontSize: '20px' }}
                type="meh"
                theme="twoTone"
              />
            </div>
            <div className={styles.right}>
              <Icon
                onClick={this.showModal}
                style={{
                  marginRight: '5px',
                  verticalAlign: 'middle',
                  fontSize: '20px',
                  cursor: 'pointer',
                }}
                type="plus-circle"
              />
            </div>
          </div>
          <div className={styles.itemBody}>
            <Timeline>
              <Timeline.Item>无数据</Timeline.Item>
            </Timeline>
          </div>
        </Col>
        <Col span={8} className={styles.item}>
          <div className={styles.itemHeader}>
            <div className={styles.left}>
              <Badge
                count={1}
                style={{
                  fontSize: '20px',
                  verticalAlign: 'middle',
                  backgroundColor: '#fff',
                  color: '#999',
                }}
              />
              <Icon
                style={{ marginLeft: '5px', verticalAlign: 'middle', fontSize: '20px' }}
                type="frown"
                theme="twoTone"
                twoToneColor="red"
              />
            </div>
            <div className={styles.right}>
              <Icon
                onClick={this.showModal}
                style={{
                  marginRight: '5px',
                  verticalAlign: 'middle',
                  fontSize: '20px',
                  cursor: 'pointer',
                }}
                type="plus-circle"
              />
            </div>
          </div>
          <div className={styles.itemBody}>
            <Timeline>
              <Timeline.Item color="red">无数据</Timeline.Item>
            </Timeline>
          </div>
        </Col>
      </Row>
    );
  }
}

export default function() {
  return <MainComponent />;
}
