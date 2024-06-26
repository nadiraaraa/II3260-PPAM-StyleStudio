import { Link, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../thrift/filter';
import {fetchCatalog} from '../../../../../routes/catalog'
import {catalogType} from '../../../../../components/catalog';
import { useSession } from '@/context/SessionContext';
import ImageItem from '@/components/ImageItem';

const Sell = () => {
  const { user } = useSession();

    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [viewCategory, setViewCategory] = useState(false);
    const [catalogs, setCatalogs] = useState<catalogType[]>([]);

    useFocusEffect(
		useCallback(() => {
        const loadCatalog = async () => {
            setLoading(true);
            setError(false);

                const catalogData = await fetchCatalog("sell", user?.id, search, category, location);
                console.log(catalogData);
                setCatalogs(catalogData);

                setLoading(false);
        };

        loadCatalog();
    }, []));


    return (
            <View style={styles.container}>
                {viewCategory ? 
                    <Filter 
                        category={category}
                        setCategory={setCategory}
                        location={location}
                        setLocation={setLocation}
                        setViewCategory={setViewCategory}
                    />
                    : <></>
                }
                <View style={styles.bar}>
                    <View style={styles.input}>
                        <TextInput
                            // style={styles.input}
                            placeholder="Search..."
                            value={search}
                            onChangeText={setSearch}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
                        />
                        <Pressable onPress={() => {}}>
                            <Image
                                source={require('../../../../../assets/images/search.png')}
                                style={styles.icon}
                            />
                        </Pressable>
                    </View>
                    <Pressable onPress={() => {setViewCategory(true); console.log(viewCategory);}}>
                        <Image
                            source={require('../../../../../assets/images/category.png')}
                            style={styles.icon}
                            
                        />
                    </Pressable>
                </View>
                <ScrollView style={{marginHorizontal: 'auto', alignContent: 'center'}}>
                  
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', columnGap: 10, marginHorizontal: 5}}>
                    <Pressable onPress={() => router.push('/home/sell/add')}>
                      <View style={[styles.card, {justifyContent: 'center'}]}>
                        <Image
                          source={require('../../../../../assets/images/add.png')}
                          style={{alignContent: 'center', width: 100, marginBottom: 10, resizeMode: 'contain', justifyContent: 'center', marginHorizontal: 'auto'}}
                        />
                        <Text style={{ color: '#616219', fontWeight: 'bold' , textAlign: 'center'}}>Add Item</Text>
                      </View>
                    </Pressable>
                        {catalogs.map((catalog, idx)=>
                            <Pressable key={idx} onPress={()=> router.push(`/home/thrift/product?detail=${JSON.stringify(catalog)}&viewer=seller`)}>
                                <View style={styles.card}>
                                <ImageItem
									height={180}
									item={catalog.photo}
									// style={styles.cardImage}
								/>
                                    <Text style={{ color: '#616219', fontWeight: 'bold' }}>{catalog.name}</Text>
                                    <Text style={{ color: '#1C1B1F' }}>Rp{catalog.price?.toString()}</Text>
                                    <View style={{flex: 1, justifyContent:'flex-end'}}>
                                        <Text style={{ color: '#595454' , justifyContent: 'flex-end'}}>{catalog.seller_city}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                        
                        
                    </View>
                </ScrollView>
            </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF9EC',
        width: '100%',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        alignContent: 'center',
    },

    text: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
        color: '#616219',
    },

    button: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },

    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    bar: {
        backgroundColor: '#DEDD91',
        width: '100%',
        margin: 0,
        padding: 0,
        alignItems: 'center',
        flexDirection: 'row'
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        borderColor: '#616219',
        margin: 10,
        backgroundColor: '#E6E3D1',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardImage: {
        width: 150,
        // height: 120, // Adjusted height
        resizeMode: 'cover',
        // borderRadius: 10,
        marginBottom: 10,
    },
    icon: {

    },
    card: {
        width: 180, // Adjusted width
        height: 280, // Adjusted height
        backgroundColor: '#FDFDF9', // Light green background color
        padding: 15,
        borderRadius: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: 'left',
        marginBottom: 5,
        flex:1
    },
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
});

export default Sell;