import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import "./defaultCanvas0.scss";

import sunImage from "./sun.jpeg";

const createGradientTexture = (shift) => {
  const width = 2;
  const height = 256;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");

  shift = shift % 1;

  const colors = [
    new THREE.Color("#000000"),
    new THREE.Color("#000080"),
    new THREE.Color("#800080"),
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
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();

    const spaceGeometry = new THREE.SphereGeometry(500, 32, 32);
    let i = 0;
    const spaceMaterial = new THREE.MeshBasicMaterial({
      map: createGradientTexture(i),
      side: THREE.BackSide,
    });

    const space = new THREE.Mesh(spaceGeometry, spaceMaterial);
    scene.add(space);

    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.5,
      1000,
    );
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load(sunImage);

    const material = new THREE.MeshLambertMaterial({
      map: sunTexture,
      emissive: 0xffbf00,
      emissiveMap: sunTexture,
      emissiveIntensity: 1,
    });

    const geometry = new THREE.SphereGeometry(100, 32, 32);
    const sun = new THREE.Mesh(geometry, material);
    scene.add(sun);

    const starsGeometry = new THREE.SphereGeometry(1, 24, 24);
    const starsMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const stars = Array(500)
      .fill()
      .map(() => {
        const star = new THREE.Mesh(starsGeometry, starsMaterial);
        star.position.set(
          Math.random() * 800 - 400,
          Math.random() * 800 - 400,
          Math.random() * 800 - 400,
        );
        scene.add(star);
        return star;
      });

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85,
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 3;
    bloomPass.radius = 1;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const animate = () => {
      requestAnimationFrame(animate);
      spaceMaterial.map = createGradientTexture(i);
      i += 0.01;
      stars.forEach((star) => {
        star.position.z += 0.5;
        if (star.position.z > 400) {
          star.position.z = -400;
        }
      });
      composer.render();
    };

    animate();
  }, []);

  return <div ref={mountRef} className="fade-in defaultCanvas0"></div>;
};

export default Sun;
