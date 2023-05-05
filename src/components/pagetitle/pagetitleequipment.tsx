import React from 'react';

const styles = {
  textDiv: {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: '4rem',
    fontFamily: 'Consolas',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '2%',
  },
};

const Titler: React.FC = () => {
  return (
    <div style={styles.textDiv}>
      <h1 style={styles.title}>Equipment calculator</h1>
    </div>
  );
};

export default Titler;