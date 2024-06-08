import "./Ar.css";
import React, { useState } from "react";
import {
  ZapparCanvas,
  ZapparCamera,
  ImageTracker,
  Loader,
} from "@zappar/zappar-react-three-fiber";
function Ar() {
  const targetFile = new URL("../../assets/track-target.zpt", import.meta.url)
    .href;
  const [visible, setVisibility] = useState(false);
  return (
    <ZapparCanvas>
      <ZapparCamera />
      <ImageTracker
        onVisible={(anchor) => {
          console.log(`Visible ${anchor.id}`);
          setVisibility(true);
        }}
        onNotVisible={(anchor) => {
          console.log(`Not Visible ${anchor.id}`);
          setVisibility(false);
        }}
        onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
        targetImage={targetFile}
      >
        <mesh visible={visible}>
          <boxGeometry />
          <meshStandardMaterial color={"red"} transparent={true} />
        </mesh>
      </ImageTracker>
      <directionalLight position={[2.5, 8, 5]} intensity={2.5} />
      <Loader />
    </ZapparCanvas>
  );
}

export default Ar;
