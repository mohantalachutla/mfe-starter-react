const Container = ({ children, size }) => {
  const classes = [`container${size ? '-' + size : ''}`];
  return <div className={classes.join(' ')}>{children}</div>;
};

export default Container;
