import React from 'react';
import {Text, View} from 'react-native';
import ListCourse from '../../components/list';
import {ScrollView} from 'react-native-gesture-handler';
const Lab4 = () => {
return (
<View>
<ListCourse />
</View>
);
};
export default React.memo(Lab4);