import React from 'react';
import { connect } from 'dva';
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
  Button,
} from 'antd';

const { Text } = Typography;

const { TextArea } = Input;

const { Option } = Select;

/**
 * rxDocument 转换为对应的 obj
 * @param {Array} feedbackList
 */
const feedbackFilter = feedbackList => {
  const feedbackMap = {
    smile: [],
    meh: [],
    frown: [],
  };
  feedbackList.map(document => {
    const type = document.get('type');
    const feedback = document.get('feedback');
    feedbackMap[type].push(feedback);
    return true;
  });
  return feedbackMap;
};

const FeedbackCardList = props => {
  const { color, feedbackList } = props;
  const itemList = feedbackList.map((feedback, index) => {
    return (
      <Timeline.Item color={color} key={index}>
        <Card>
          <p>{feedback}</p>
        </Card>
      </Timeline.Item>
    );
  });
  const emptyInfo = () => {
    return (
      <Timeline.Item color={color}>
        <Card>
          <p>暂无数据</p>
        </Card>
      </Timeline.Item>
    );
  };

  if (feedbackList !== undefined && feedbackList.length > 0) {
    return <Timeline>{itemList}</Timeline>;
  } else {
    return <Timeline>{emptyInfo}</Timeline>;
  }
};

const FeedbackForm = Form.create({ name: 'feedbackForm' })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, confirmLoading } = this.props;
      const { getFieldDecorator } = form;
      const labelCol = { span: 4 };

      return (
        <Modal
          visible={visible}
          title="feedback"
          okText="Create"
          confirmLoading={confirmLoading}
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
    this.props.dispatch({
      type: 'feedback/showModal',
    });
  };

  handleCancel = () => {
    this.props.dispatch({
      type: 'feedback/hiddenModal',
    });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      // 保存数据
      this.props.dispatch({
        type: 'feedback/add',
        payload: values,
      });
      form.resetFields();
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const { smile, meh, frown } = feedbackFilter(this.props.list);
    return (
      <div>
        <Row gutter={8} className={styles.opWrapper}>
          <div className={styles.right}>
            <Button onClick={this.showModal} type="primary">
              新增
            </Button>
          </div>
        </Row>
        <Row gutter={8} className={styles.wrapper}>
          <FeedbackForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.props.visible}
            type={this.state.type}
            confirmLoading={this.props.loading}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
          <Col span={8} className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.left}>
                <Badge
                  count={smile.length}
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
                进步
                {/* <Icon
                  onClick={this.showModal}
                  style={{
                    marginRight: '5px',
                    verticalAlign: 'middle',
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                  type="plus-circle"
                /> */}
              </div>
            </div>
            <div className={styles.itemBody}>
              <FeedbackCardList feedbackList={smile} color="green" />
            </div>
          </Col>
          <Col span={8} className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.left}>
                <Badge
                  count={meh.length}
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
                无变化
                {/* <Icon
                  onClick={this.showModal}
                  style={{
                    marginRight: '5px',
                    verticalAlign: 'middle',
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                  type="plus-circle"
                /> */}
              </div>
            </div>
            <div className={styles.itemBody}>
              <FeedbackCardList feedbackList={meh} color="blue" />
            </div>
          </Col>
          <Col span={8} className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.left}>
                <Badge
                  count={frown.length}
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
                待改进
                {/* <Icon
                  onClick={this.showModal}
                  style={{
                    marginRight: '5px',
                    verticalAlign: 'middle',
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                  type="plus-circle"
                /> */}
              </div>
            </div>
            <div className={styles.itemBody}>
              <FeedbackCardList feedbackList={frown} color="red" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.feedback.feedbackList,
    visible: state.feedback.visible,
    loading: state.loading.models.feedback,
  };
}

export default connect(mapStateToProps)(MainComponent);
