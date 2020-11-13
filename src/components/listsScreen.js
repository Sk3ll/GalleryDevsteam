import React, {useEffect, useState} from 'react';
import { FlatList, View} from 'react-native';
import ListItem from './listItem'




function ListsScreen ({navigation}) {
    const [img, setImg] = useState([])
    useEffect(()=>{
        fetch('https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043')
        .then(response => response.json())
        .then(json => setImg(json))
        .catch(error => console.error(error))
    }, [])
    return (
        <>
            <View style={{backgroundColor: 'white'}}>
                <FlatList
                    data={img}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({item}) => (
                        <ListItem
                            userName={item.user.name}
                            description={item.alt_description}
                            urlPhoto={{uri: item.urls.regular}}
                            navigation={navigation}
                        ></ListItem>
                )}
                ></FlatList>
            </View>
        </>
    )
}

export default ListsScreen;