(() => {
  // Simple Three.js animated background (rotating particle field)
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  camera.position.z = 60;

  // create particles
  const count = 800;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 200;
    positions[i3 + 1] = (Math.random() - 0.5) * 80;
    positions[i3 + 2] = (Math.random() - 0.5) * 200;
    const t = Math.random();
    colors[i3] = 0.8 * t + 0.2;
    colors[i3 + 1] = 0.7 * (1 - t) + 0.2;
    colors[i3 + 2] = 0.4 * t + 0.1;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({ size: 1.8, vertexColors: true, opacity: 0.9, transparent: true });
  const points = new THREE.Points(geometry, mat);
  scene.add(points);

  // add a subtle rotating mesh for depth
  const torusGeo = new THREE.TorusKnotGeometry(8, 2.8, 128, 32);
  const torusMat = new THREE.MeshStandardMaterial({ color: 0xbaa876, metalness: 0.6, roughness: 0.2, emissive: 0x111111, emissiveIntensity: 0.2 });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.position.set(0, -6, 0);
  torus.scale.set(0.8,0.8,0.8);
  scene.add(torus);

  const light = new THREE.DirectionalLight(0xffffff, 0.6);
  light.position.set(0.5, 1, 0.5);
  scene.add(light);
  const amb = new THREE.AmbientLight(0xffffff, 0.25);
  scene.add(amb);

  function resize(){
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || 300;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  let t = 0;
  function animate(){
    t += 0.01;
    points.rotation.y = t * 0.2;
    points.rotation.x = Math.sin(t * 0.3) * 0.05;
    torus.rotation.x += 0.006;
    torus.rotation.y += 0.009;
    // slow camera float
    camera.position.x = Math.sin(t * 0.25) * 6;
    camera.position.y = Math.sin(t * 0.12) * 3;
    camera.lookAt(0,0,0);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();
