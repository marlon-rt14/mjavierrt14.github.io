import {ProjectTemplate} from "../components/shared/ProjectTemplate";

import imagen1 from "../assets/img/projects/rapientrega/imagen1.svg";
import imagen2 from "../assets/img/projects/rapientrega/imagen2.svg";
import imagen3 from "../assets/img/projects/rapientrega/imagen3.svg";
import imagen4 from "../assets/img/projects/rapientrega/imagen4.svg";
import imagen5 from "../assets/img/projects/rapientrega/imagen5.svg";
import imagen6 from "../assets/img/projects/rapientrega/imagen6.svg";
import imagen7 from "../assets/img/projects/rapientrega/imagen7.svg";
import imagen8 from "../assets/img/projects/rapientrega/imagen8.svg";
import imagen9 from "../assets/img/projects/rapientrega/imagen9.svg";

const GALLERY = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
];

export const RapientregaPage = () => {
  return (
    <ProjectTemplate type="gallery-project-mobile" title="Mobile Application">
      {GALLERY.map((img, ind) => {
        return (
          <div>
            <a href={img} target="_blank">
              <img src={img} alt={`image${ind}`} />
            </a>
          </div>
        );
      })}
    </ProjectTemplate>
  );
};