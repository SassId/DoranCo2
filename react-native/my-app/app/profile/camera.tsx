import { View, Text, StyleSheet } from "react-native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import Button from "@/components/Button/Button";
import { contactStyle } from "@/styles/contact";
import { useRef, useState } from "react";
import Slider from "@react-native-community/slider";
import * as MediaLibrary from "expo-media-library";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const camera = () => {
  // * useRef() is a hook allowing us to reference a component before we initialize it when using it it the jsx return
  const cameraRef = useRef<CameraView | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions();

  const [facing, setFacing] = useState<CameraType>("back");
  const [enableTorch, setEnableTorch] = useState(false);
  const [zoom, setZoom] = useState(0);

  if (!permission) {
    return <Text>Loading...</Text>;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Please authorize camera</Text>
        <Button
          action={requestPermission}
          label="Authorize acces to the camera"
          style={contactStyle}
        ></Button>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function EnableTorch() {
    setEnableTorch(!enableTorch);
    // setEnableTorch((current) => (current === enableTorch ? !enableTorch : enableTorch))
  }

  function zoomInOut(value: number) {
    setZoom(value);
  }

  async function takePic() {
    if (!cameraRef.current || permission === null) {
      return;
    }
    const image = await cameraRef.current.takePictureAsync();

    if (!permissionResponse?.granted) {
      await requestMediaPermission();
    }
    if (!image) {
      return;
    }

    const savedImage = await MediaLibrary.createAssetAsync(image.uri);
    console.log(savedImage);
  }
  function cameraReady() {
    console.log("IS READDYYY");
  }
  return (
    <View>
      <CameraView
        onCameraReady={cameraReady}
        ref={cameraRef}
        style={style.camera}
        facing={facing}
        enableTorch={enableTorch}
        zoom={zoom}
      ></CameraView>
      <MaterialIcons
        name="flip-camera-android"
        size={24}
        color="black"
        onPress={toggleCameraFacing}
      />
      <Entypo name="flashlight" size={24} color="black" onPress={EnableTorch} />

      {/* <Button
        action={toggleCameraFacing}
        label="flip camera"
        style={contactStyle}
      ></Button> */}
      {/* <Button
        action={EnableTorch}
        label="enable torch"
        style={contactStyle}
      ></Button> */}
      <Slider
        style={{
          width: 200,
          height: 40,
          marginHorizontal: "auto",
        }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={zoomInOut}
        step={0.01}
      />
      <Entypo
        name="picasa"
        size={24}
        color="black"
        onPress={takePic}
        style={{
          marginHorizontal: "auto",
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  camera: {
    width: "100%",
    height: 500,
  },
});

export default camera;

// TODO:
// Exercice:
// Ajouter des boutons à la camera pour:
// 1. Changer la camera (avant arriere)
// 2. Activer le flash
// 3. Zoommer
