import { View, Text, StyleSheet } from "react-native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import Button from "@/components/Button/Button";
import { contactStyle } from "@/styles/contact";
import { useState } from "react";
import Slider from "@react-native-community/slider";

const camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
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

  return (
    <View>
      <CameraView
        style={style.camera}
        facing={facing}
        enableTorch={enableTorch}
        zoom={zoom}
      ></CameraView>
      <Button
        action={toggleCameraFacing}
        label="flip camera"
        style={contactStyle}
      ></Button>
      <Button
        action={EnableTorch}
        label="enable torch"
        style={contactStyle}
      ></Button>
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
