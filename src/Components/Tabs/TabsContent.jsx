import Now from "./Now";
import Details from "./Details";
import Forecast from "./Forecast";
export default function TabsContent({ selectTab }) {
  const select =
    selectTab === "Now" ? (
      <Now />
    ) : selectTab === "Details" ? (
      <Details />
    ) : (
      <Forecast />
    );

  return <div className='box__right-tab-content'>{select}</div>;
}
