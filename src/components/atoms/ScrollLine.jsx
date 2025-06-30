import { useEffect } from "preact/hooks";
import { animate, scroll } from "motion";

export default function ScrollLine() {
  useEffect(() => {
    const projectsContainer = document.getElementById("border-projects");
    const line = document.getElementById("line");

    if (!projectsContainer || !line) return;

    const animation = animate(
      line,
      { height: ["100%", "50%", "0%"] },
      { ease: "linear" }
    );

    scroll(animation, {
      target: projectsContainer,
      offset: ["center start", "center center", "center end"],
    });
  }, []);

  return null;
}
