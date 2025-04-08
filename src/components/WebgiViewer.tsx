  import { useRef, useEffect, useCallback } from "react";
  import {
    ViewerApp,
    addBasePlugins,
    AssetManagerBasicPopupPlugin,
    FileTransferPlugin,
    CanvasSnipperPlugin,
    TonemapPlugin,
    ProgressivePlugin,
    GBufferPlugin,
    GammaCorrectionPlugin,
    SSRPlugin,
    SSAOPlugin,
  } from "webgi";
  import { DirectionalLight, Scene } from "three";
  import * as THREE from "three";
  import gsap from "gsap"
  import {ScrollTrigger} from "gsap/ScrollTrigger";
  import {scrollAnimation} from "../lib/scroll-animation";

  const WebgiViewer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    const memoizedScrollAnimation=useCallback((position:any,target:any,onUpdate:any)=>{
          if(position&&target&&onUpdate){
              scrollAnimation(position,target,onUpdate);
          }

    },[]);
    const setupViewer = useCallback(async () => {
      const viewer = new ViewerApp({
        canvas: canvasRef.current!,
        
      }) as any;


      const camera=viewer.scene.activeCamera;
      const position=camera.position;
      const target=camera.target;
      // await addBasePlugins(viewer);
      await viewer.addPlugin(AssetManagerBasicPopupPlugin);
      await viewer.addPlugin(FileTransferPlugin);
      await viewer.addPlugin(CanvasSnipperPlugin);
      await viewer.addPlugin(GBufferPlugin)
      await viewer.addPlugin(new ProgressivePlugin(32))
      await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
      await viewer.addPlugin(GammaCorrectionPlugin)
      await viewer.addPlugin(SSRPlugin)
      // await viewer.addPlugin(SSAOPlugin)
      
      const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Soft light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
      directionalLight.position.set(5, 10, 5);

      viewer.scene.add(ambientLight);
      viewer.scene.add(directionalLight);

      viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});
   


      // ✅ Load model and check if it exists
      const model = await viewer.load("/scene.glb"); 
      if (!model) {
        console.error("Model did not load correctly!");
        return;
      }
      console.log("Loaded Model:", model);
      model._modelObject.visible = true;
      console.log("Model Visibility:", model._modelObject.visible);   
      viewer.scene.add(model._modelObject);
      console.log("Model added to scene:", viewer.scene);
      // ✅ Camera adjustment
      model._modelObject.traverse((child:any) => {
        if (child.isMesh) {
            child.material.metalness = 0.5; // Reduce metallic dependency
            child.material.roughness = 0.5;
        }
    });
      

       //increase the size
       model._modelObject.scale.set(20,20,20); // Increase size (2x bigger)
       model._modelObject.updateMatrixWorld(true);
 
      viewer.refreshRenderer();
      
      // viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});
      window.scrollTo(0,0);

      let needsUpdate=true;
      const onUpdate=()=>{
          needsUpdate=true;
          viewer.setDirty();
      }
      viewer.addEventListener("preFrame",()=>{
         if(needsUpdate){
            camera.positionTargetUpdated(true);
            needsUpdate=false;

         }
      });
 
      memoizedScrollAnimation(position,target,onUpdate);

      
      viewer.scene.setDirty();
      viewer.renderer.refresh();
    }, []);

    useEffect(() => {
      setupViewer();
    }, []);

    return (
      <div id="webgi-canvas-container" className="w-full h-full  absolute  z-50">
        <canvas id="webgi-canvas" ref={canvasRef}  className="w-full h-full  "/>
      </div>
    );
  };

  export default WebgiViewer;
