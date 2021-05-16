import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import {Button, InputNumber, Row, Col, Typography} from 'antd'

const { Title } = Typography;

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('1');

  return (
    <>
      <Row justify='middle' align='right'>
        <Col span={8} offset={8}>
          <Row justify='space-around' align='middle'>
            <Col span={4}>
              <Button
                type="default"
                onClick={() => dispatch(increment())}
              >+</Button>
            </Col>
            <Col span={4} align='center' >
              <Title>{count}</Title>
            </Col>
            <Col span={4}>
              <Button
                type="default"
                onClick={() => dispatch(decrement())}
              >-</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className={styles.row}>
        <InputNumber
          size="large"
          value={incrementAmount}
          onChange={value => setIncrementAmount(value)}
          onStep={e => (value, info) => {
            const { type } = info;
            switch (type) {
              case 'up': setIncrementAmount(value); break;
              case 'down': setIncrementAmount(value); break;
              default: return;
            };
          }}
        />
        <Button
          type="default"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >Add Amount</Button>
        <Button
          type="loading"
          onClick={() =>
            dispatch(incrementAsync(Number(incrementAmount) || 0))
          }
        >Add Async</Button>
      </div>
    </>
  )
}
