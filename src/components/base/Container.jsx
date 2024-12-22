const Container = ({
  children,
  size,
  mxAuto = true,
  px = '4',
  flex = 'col',
  bg = 'inherit',
}) => {
  const classes = [
    'relative',
    `${size ? size + ':' : ''}container`,
    'min-h-32',
    'min-w-32',
    'text-center',
  ];
  flex && classes.push(`flex flex-${flex} flex-wrap justify-around gap-4`);
  mxAuto && classes.push('mx-auto');
  classes.push('px-' + px);
  bg && classes.push('bg-' + bg);
  return <div className={classes.join(' ')}>{children}</div>;
};

export default Container;
