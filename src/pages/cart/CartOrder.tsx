import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ErrorModal from '../../components/ErrorModal';
import Spinner from '../../components/Spinner';
import { OrderData } from '../../interface';
import theme from '../../theme';
import { toppingFromId } from '../../utils/toppingFromId';
import OrderList from './OrderList';

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #aaaaaa;
  margin: 20px 0;
`;

const StyledBtn = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 5vw;
  height: calc(8vw + 20px);
  background-color: ${theme.red};
  border: none;
  padding: 10px;
  color: white;

  &:disabled {
    background-color: #aaaaaa;
  }
`;

const StyledOrder = styled.div`
  padding: 10px 0px calc(8vw + 20px) 0px;

  div.container {
    padding: 10px;
  }

  h4 {
    margin-top: 40px;
    font-size: 6vw;

    &:first-of-type {
      margin-top: 20px;
    }
  }

  p {
    margin-top: 10px;
    font-size: 5vw;
  }

  div.caution {
    p {
      font-size: 4vw;
    }
  }

  div.receipt {
    margin-top: 20px;
    background-color: ${theme.grey};
    padding: 10px;

    p {
      display: flex;
      justify-content: space-between;

      span {
        color: ${theme.red};
      }

      &:first-of-type {
        margin-top: 0;
      }
    }
  }
`;

interface CartOrderProps {
  order: OrderData | undefined;
  selectList: number[];
}

const CartOrder = ({ order, selectList }: CartOrderProps) => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    if (!order) {
      navigate('/cart');
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  const cartPayHandler = async () => {
    setDisabled(true);

    try {
      await axios.patch<{ message: string }, AxiosResponse<{ message: string }>, { id: number }[]>(
        'http://localhost:8000/beverages/cartOrder',
        selectList.map(id => ({ id }))
      );

      navigate('/history');
    } catch (error) {
      console.log(error);
      setErrorModal(true);
    }
  };

  if (!order) {
    return <Spinner fixed={true} />;
  }

  return (
    <>
      {errorModal && <ErrorModal errorMessage='주문에 실패하였습니다.' errorModal={errorModal} setErrorModal={setErrorModal} />}
      <StyledOrder>
        <div className='container'>
          <h4>주문 정보</h4>
          <Line />
          <p>{order.userName}님</p>
          <p>{order.phone_number}</p>
          <h4>주문 매장</h4>
          <Line />
          <p>{order.address}</p>
          <h4>주문 옵션</h4>
          <Line />
          <p>{order.take_out ? '테이크아웃' : '매장'}</p>
          <h4>현재 포인트</h4>
          <Line />
          <p>{Number(order.point).toLocaleString()}원</p>

          <div className='caution'>
            <p>제휴사 혜택은 없습니다.</p>
          </div>

          <h4>최종 주문메뉴</h4>
          <Line />
          <ul>
            {order.beverageData
              .filter(beverageData => selectList.includes(beverageData.id))
              .map(beverageData => (
                <OrderList beverageData={beverageData} key={beverageData.id} />
              ))}
          </ul>
        </div>
        <div className='receipt'>
          <p>
            총 주문 금액 <span>{order.totalPrice.toLocaleString()}원</span>
          </p>
          <p>
            총 할인 금액 <span>0원</span>
          </p>
          <Line />
          <p>
            총 결제 금액<span>{order.totalPrice.toLocaleString()}원</span>
          </p>
        </div>
        <StyledBtn disabled={disabled} onClick={cartPayHandler}>
          {disabled ? <Spinner /> : '결제하기'}
        </StyledBtn>
      </StyledOrder>
    </>
  );
};

export default CartOrder;
