import React from 'react';
import {Image, View, Dimensions} from 'react-native';

function PhotoScreen ({route}) {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 16 / 9);
    const imageWidth = dimensions.width;
    const {currentPhoto} = route.params
    return (
        <>
        <View style={{backgroundColor: 'black', height: Dimensions.get('window').height}}>
            <Image
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    alignItems:'center',
                    marginTop: 80,
                }}
                source={currentPhoto}
            ></Image>
        </View>
        </>
    );
}

export default PhotoScreen;