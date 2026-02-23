import { Bar } from "./styled";
export function ProgressBar({ total, meta }) {
  const fill = (total / meta) * 100;

  return (
    <>
      <Bar className="bar">
        <div className="fill" style={{ width: `${fill}%` }}>
          <div className={`block active color1`}></div>
          <div className={`block active color2`}></div>
          <div className={`block active color1`}></div>
          <div className={`block active color2`}></div>
          <div className={`block active color1`}></div>
          <div className={`block active color2 last`}>
            <span className={"percentage"}>{fill.toFixed(0)}%</span>
          </div>
        </div>
      </Bar>
    </>
  );
}
