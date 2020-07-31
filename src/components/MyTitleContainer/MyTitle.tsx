import React from 'react';
import TitlePagination from './TitlePagination';
import Fadein from '../../common/effect/Fadein';

const myTitles = [
  "A business systems analyst",
  "An UI/UX designer",
  "A creative web developer with the focus on frontend",
];

const MyTitle: React.FC = () => {
  const [index, setIndex] = React.useState(2);
  const handleChangeIndex = (idx: number) => {
    setIndex(idx);
  }
  React.useEffect(() => {
    setTimeout(() => {
      switch(index){
        case 0: setIndex(1); break;
        case 1: setIndex(2); break;
        case 2: setIndex(0); break;
      }
    }, 4000)
    console.log(index);
  })
  const styles = {
    slide: {
      color: '#fff',
      alignItems: 'right',
      justifyContent: 'center',
      display: 'flex',
      fontFamily: 'Julius Sans One',
      fontSize: '2vw',
    },
  };
  return (
    <React.Fragment>
      {
        myTitles.map(
          (title, i) => (
            (i === index) && 
              <Fadein>
                <span style={styles.slide}>{title}</span>
              </Fadein>
          )
        )
      }
      <div style={{ flexDirection: 'row' }}>
        {
          Array(myTitles.length).fill(0).map((_, i) => (
            <span onClick={() => handleChangeIndex(i)}>
              <TitlePagination selected={i === index}/>
            </span>
          ))
        }        
      </div>
    </React.Fragment>
  );
}

export default MyTitle;