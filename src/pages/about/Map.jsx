import { useEffect, useRef } from "react";
import ThreeGlobe from "three-globe";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function GlobeInstance() {
  const globeRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const globe = new ThreeGlobe()
      // Using a more reliable image source
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .hexPolygonsData([]) // Ensures internal buffers are clean
      // Custom dot data to ensure something is rendered even if image fails
      .pointsData([
        { lat: 11.5564, lng: 104.9282, size: 0.2, color: "#9333ea" },
      ])
      .pointAltitude(0.01)
      .showAtmosphere(true)
      .atmosphereColor("#3b0764")
      .atmosphereAltitude(0.25);

    globeRef.current = globe;
    scene.add(globe);

    return () => {
      scene.remove(globe);
    };
  }, [scene]);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return null;
}

export default function DottedGlobe() {
  return (
    <div className="w-full h-full  bg-gray-400/80 rounded-2xl overflow-hidden relative">
      <Canvas
        camera={{ position: [0, 0, 300], fov: 40 }}
        style={{
          position: "absolute",
          bottom: "-35%",
          right: "-10%",
          width: "120%",
          height: "120%",
        }}
      >
        {/* Ambient light for general visibility */}
        <ambientLight intensity={20} />
        {/* Directional light to prevent the "Black Hole" effect */}
        <directionalLight position={[0, 10, 5]} intensity={2} />
        <GlobeInstance />
      </Canvas>
    </div>
  );
}
