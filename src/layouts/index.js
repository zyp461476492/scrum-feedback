import styles from './index.css';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

function BasicLayout(props) {
  return (
    <LocaleProvider locale={zhCN} className={styles.container}>
      {props.children}
    </LocaleProvider>
  );
}

export default BasicLayout;
