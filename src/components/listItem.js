import React from 'react';
import { StyleSheet, Text, Image, View , TouchableOpacity} from 'react-native';

function ListItem ({userName, description, urlPhoto, navigation}) {

    return (
        <>
        <View style={styles.containerItem}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('Photo', {currentPhoto: urlPhoto})}
            >
                <Image 
                    source={urlPhoto} 
                    style={styles.containerImg} 
                ></Image>
            </TouchableOpacity>

            <View style={styles.containerText}>
                <Text style={styles.textHeader}
                >{userName}
                </Text>
                
                <Text 
                    style={styles.textDescription}
                >{description}
                </Text>
            </View>
        </View>
        </>
    )
}

const styles = new StyleSheet.create({
    containerItem: {
        width: 240, 
        flexDirection: 'row', 
        paddingLeft: 15, 
        paddingVertical: 15,
    },
    containerImg: {
        width: 150, 
        height: 150, 
        borderRadius: 30, 
        overflow: 'hidden',
    },
    containerText: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 20,
    },
    textHeader: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '500', 
    },
    textDescription: {
        fontWeight: '300', 
        textAlign: 'center',
        fontSize: 16
    }
})

export default ListItem;