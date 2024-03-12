import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SubHeader = ({ title, path, current }) => {
  return (
    <header className="page-heading clearfix p-2 mt-4 d-flex align-items-center justify-content-center flex-column">
      <h1 className="heading-title float-left mb-0">{title}</h1>
      <div className="breadcrumbs float-right ">
        <ul className="breadcrumbs-list d-flex gap-4">
          <li>
            {path.map((pth, i) => (
              <Link to={pth.url} key={i}>{pth.label}</Link>
            ))}
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li className="current">{current}</li>
        </ul>
      </div>
    </header>
  );
};

export default SubHeader;
