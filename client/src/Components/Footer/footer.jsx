import "./footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bottom">
      <div className="bottom-inside">
        <a
          className="iconBottom"
          href="https://www.linkedin.com/in/micael-alessandro-gomez-8895a518b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        <a
          className="iconBottom"
          href="https://github.com/micaelgomez"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>

      <div className="bottom-inside-inside">
        ©2021 - Individual Project by Micael A. Gomez in henry bootcamp -
      </div>
    </div>
  );
}
