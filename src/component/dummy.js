// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// import {COLORS} from '../assets/constants/Index';
// import {Responsive} from '../src/utils/layouts/Layout';
// import ApiList from './ApiList';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import _ from 'lodash';
// import Icons from '../assets/constants/Icons';
// import {SearchBar} from 'react-native-elements';
// import {useNavigation} from '@react-navigation/native';

// const Home = () => {
//   const navigate = useNavigation();
//   const [dataToRender, setDataToRender] = useState(ApiList);
//   const [masterData, setMasterData] = useState(ApiList);
//   const [search, setsearch] = useState('');
//   const [checkboxState, setCheckboxState] = useState(false);
//   const [selectedCheckBox, setselectedCheckBox] = useState([]);

//   const deleteallid = (selectedId = []) => {
//     const data = dataToRender.filter(ele => !selectedId.includes(ele.id));
//     setDataToRender(data);
//   };

//   function DeleteSelctedElement(id) {
//     setCheckboxState(false);
//     const data = dataToRender.filter(element => element.id !== id);
//     setDataToRender(data);
//   }

//   const searchFilter = text => {
//     if (text) {
//       const newData = masterData.filter(item => {
//         const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setDataToRender(newData);
//       setsearch(text);
//     } else {
//       setDataToRender(masterData);
//       setsearch(text);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainerwrapper}>
//         <Text style={styles.headerWrapper}>Admin </Text>
//       </View>
      
//       <SearchBar
//         placeholder="Search Here..."
//         onChangeText={text => {
//           searchFilter(text);
//         }}
//         value={search}
//         containerStyle={{
//           backgroundColor: 'white',
//           borderTopWidth: 0,
//           borderBottomWidth: 0,
//           textDecorationLine: 'none',
//         }}
//         searchIcon={null}
//         clearIcon={null}
//         style={{
//           backgroundColor: 'lightgrey',
//           borderRadius: 15,
//           paddingLeft: 15,
//           color: 'black',
//           textDecorationLine: 'none',
//         }}
//         inputContainerStyle={{
//           backgroundColor: '#fff',
//           textDecorationLine: 'none',
//         }}
//         textDecorationLine={'none'}
//         placeholderTextColor="black"
//       />

//       <View style={styles.listDataWrapper}>
//         <View style={{width: '10%'}}></View>
//         <View style={{width: '21%'}}>
//           <Text style={[styles.fonts, {}]}>Name</Text>
//         </View>
//         <View style={{width: '2%'}}></View>
//         <View style={{width: '21%'}}>
//           <Text style={[styles.fonts, {paddingBottom: 0}]}>Email</Text>
//         </View>
//         <View style={{width: '2%'}}></View>
//         <View style={{width: '21%'}}>
//           <Text style={[styles.fonts, {paddingBottom: 0}]}>Role</Text>
//         </View>
//         <View style={{width: '2%'}}></View>
//         <View style={{width: '21%'}}>
//           <Text style={[styles.fonts]}>Action</Text>
//         </View>
//       </View>
//       <ScrollView>
//         {_.map(dataToRender, (item, index) => {
//           return (
//             <View style={styles.listWrapper}>
//               <View style={{flexDirection: 'row'}}>
//                 <View style={{width: '10%'}}>
//                   <BouncyCheckbox
//                     fillColor={COLORS.grey}
//                     isChecked={checkboxState}
//                     iconStyle={{
//                       borderColor: COLORS.grey,
//                     }}
//                     size={25}
//                     onPress={ee => {
//                       setCheckboxState(!checkboxState);
//                       if (ee) {
//                         console.log('i am groot')
//                         setselectedCheckBox([...selectedCheckBox, item.id]);
//                       } else {
                        
//                         const data = selectedCheckBox;
//                         const index = selectedCheckBox.indexOf(item.id);
//                         if (index > -1) {
//                           data.splice(index, 1);
//                           setselectedCheckBox(data);
//                         }
//                       }
//                     }}
//                   />
//                 </View>
//                 <View style={{width: '21%', alignItems: 'flex-start'}}>
//                   <Text>{item.name} </Text>
//                 </View>
//                 <View style={{width: '2%'}}></View>
//                 <View style={{width: '22%', }}>
//                   <Text style={{}}>{item.email} </Text>
//                 </View>
//                 <View style={{width: '2%'}}></View>
//                 <View style={{width: '21%', }}>
//                   <Text>{item.role} </Text>
//                 </View>
//                 <View style={{width: '2%'}}></View>

//                 <View style={{width: '21%',}}>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       paddingTop: 8,
//                       alignItems: 'center',
//                     }}>
//                     <TouchableOpacity
//                       style={{width: 30}}
//                       onPress={() => {
//                         navigate.navigate('Edit', item);
//                       }}>
//                       <Image
//                         source={Icons.edit}
//                         style={{height: 20, width: 20, resizeMode: 'contain'}}
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={() => {
//                         DeleteSelctedElement(item.id);
//                       }}
//                       style={{}}>
//                       <Image
//                         source={Icons.deleteIcon}
//                         style={{
//                           height: 20,
//                           width: 20,
//                           resizeMode: 'contain',
//                         }}
//                       />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//               <View style={{flexDirection: 'row'}}>
//                 <View style={{width: '10%'}}></View>
//               </View>
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <View></View>
//               </View>
//               <View></View>
//             </View>
//           );
//         })}
//       </ScrollView>
//       <View style={{paddingVertical: 15, paddingHorizontal: 15,flexDirection:"row"}}>
//         <TouchableOpacity
//           onPress={() => {
//             deleteallid(selectedCheckBox)
//           }}
//           style={{
//             padding: 15,
//             backgroundColor: 'red',
//             width: '45%',
//             borderRadius: 25,
//           }}>
//           <Text
//             style={{
//               textAlign: 'center',
//               fontWeight: '500',
//               fontSize: 16,
//               color: 'white',
//             }}>
//             Delete all
//           </Text>
//         </TouchableOpacity>
//         <View style={{justifyContent:'center',paddingLeft:10}}>
//           <View style={styles.circle}>  
//           {/* <Image source={Icons.arrow} 
//             style={{}}
//           />   */}
//           </View>
//           <View style={{flexDirection:'row',}}>
//           <View style={styles.circle}>  
//           <Text>
//             1
//           </Text>
//           </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   headerContainerwrapper: {
//     backgroundColor: COLORS.white,
//     marginTop: Responsive.height(5),
//     height: Responsive.height(40),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerWrapper: {
//     fontSize: 20,
//   },
//   searchBarwrapper: {
//     marginTop: Responsive.height(30),
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     backgroundColor: 'white',
//   },
//   listDataWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     // backgroundColor: 'red',
//   },
//   listWrapper: {
//     justifyContent: 'space-between',
//     // backgroundColor: 'yellow',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: COLORS.lightGrey,
//   },

//   fonts: {
//     fontSize: 14,
//     color: COLORS.Black,
//   },
//   circle:{
//     width:25,
//     height:25,
//     borderRadius:12,
//     borderWidth:1,
    

//   }
// });
// export default Home;
