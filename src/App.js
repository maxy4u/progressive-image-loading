import "./styles.css";
import image from "./images/large.jpg";
import thumbnailSrc from "./images/tiny.jpeg";
import { ProgressiveImage } from "./Components";

export default function App() {
  return (
    <div className="App">
      <h1>Progressive image loading example</h1>
      <ProgressiveImage
        src={image}
        thumbnailSrc={thumbnailSrc}
        width="700"
        height="465"
      />
    </div>
  );
}
