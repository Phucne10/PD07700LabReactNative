import React from 'react';
import {Text, view, FlatList, Image} from 'react-native';
import {styles} from './styles';
const DATA = [
{
Id: '1',
Title: 'Data Structures',
imageSource: require('../../assets/images/anh1.jpg'),
},
{
Id: '2',
Title: 'STL',
imageSource: require('../../assets/images/anh1.jpg'),
},
{
Id: '3',
Title: 'STL',
imageSource: require('../../assets/images/anh1.jpg'),
},
{
Id: '4',
Title: 'STL',
imageSource: require('../../assets/images/anh1.jpg'),
},
{
Id: '5',
Title: 'STL',
imageSource: require('../../assets/images/anh1.jpg'),
},
{
Id: '6',
Title: 'Java',
imageSource: require('../../assets/images/anh1.jpg'),
},
{
Id: '6',
Title: 'Java',
imageSource: require('../../assets/images/anh1.jpg'),
},
{
Id: '6',
Title: 'Java',
imageSource: require('../../assets/images/anh1.jpg'),
},
];

const Item = ({title, imageSource}) => {
Return (
<View style={styles.item}>
<Image source={imageSource} style={styles.avatar}></Image>
<Text style={styles.text}>{title}</Text>
</View>
);
};
const renderItem = ({item}) => (
<Item imageSource={item.imageSource} title={item.title} />
);
const ListCourse = () => {
Return (
<View style={styles.container}>
<FlatList
Data={DATA}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
</View>
);
};
export default React.memo(ListCourse);