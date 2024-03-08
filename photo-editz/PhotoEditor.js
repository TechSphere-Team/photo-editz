// import React, { useState } from 'react';
// import { View, Image, Button } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { ImageManipulator } from 'expo-image-manipulator';

// export default function PhotoEditor() {
//   const [image, setImage] = useState(null);

//   // Function to pick an image from the device's gallery
//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: false,
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   // Function to manipulate the selected image (e.g., crop, rotate, flip)
//   const manipulateImage = async () => {
//     if (image) {
//       const manipResult = await ImageManipulator.manipulateAsync(image, [{
//         resize: { width: 300 },
//       }]);

//       setImage(manipResult.uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
//       <Button title="Pick an image" onPress={pickImage} />
//       {image && <Button title="Edit Photo" onPress={manipulateImage} />}
//     </View>
//   );
// }
import React, { useState ,useEffect } from 'react';
import { View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageManipulator } from 'expo-image-manipulator';

export default function PhotoEditor() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    console.log("Image URI state:", image);
  }, [image]);

  // Function to pick an image from the device's gallery
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });
  
      console.log("ImagePicker Result:", result);
  
      if (!result.cancelled && result.assets.length > 0) {
        const selectedImageUri = result.assets[0].uri;
        console.log("Selected Image URI:", selectedImageUri);
        setImage(selectedImageUri);
      } else {
        console.log("Image selection cancelled");
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };
  // Function to manipulate the selected image (e.g., crop, rotate, flip)
  const manipulateImage = async () => {
    if (image) {
      const manipResult = await ImageManipulator.manipulateAsync(image, [{
        resize: { width: 300 },
      }]);

      setImage(manipResult.uri);
    }
  };

  console.log("Image URI state:", image);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Button title="Edit Photo" onPress={manipulateImage} />}
    </View>
  );
}
