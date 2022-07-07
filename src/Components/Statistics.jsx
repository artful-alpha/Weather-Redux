import { useSelector } from "react-redux/es/exports";
import { getStatisticState } from "../Redux/selectors/selectors";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setIncrementCitySearch } from "../Redux/actions/statisticAction";
import { useEffect } from "react";

export function Statistics() {
  const statisticsInfo = useSelector(getStatisticState);

  const dispatch = useDispatch();
  console.log(statisticsInfo);

  const addCoutnSearchCity = (e) => {
    const value = e.target.innerText;
    dispatch(setIncrementCitySearch(value));
  };

  let info = "";

  for (let key in statisticsInfo) {
    info += `${key} : ${statisticsInfo[key]}  `;
  }

  return (
    <>
      <div className='statistics'>
        <p>This Paragraph Statistics</p>
        <button onClick={addCoutnSearchCity}> Ann </button>

        <button onClick={addCoutnSearchCity}> Java </button>
      </div>
      <div className='statistics'>{info}</div>
    </>
  );
}
