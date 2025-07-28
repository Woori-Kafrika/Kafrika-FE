import React from 'react';
import '../../styles/ServiceDelayModal.css';

interface ServiceDelayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDelayModal: React.FC<ServiceDelayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-illustration">
          <div className="bee-character">
            <div className="bee-body">
              <div className="bee-stripes"></div>
            </div>
            <div className="bee-wings">
              <div className="wing left"></div>
              <div className="wing right"></div>
            </div>
            <div className="bee-eyes">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="bee-wrench">🔧</div>
          </div>
        </div>
        
        <div className="modal-text">
          <h2 className="modal-title">거래지연 안내</h2>
          <div className="modal-description">
            <p>현재 일시적인 거래 집중으로 서비스 접속이 지연되고 있습니다.</p>
            <p>잠시 후 다시 이용해 주시기 바랍니다.</p>
            <p>이용에 불편을 드려 죄송합니다.</p>
          </div>
        </div>
        
        <button className="modal-button" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ServiceDelayModal; 