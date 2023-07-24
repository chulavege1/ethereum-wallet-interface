import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import "./defaultCanvas0.scss";

import sunImage from "./sun.jpeg";
import moonImage from "./moon.jpeg";

const createGradientTexture = (shift) => {
  const width = 2;
  const height = 256;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");

  shift = shift % 1;

  const scene = new THREE.Scene();

  const spaceGeometry = new THREE.SphereGeometry(500, 32, 32);
  // Цвета на ваш выбор, примерно представляющие космические темы
  const colors = [
    new THREE.Color("#000002"), // очень темно-синий
    new THREE.Color("#000012"), // темно-черный
    new THREE.Color("#0A000C"), // фиолетовый
    new THREE.Color("#021200"), // фиолетовый
  ];
  const color1 = colors[Math.floor(shift * colors.length)];
  const color2 =
    colors[(Math.floor(shift * colors.length) + 1) % colors.length];
  const color = color1
    .clone()
    .lerp(color2, shift * colors.length - Math.floor(shift * colors.length));

  context.fillStyle = `#${color.getHexString()}`;
  context.fillRect(0, 0, width, height);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const Sun = () => {
  const [theme, setTheme] = React.useState("sun");
  const mountRef = useRef();
  const celestialBodyRef = useRef(null);
  const rendererRef = useRef(null);
  const materialsRef = useRef({});
  const texturesRef = useRef({});
  const geometriesRef = useRef({});
  const starsRef = useRef([]);

  const [intensity, setIntensity] = React.useState(1);
  const intensityRef = useRef(1);
  const [themeTransitioning, setThemeTransitioning] = useState(false);
  const [themeChangeRequested, setThemeChangeRequested] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();

    const colors = [
      new THREE.Color("#1c0706"), //
      new THREE.Color("#170b00"), //
      new THREE.Color("#000b17"), //
      new THREE.Color("#0c0017"), //
    ];

    const spaceGeometry = new THREE.SphereGeometry(500, 32, 32);
    let i = 0;
    const spaceMaterial = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
    });
    const space = new THREE.Mesh(spaceGeometry, spaceMaterial);
    scene.add(space);

    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      1,
      1000,
    );
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load(sunImage);
    const moonTexture = textureLoader.load(moonImage);

    texturesRef.current = { sunTexture, moonTexture };

    const sunMaterial = new THREE.MeshLambertMaterial({
      map: sunTexture,
      emissive: 0xfcba03,
      emissiveMap: sunTexture,
      emissiveIntensity: 1,
    });

    const moonMaterial = new THREE.MeshLambertMaterial({
      map: moonTexture,
      emissive: 0x808080,
      emissiveMap: moonTexture,
      emissiveIntensity: 0.2,
    });

    const light = new THREE.DirectionalLight(0xffffff, 0.2);
    scene.add(light);

    materialsRef.current = { sunMaterial, moonMaterial };

    const celestialBodyGeometry = new THREE.SphereGeometry(125, 64, 64);
    const starsGeometry = new THREE.SphereGeometry(1, 0, 0);

    geometriesRef.current = { celestialBodyGeometry, starsGeometry };

    const celestialBody = new THREE.Mesh(celestialBodyGeometry, sunMaterial);
    celestialBody.position.set(0, 0, 0);
    celestialBodyRef.current = celestialBody;
    scene.add(celestialBody);

    const starsMaterial = new THREE.MeshBasicMaterial({ color: 0xf0f2ff });
    const stars = Array(500)
      .fill()
      .map(() => {
        const star = new THREE.Mesh(starsGeometry, starsMaterial);
        star.position.set(
          Math.random() * 800 - 400,
          Math.random() * 800 - 400,
          Math.random() * 800 - 400,
        );
        star.velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
        );
        scene.add(star);
        return star;
      });

    starsRef.current = stars;

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85,
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 0.7;
    bloomPass.radius = 2;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const animate = () => {
      let animationFrameId = requestAnimationFrame(animate);

      // Add this line to rotate the celestialBody
      celestialBodyRef.current.rotateY(0.0001);

      spaceMaterial.map = createGradientTexture(i);
      spaceMaterial.needsUpdate = true; // Tell Three.js to update the material
      i += 0.00001; // уменьшили величину приращения

      stars.forEach((star) => {
        star.position.add(star.velocity);
        if (star.position.length() > 400) {
          star.position.setLength(400);
          star.velocity.negate();
        }
      });

      composer.render();
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);

      // Dispose geometries
      Object.values(geometriesRef.current).forEach((geometry) =>
        geometry.dispose(),
      );

      // Dispose materials
      Object.values(materialsRef.current).forEach((material) =>
        material.dispose(),
      );

      // Dispose textures
      Object.values(texturesRef.current).forEach((texture) =>
        texture.dispose(),
      );

      // Remove elements from the scene
      scene.remove(...scene.children);

      // Remove the renderer's canvas
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!materialsRef.current || !themeChangeRequested) return;

    let frameId = null;
    setThemeTransitioning(true);

    const transitionDuration = 3000; // длительность анимации в миллисекундах
    let transitionStartTime = 0;

    const animateIntensity = (timestamp) => {
      if (!transitionStartTime) {
        transitionStartTime = timestamp;
      }

      const elapsed = timestamp - transitionStartTime;
      const progress = Math.min(elapsed / transitionDuration, 1);

      intensityRef.current = progress * 2;

      if (progress < 1) {
        frameId = requestAnimationFrame(animateIntensity);
      } else {
        intensityRef.current = 0;
        setThemeTransitioning(false);
        setThemeChangeRequested(false);
        transitionStartTime = null;
        // Reset the emissiveIntensity after the animation
        materialsRef.current.sunMaterial.emissiveIntensity =
          theme === "sun" ? 1 : 0;
        materialsRef.current.moonMaterial.emissiveIntensity =
          theme === "moon" ? 1 : 0;
        return;
      }

      const factor = 0.5 * (1 - Math.cos(intensityRef.current * Math.PI));
      materialsRef.current.sunMaterial.emissiveIntensity =
        theme === "sun" ? 1 - factor : factor;
      materialsRef.current.moonMaterial.emissiveIntensity =
        theme === "moon" ? 1 - factor : factor;
    };

    frameId = requestAnimationFrame(animateIntensity);
  }, [themeChangeRequested]);

  useEffect(() => {
    const celestialBody = celestialBodyRef.current;
    const materials = materialsRef.current;

    if (!themeTransitioning && celestialBody && materials) {
      celestialBody.material =
        theme === "sun" ? materials.sunMaterial : materials.moonMaterial;
    }
  }, [theme, themeTransitioning]);

  const switchTheme = () => {
    const currentTheme = theme;
    const nextTheme = theme === "sun" ? "moon" : "sun";

    setTheme(nextTheme);

    let start = null;

    const animateIntensityChange = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / 3000; // assuming we want the transition to take 1 second

      if (progress < 1) {
        if (currentTheme === "sun") {
          materialsRef.current.sunMaterial.emissiveIntensity = 1 - progress;
          materialsRef.current.moonMaterial.emissiveIntensity = progress;
        } else {
          materialsRef.current.moonMaterial.emissiveIntensity = 1 - progress;
          materialsRef.current.sunMaterial.emissiveIntensity = progress;
        }
        requestAnimationFrame(animateIntensityChange);
      } else {
        // ensure the intensities are exactly 1 and 0 at the end of the animation
        if (nextTheme === "sun") {
          materialsRef.current.sunMaterial.emissiveIntensity = 1;
          materialsRef.current.moonMaterial.emissiveIntensity = 0;
        } else {
          materialsRef.current.moonMaterial.emissiveIntensity = 1;
          materialsRef.current.sunMaterial.emissiveIntensity = 0;
        }
      }
    };

    requestAnimationFrame(animateIntensityChange);
  };

  useEffect(() => {
    celestialBodyRef.current.material.map =
      theme === "sun"
        ? texturesRef.current.sunTexture
        : texturesRef.current.moonTexture;
    celestialBodyRef.current.material.needsUpdate = true; // Tell Three.js to update the material
  }, [theme]);

  return (
    <>
      <button
        style={{ position: "absolute", right: "5px", top: "5px" }}
        onClick={switchTheme}
      >
        {" "}
        Change theme{" "}
      </button>
      <div ref={mountRef} className="fade-in defaultCanvas0"></div>
    </>
  );
};

export default Sun;
