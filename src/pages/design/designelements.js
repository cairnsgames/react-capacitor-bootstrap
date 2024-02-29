import Alerts from "./alerts";
import Accordians from "./accordians";
import Badges from "./badges";
import Breadcrumbs from "./breadcrumbs";
import ButtonGroups from "./buttongroups";
import useLocation from "../../hooks/uselocation";

const DesignElements = () => {
  const { hash } = useLocation();

  if (hash.includes("accordian")) {
    return <Accordians />;
  }
  if (hash.includes("alert")) {
    return <Alerts />;
  }
  if (hash.includes("badge")) {
    return <Badges />;
  }
  if (hash.includes("breadcrumb")) {
    return <Breadcrumbs />;
  }
  if (hash.includes("buttongroup")) {
    return <ButtonGroups />;
  }
  return (
    <>
      <a href="#design/accordian">Accordians</a>
      <br />
      <a href="#design/alert">Alerts</a>
      <br />
      <a href="#design/badge">Badges</a>
      <br />
      <a href="#design/breadcrumb">Breadcrumbs</a>
      <br />
      <a href="#design/buttongroup">Button Groups</a>
      <br />
    </>
  );
};

export default DesignElements;
