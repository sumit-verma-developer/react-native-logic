import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
  UIManager,
  Platform,
} from 'react-native';

import Icons from '../../assets/constants/Icons';
// import CONTENT from '../src/Content';
import ExpandableListView from 'react-native-expandable-listview';
import {Responsive} from '../../assets/constants/Layout';

const ExpandableComponent = ({item, onClickFunction}) => {
  console.log('item', item);
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{marginTop: 5}}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: Responsive.screenWidth() - 40,
              paddingRight: 10,
              alignItems: 'center',
              height: 55,
              paddingLeft: 5,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                height: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  backgroundColor: '#FFC0CB',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  height: 45,
                }}>
                <Image
                  source={Icons.messageIcon}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                    alignItems: 'center',
                  }}
                />
              </View>
              <View style={{width: 200, paddingLeft: 10}}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  {item?.category_name}
                  <Text style={{color: 'green'}}>{item?.subcategory_name}</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '10%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text> </Text>
              </View>

              {/* {index ? (
                <Image
                  source={Icons.uparrow}
                  style={{width: 10, height: 10, resizeMode: 'contain'}}
                />
              ) : ( */}
              <Image
                source={Icons.downarrow}
                style={{width: 10, height: 10, resizeMode: 'contain'}}
              />
              {/* )} */}
            </View>
          </View>
        </>
      </TouchableOpacity>

      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
          marginTop: 5,
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
            <Text style={styles.text}>
              {/* {key}.  */}
              {item.val}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Launch = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  console.log('masterDataSource', masterDataSource);
  console.log('filteredDataSource', filteredDataSource);
  const CONTENT = [
    {
      isExpanded: false,
      category_name: 'Lean Protien',
      subcategory_name: '(4 Oz Servings)',
      subcategory: [
        {id: 1, val: 'Sub Cat 1'},
        {id: 3, val: 'Sub Cat 3'},
      ],
    },
    {
      isExpanded: false,
      category_name: 'Seafood',
      subcategory_name: '(4 Oz Servings)',
      subcategory: [
        {id: 1, val: 'Alaskan King Crab'},
        {id: 2, val: 'Cod'},
        {id: 3, val: 'Flounder'},
        {id: 4, val: 'Grouper'},
        {id: 5, val: 'Halibut'},
        {id: 6, val: 'Lobster'},
        {id: 7, val: 'Mahi Mahi'},
        {id: 8, val: 'Monkfish'},
      ],
    },
    {
      isExpanded: false,
      category_name: 'Vegitables',
      subcategory: [
        {id: 1, val: 'Banana Peppers'},
        {id: 2, val: 'Bell Peppers'},
        {id: 3, val: 'Bok Choy'},
        {id: 4, val: 'cabbage'},
      ],
    },
    {
      isExpanded: false,
      category_name: 'Fruits',
      subcategory_name: '(3 Oz Servings)',
      subcategory: [
        {id: 1, val: 'Apple'},
        {id: 3, val: 'Apricot'},
        {id: 3, val: 'Bilberry'},
        {id: 3, val: 'blackbery'},
      ],
    },
    {
      isExpanded: false,
      category_name: 'Alternate Ingredients to fats',
      subcategory: [
        {id: 1, val: 'Sub Cat 1'},
        {id: 3, val: 'Sub Cat 3'},
      ],
    },
    {
      isExpanded: false,
      category_name: 'Sauces and Seasonings',
      subcategory: [
        {id: 1, val: 'Sub Cat 1'},
        {id: 3, val: 'Sub Cat 3'},
      ],
    },
  ];

  React.useEffect(() => {
    setFilteredDataSource(CONTENT);
    setMasterDataSource(CONTENT);
  }, []);

  const searchFilterFunction = text => {
    console.log('text', text);
    // Check if searched text is not blank
    if (text) {
      console.log('masterDataSourcesds', masterDataSource);

      const newData = masterDataSource.filter(function (item) {
        console.log('itemdsdf', item);
        const itemData = item.category_name
          ? item.category_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  console.log('listDataSource', listDataSource[0]?.subcategory_name);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headreWrapper}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.crossIcon} source={Icons.crossIcon} />
              </TouchableOpacity>
              <View></View>
              <TouchableOpacity style={{position: 'absolute', right: -20}}>
                <Image style={styles.messageIcon} source={Icons.messageIcon} />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={styles.titleWrapper}>Approved food List</Text>
            </View>
            <View>
              <View
                style={{position: 'absolute', marginTop: 25, paddingLeft: 10}}>
                <Image source={Icons.searchIcon} style={styles.searchIcon} />
              </View>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  placeholderTextColor: '#6699CC',
                  borderRadius: 15,
                  marginTop: 15,
                  paddingLeft: 40,
                }}
                onChangeText={text => searchFilterFunction(text)}
                value={search}
                placeholder="Try searching fat sauces names..."
              />
            </View>

            <ScrollView>
              {filteredDataSource?.map((item, key) => (
                <ExpandableComponent
                  key={item.category_name}
                  onClickFunction={() => {
                    updateLayout(key);
                  }}
                  item={item}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Launch Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  headreWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  titleWrapper: {
    fontSize: 20,
    fontWeight: '800',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  modalView: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  crossIcon: {
    width: 20,
    height: 20,
  },
  messageIcon: {
    width: 40,
    height: 40,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    // backgroundColor: '#F5FCFF',
    // borderRadius: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    backgroundColor: '#fff',
  },
});

export default Launch;
