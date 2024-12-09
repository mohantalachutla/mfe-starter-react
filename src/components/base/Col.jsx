export const Col = ({ children, size, offset, className }) => {
  const classes = [
    `col${size ? '-' + size : ''}${offset ? '-' + offset : ''}`,
    className,
  ].filter(Boolean);
  return (
    <div className={classes.join(' ')} id="col">
      {children}
    </div>
  );
};
