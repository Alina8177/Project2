const Image = ({ width, height, alt, styles, className, src }) => {
  return (
    <img
      src={src}
      className={className}
      style={{
        width: width,
        height: height,
        ...styles,
      }}
      alt={alt}
    />
  );
};

export default Image;
