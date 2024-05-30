import { View, Text, Image, Pressable, StyleSheet } from "react-native";

interface filterProps {
    category: string;
    setCategory: Function;
    location: string;
    setLocation: Function;
    setViewCategory: Function;
  }

const Filter: React.FC<filterProps> = ({category, setCategory, location, setLocation, setViewCategory}) => {
    return <View style={styles.filter}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#616219'}}>Filter</Text>
        <View>
            <Text style={{ paddingVertical: 20 }}>Category</Text>
            <View style={styles.filterOptions}>
                <Pressable onPress={() => setCategory('Top')}><Text style={[styles.filterOption, category == "Top" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Top</Text></Pressable>
                <Pressable onPress={() => setCategory('Bottom')}><Text style={[styles.filterOption, category == "Bottom" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Bottom</Text></Pressable>
                <Pressable onPress={() => setCategory('Dress')}><Text style={[styles.filterOption, category == "Dress" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Dress</Text></Pressable>
                <Pressable onPress={() => setCategory('Accessory')}><Text style={[styles.filterOption, category == "Accessory" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Accessory</Text></Pressable>
                <Pressable onPress={() => setCategory('Footwear')}><Text style={[styles.filterOption, category == "Footwear" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Footwear</Text></Pressable>
                <Pressable onPress={() => setCategory('Set')}><Text style={[styles.filterOption, category == "Set" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Set</Text></Pressable>
            </View>
        </View>
        <View>
            <Text style={{ paddingVertical: 20 }}>Location</Text>
            <View style={styles.filterOptions}>
                <Pressable onPress={() => setLocation('Banten')}><Text style={[styles.filterOption, location == "Banten" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Banten</Text></Pressable>
                <Pressable onPress={() => setLocation('Jakarta')}><Text style={[styles.filterOption, location == "Jakarta" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Jakarta</Text></Pressable>
                <Pressable onPress={() => setLocation('Jawa Barat')}><Text style={[styles.filterOption, location == "Jawa Barat" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Jawa Barat</Text></Pressable>
                <Pressable onPress={() => setLocation('Jawa Tengah')}><Text style={[styles.filterOption, location == "Jawa Tengah" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Jawa Tengah</Text></Pressable>
                <Pressable onPress={() => setLocation('Jawa Timur')}><Text style={[styles.filterOption, location == "Jawa Timur" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Jawa Timur</Text></Pressable>
                <Pressable onPress={() => setLocation('Yogyakarta')}><Text style={[styles.filterOption, location == "Yogyakarta" ? { backgroundColor: '#BABA72', color: 'white' } : { backgroundColor: '#E6E4BF' }]}>Yogyakarta</Text></Pressable>
            </View>
        </View>
        <View>
            <Pressable onPress={() => setViewCategory(false)}>
                <Text style={{ padding: 10, backgroundColor: '#616219', textAlign: 'center', width: 80, color: 'white', borderRadius: 5, marginTop: 120, alignSelf: 'flex-end' }}>Save</Text>
            </Pressable>
        </View>
    </View>
};

const styles = StyleSheet.create({

    filter: {
        backgroundColor: '#FDF9EC',
        width: '80%',
        left: '20%',
        padding: 10,
        position: 'absolute',
        zIndex: 20,
        height: '100%'
    },
    filterOptions: {
        // padding: 5,
        // width: 40,
        // // height: 10,
        // // flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 5, marginHorizontal: 'auto'
    },
    filterOption: {
        backgroundColor: '#E6E4BF',
        padding: 5,
        width: 140,
        height: 30,
        fontSize: 13,
        textAlign: 'center'
    }
})

export default Filter;