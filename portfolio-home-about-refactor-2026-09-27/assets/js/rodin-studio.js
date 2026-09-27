import * as THREE from "../vendor/three.module.min.js";

const canvas = document.querySelector("#rodinStudioCanvas");
const stage = document.querySelector("#rodinStudioStage");
const scrollShell = document.querySelector("#scrollShell");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileQuery = window.matchMedia("(max-width: 900px)");

let renderer;
let scene;
let camera;
let workbench;
let frameId = 0;
let inView = true;
let pageVisible = !document.hidden;
let destroyed = false;
let scrollProgress = 0;
const pointer = new THREE.Vector2();
const targetPointer = new THREE.Vector2();
const interactionPointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const interactiveCards = [];
let highlightedCard = null;
const disposables = [];

function setStudioState(state) {
  document.body.dataset.studioState = state;
}

function supportsWebGL() {
  try {
    const probe = document.createElement("canvas");
    return Boolean(probe.getContext("webgl2") || probe.getContext("webgl"));
  } catch {
    return false;
  }
}

function track(resource) {
  disposables.push(resource);
  return resource;
}

function createMaterials() {
  return {
    paper: track(new THREE.MeshStandardMaterial({ color: 0xfff5dc, roughness: 0.86, metalness: 0.02 })),
    white: track(new THREE.MeshStandardMaterial({ color: 0xfff8eb, roughness: 0.7, metalness: 0.02 })),
    blueprint: track(new THREE.MeshStandardMaterial({ color: 0xff982f, roughness: 0.46, metalness: 0.04 })),
    clay: track(new THREE.MeshStandardMaterial({ color: 0xffb74f, roughness: 0.62, metalness: 0.01 })),
    mint: track(new THREE.MeshStandardMaterial({ color: 0xffe0a9, roughness: 0.62, metalness: 0.01 })),
    graphite: track(new THREE.MeshStandardMaterial({ color: 0x17191d, roughness: 0.52, metalness: 0.12 })),
    glass: track(new THREE.MeshPhysicalMaterial({
      color: 0xffd5a2,
      roughness: 0.12,
      metalness: 0,
      transparent: true,
      opacity: 0.5,
      transmission: 0.42,
      thickness: 0.5,
    })),
  };
}

function roundedCardGeometry(width = 1.7, height = 1.08, depth = 0.09) {
  return track(new THREE.BoxGeometry(width, height, depth, 4, 4, 1));
}

function createLabelTexture(label, accent, detail) {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 512;
  textureCanvas.height = 320;
  const context = textureCanvas.getContext("2d");
  context.fillStyle = accent;
  context.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
  context.fillStyle = "#17191d";
  context.font = "700 34px monospace";
  context.fillText(detail, 32, 54);
  context.font = "900 86px sans-serif";
  context.fillText(label, 32, 185);
  context.fillStyle = "rgba(23,25,29,.58)";
  context.font = "600 22px monospace";
  context.fillText("RODIN / PROJECT SIGNAL", 32, 278);

  const texture = track(new THREE.CanvasTexture(textureCanvas));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return texture;
}

function createProjectCard(projectId, label, detail, color, position, rotation) {
  const material = track(new THREE.MeshStandardMaterial({
    map: createLabelTexture(label, color, detail),
    roughness: 0.72,
    metalness: 0.01,
  }));
  const card = new THREE.Mesh(roundedCardGeometry(), material);
  card.position.copy(position);
  card.rotation.set(rotation.x, rotation.y, rotation.z);
  card.userData.baseY = position.y;
  card.userData.projectId = projectId;
  interactiveCards.push(card);
  return card;
}

function createWorkbench() {
  const materials = createMaterials();
  const group = new THREE.Group();
  group.rotation.set(-0.06, -0.18, 0.02);

  // 中心发光核心 —— 取代原工作台桌面，成为悬浮构图的锚点
  const core = new THREE.Mesh(track(new THREE.SphereGeometry(0.42, 32, 32)), materials.glass);
  core.position.set(0, 0.32, 0.4);
  core.userData.baseY = 0.32;
  core.userData.phase = 0;
  group.add(core);

  // 环绕核心的细光环
  const halo = new THREE.Mesh(track(new THREE.TorusGeometry(0.66, 0.018, 12, 90)), materials.blueprint);
  halo.position.copy(core.position);
  halo.rotation.x = Math.PI / 2.4;
  halo.rotation.y = 0.2;
  group.add(halo);

  // 四张项目卡片沿上升弧线悬浮，略微朝向中心与相机
  const cards = [
    createProjectCard("rscfox-ai", "AI", "AGENT WORKFLOW", "#ffe0a9", new THREE.Vector3(-2.55, 0.22, -0.7), new THREE.Euler(-0.16, 0.44, -0.08)),
    createProjectCard("xml-tool", "XML", "0→1 DELIVERY", "#fff8eb", new THREE.Vector3(2.55, 0.34, -0.6), new THREE.Euler(-0.16, -0.44, 0.08)),
    createProjectCard("xiaojianggo", "MAP", "UX JOURNEY", "#ff982f", new THREE.Vector3(-2.35, 0.5, 1.35), new THREE.Euler(-0.2, 0.36, 0.1)),
    createProjectCard("ejiahu", "CARE", "SERVICE SYSTEM", "#ffd18f", new THREE.Vector3(2.35, 0.45, 1.4), new THREE.Euler(-0.2, -0.36, -0.1)),
  ];
  cards.forEach((card, index) => {
    card.userData.phase = index * 0.75;
    group.add(card);
  });

  // 核心到每张卡片的玻璃流线，建立"信号 → 项目"的连接语义
  cards.forEach((card) => {
    const from = core.position.clone();
    const to = card.position.clone();
    const mid = from.clone().lerp(to, 0.5);
    mid.y += 0.32;
    const curve = new THREE.CatmullRomCurve3([from, mid, to]);
    const flow = new THREE.Mesh(track(new THREE.TubeGeometry(curve, 40, 0.022, 8, false)), materials.glass);
    group.add(flow);
  });

  // 漂浮信号方块
  const signalGeometry = track(new THREE.IcosahedronGeometry(0.12, 2));
  const signalPositions = [
    [-3.2, 0.85, -0.9], [-2.9, 1.05, 0.9], [-1.6, 1.15, -1.2],
    [1.6, 1.2, -1.1], [2.9, 1.0, 0.8], [3.2, 0.75, -0.7], [0, 1.4, 1.6],
  ];
  signalPositions.forEach((position, index) => {
    const signal = new THREE.Mesh(signalGeometry, index % 3 === 0 ? materials.clay : materials.blueprint);
    signal.position.set(...position);
    signal.userData.baseY = signal.position.y;
    signal.userData.phase = index * 0.48;
    group.add(signal);
  });

  const namePlate = new THREE.Mesh(
    track(new THREE.BoxGeometry(2.8, 0.6, 0.12)),
    track(new THREE.MeshStandardMaterial({
      map: createLabelTexture("RODIN", "#fff5dc", "PRODUCT × UX"),
      roughness: 0.76,
    })),
  );
  namePlate.position.set(0.15, -0.95, 2.2);
  namePlate.rotation.set(-0.98, 0, 0);
  group.add(namePlate);

  return group;
}
function resizeRenderer() {
  if (!renderer || !stage || !camera) return;
  const rect = stage.getBoundingClientRect();
  const mobile = mobileQuery.matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.75));
  renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
  camera.aspect = rect.width / Math.max(1, rect.height);
  camera.position.z = mobile ? 11.4 : 9.4;
  camera.position.y = mobile ? 4.5 : 4.2;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
}

function updateScrollProgress() {
  if (!scrollShell || !stage) return;
  const limit = Math.max(1, stage.offsetHeight * 0.95);
  scrollProgress = THREE.MathUtils.clamp(scrollShell.scrollTop / limit, 0, 1);
}

function updatePointer(event) {
  if (!stage || mobileQuery.matches) return;
  const rect = stage.getBoundingClientRect();
  targetPointer.x = THREE.MathUtils.clamp((event.clientX - rect.left) / rect.width * 2 - 1, -1, 1);
  targetPointer.y = THREE.MathUtils.clamp(-((event.clientY - rect.top) / rect.height * 2 - 1), -1, 1);
}

// Picking follows the official Three.js interactive-cubes Raycaster pattern:
// https://github.com/mrdoob/three.js/blob/dev/examples/webgl_interactive_cubes.html
function cardFromPointer(event) {
  if (!canvas || !camera || !scene) return null;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  interactionPointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  interactionPointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  scene.updateMatrixWorld(true);
  raycaster.setFromCamera(interactionPointer, camera);
  return raycaster.intersectObjects(interactiveCards, false)[0]?.object || null;
}

function setHighlightedCard(card) {
  if (highlightedCard === card) return;
  highlightedCard = card;
  if (canvas) canvas.style.cursor = card ? "pointer" : "default";
  if (reducedMotion) renderFrame(performance.now());
}

function handleCardPointerMove(event) {
  setHighlightedCard(cardFromPointer(event));
}

function handleCardPointerLeave() {
  setHighlightedCard(null);
}

function handleCardClick(event) {
  const card = cardFromPointer(event);
  if (!card?.userData.projectId) return;
  window.dispatchEvent(new CustomEvent("rodin-project-select", {
    detail: { projectId: card.userData.projectId },
  }));
}

function handleExternalHighlight(event) {
  const projectId = event.detail?.projectId;
  setHighlightedCard(interactiveCards.find((card) => card.userData.projectId === projectId) || null);
}

function updateScene(time) {
  if (!workbench) return;
  pointer.lerp(targetPointer, 0.045);
  workbench.rotation.y = -0.22 + pointer.x * 0.08 + scrollProgress * 0.13;
  workbench.rotation.x = -0.08 - pointer.y * 0.045 + scrollProgress * 0.035;
  workbench.position.y = -scrollProgress * 0.18;
  workbench.position.x = scrollProgress * 0.12;

  workbench.children.forEach((child) => {
    if (child.userData.baseY === undefined) return;
    const selectedLift = child === highlightedCard ? 0.14 : 0;
    const targetScale = child === highlightedCard ? 1.06 : 1;
    child.position.y = child.userData.baseY + selectedLift + Math.sin(time * 0.00065 + child.userData.phase) * 0.055;
    child.scale.x += (targetScale - child.scale.x) * 0.14;
    child.scale.y += (targetScale - child.scale.y) * 0.14;
    child.scale.z += (targetScale - child.scale.z) * 0.14;
  });
}

function renderFrame(time = 0) {
  if (!renderer || !scene || !camera || destroyed) return;
  updateScene(time);
  renderer.render(scene, camera);
}

function animate(time) {
  if (destroyed || reducedMotion) return;
  if (inView && pageVisible) renderFrame(time);
  frameId = window.requestAnimationFrame(animate);
}

function disposeObject(object) {
  object.traverse((child) => {
    child.geometry?.dispose?.();
    if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose?.());
    else child.material?.dispose?.();
  });
}

let stageObserver;

function destroy() {
  if (destroyed) return;
  destroyed = true;
  window.cancelAnimationFrame(frameId);
  window.removeEventListener("resize", resizeRenderer);
  window.removeEventListener("pointermove", updatePointer);
  canvas?.removeEventListener("pointermove", handleCardPointerMove);
  canvas?.removeEventListener("pointerleave", handleCardPointerLeave);
  canvas?.removeEventListener("click", handleCardClick);
  window.removeEventListener("rodin-studio-highlight", handleExternalHighlight);
  document.removeEventListener("visibilitychange", handleVisibilityChange);
  scrollShell?.removeEventListener("scroll", updateScrollProgress);
  stageObserver?.disconnect();
  if (workbench) disposeObject(workbench);
  disposables.forEach((resource) => resource.dispose?.());
  renderer?.dispose();
  window.__rodinStudio = undefined;
}

function handleVisibilityChange() {
  pageVisible = !document.hidden;
  if (!pageVisible) setStudioState("paused");
  else {
    setStudioState("ready");
    if (reducedMotion) renderFrame();
  }
}

function init() {
  if (!canvas || !stage || !supportsWebGL()) {
    setStudioState("fallback");
    return;
  }

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobileQuery.matches,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 4.2, 9.4);
  camera.lookAt(0, -0.15, 0);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9b6b3a, 2.4));
  const keyLight = new THREE.DirectionalLight(0xffffff, 4.8);
  keyLight.position.set(-4, 8, 7);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0xffb568, 2.1);
  fillLight.position.set(6, 3, -4);
  scene.add(fillLight);

  workbench = createWorkbench();
  scene.add(workbench);

  canvas.dataset.motion = reducedMotion ? "static" : "animated";
  window.addEventListener("resize", resizeRenderer, { passive: true });
  window.addEventListener("pointermove", updatePointer, { passive: true });
  canvas.addEventListener("pointermove", handleCardPointerMove, { passive: true });
  canvas.addEventListener("pointerleave", handleCardPointerLeave, { passive: true });
  canvas.addEventListener("click", handleCardClick);
  window.addEventListener("rodin-studio-highlight", handleExternalHighlight);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  scrollShell?.addEventListener("scroll", updateScrollProgress, { passive: true });

  stageObserver = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (reducedMotion && inView) renderFrame();
  }, { root: scrollShell, threshold: 0.02 });
  stageObserver.observe(stage);

  resizeRenderer();
  updateScrollProgress();
  renderFrame();
  setStudioState("ready");
  window.dispatchEvent(new CustomEvent("rodin-studio-ready"));
  if (!reducedMotion) frameId = window.requestAnimationFrame(animate);
}

window.__rodinStudio = {
  destroy,
  get projectIds() {
    return interactiveCards.map((card) => card.userData.projectId);
  },
};

try {
  init();
} catch (error) {
  console.error("Rodin Product Studio failed to initialize", error);
  setStudioState("fallback");
}

window.addEventListener("beforeunload", destroy, { once: true });
