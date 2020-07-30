import React from 'react';

interface TitlePaginationProps {
  selected: boolean;
  onClick?: () => void;
}
const TitlePagination: React.FC<TitlePaginationProps> = (props) => {
  const {selected} = props;
  const styles = {
    dot: {
      cursor: 'pointer',
      height: '10px',
      width: '10px',
      margin: '6vh 1.5vw 0 1.5vw',
      backgroundColor: '#A47786',
      borderRadius: '50%',
      display: 'inline-block',
      transition: 'backgroundColor 0.6s ease',
    },
    activeDot: {
      cursor: 'pointer',
      height: '10px',
      width: '10px',
      margin: '6vh 1.5vw 0 1.5vw',
      backgroundColor: '#F1E6C8',
      borderRadius: '50%',
      display: 'inline-block',
      transition: 'backgroundColor 0.6s ease',
    },
  };
  return (
    <div style={selected? styles.activeDot : styles.dot}/>
  );
};

export default TitlePagination;