export default function PadderDiv({ height, width, className }) {
  return (
    <div
      className={className}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    ></div>
  );
}
