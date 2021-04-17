import React from 'react';
import "../style/SidePagination.scss";

interface SidePaginationProps {
  selected?: boolean;
  onClick?: () => void;
}

const SidePagination: React.FC = (props) => {
  const styles = {
    outline_pag: {
      fill: 'none',
      stroke: '#807f81',
      strokeMiterlimit: 10,
    },
    center_pag: {
      fill: '#807f81',
    }
  }
  return (
    <div className="nav">
      <a className="nav__wrap">
        <svg className="paginator__dot" viewBox="0 0 30 30" width="30" height="30">
          <g className="menu__anchor">
            <circle id="outline__pag" className="outline__pag" cx="15" cy="15" r="10.97"/>
            <circle id="center__pag" className="center__pag" cx="15" cy="15" r="3.09"/>
            <circle id="mask__pag" className="mask__pag" cx="16" cy="16" r="12.5"/>
          </g>
        </svg>
      </a>
    </div>
  );
};

export default SidePagination;