function LinkImage({ source, alt, width, height, style }) {
  return (
    <img style={style} src={source} alt={alt} width={width} height={height} />
  );
}

export default LinkImage;
