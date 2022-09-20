import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert, PermissionsAndroid} from 'react-native'

async function checkAllPermissions() {
    try {
        if (Platform.OS == 'ios') {
            return true
        }

        const granted = await PermissionsAndroid.requestMultiple(
            [
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            ],
        );

        if (
            granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
            return true

        } else {
            return false
        }
    } catch (err) {
        console.warn(err);
    }
};

export function ChooseImage(callBack) {
    Alert.alert(
        "",
        "Choose a download method.",
        [
            {
                text: "Open library", onPress: () => {

                    launchImageLibrary(
                        {
                            mediaType: 'photo',
                            //   includeBase64: false,
                            //   maxHeight: 200,
                            //   maxWidth: 200,
                        },
                        (response) => {
                            if (!response.didCancel) {
                                callBack(response)
                            }
                        },
                    )
                }
            },
            {
                text: "Take a photo", onPress: () => {
                    checkAllPermissions()
                    launchCamera(
                        {
                            storageOptions: {privateDirectory: true},
                            mediaType: 'photo',
                            //   includeBase64: false,
                            //   maxHeight: 200,
                            //   maxWidth: 200,
                        },
                        (response) => {
                            if (!response.didCancel) {
                                callBack(response)
                            }
                        },
                    )
                }
            }
        ],
        {cancelable: true}
    );

}
