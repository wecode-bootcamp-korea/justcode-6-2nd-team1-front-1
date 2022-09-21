import React, { useState, useEffect, useRef, PropsWithChildren } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  div.modal {
    position: absolute;
    width: 85%;
    height: 500px;
    background-color: ${theme.red};
    left: 50%;
    top: 50%;
    padding: 15px;
    transform: translate(-50%, -50%);
    z-index: 100;

    div.name {
      margin: 10px;
      img {
        width: 70px;
      }

      span.title {
        color: white;
        font-size: 23px;
        margin-left: 10px;
      }
      button {
        width: 30px;
        height: 30px;
        color: white;
        background-color: transparent;
        float: right;
        margin-top: 0;
        border: none;

        span {
          font-size: 20px;
        }
      }
    }
    div.map {
      height: 200px;
      background-color: gray;
      margin: 10px;
    }
    div.adress {
      height: 200px;
      background-color: white;
      margin: 10px;
      padding: 10px;

      th {
        width: 70px;
        font-size: 13px;
        font-weight: bold;
        margin-right: 10px;
        line-height: 30px;
      }

      td {
        width: 245px;
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
`;

interface ModalDefaultType {
  onClickModal: () => void;
}

const Modal = ({ onClickModal }: PropsWithChildren<ModalDefaultType>) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <StyledModal>
      <div className='container'>
        <div className='modal'>
          <div className='name'>
            <img src='http://www.gong-cha.co.kr/view/m/images/common/icon_new_p.png' />
            <span className='title'>하남 감일점</span>
            <button onClick={onClickModal}>
              <span>X</span>
            </button>
          </div>
          <div className='map'>지도</div>
          <div className='adress'>
            <tr>
              <th>주소</th>
              <td>경기 하남시 강일백제로 105, 102호 (감이동, 신성메디타워)</td>
            </tr>
            <tr>
              <th>영업시간</th>
              <td>7:00~23:00 / 마이티오더 운영 시간: 08:00~22:00</td>
            </tr>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
