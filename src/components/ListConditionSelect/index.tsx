import { ListCondition } from "../../modules/list";
import "./index.css";


interface Props {
  condition: ListCondition;
  onChange: (count: number) => void;
}

export const ListConditionSelect: React.FC<Props> = ({
  condition, onChange,
}) => {
  return (
    <div className="conditionSelectOuter">
      <label htmlFor="listConditionCount">count</label>
      <select
        id="listConditionCount"
        onChange={(e) => onChange(Number(e.target.value))}
        value={condition.count}
      >
        <option value={3}>3</option>
        <option value={6}>6</option>
        <option value={9}>9</option>
      </select>
    </div>
  );
};
