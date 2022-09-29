import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/Theme";
import { Responsive } from "../src/utils/layouts/Layout";


export const commonStyles = StyleSheet.create({

    appShadow: {

        shadowColor: "#333333",
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
            height: Platform.select({
                ios: 2,
                android: 0,
            }),
            width: Platform.select({
                ios: 2,
                android: 2,
            }),
        },
        elevation: 6,

    },

    lineContainer: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGreyColor,
        marginHorizontal:20
    },


    textInputStyle: {
        color: COLORS.Black,
        fontSize: Responsive.font(14),
        width: '100%',
        backgroundColor: COLORS.textInputBackground,
        fontFamily: FONTS.Poppins400,
        height: Responsive.height(48)
        // borderWidth: 0,
        // borderBottomLeftRadius: 0,
        // borderBottomRightRadius: 0

    }, 

    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    tenWhite400: {
        fontSize: Responsive.font(10),
        color: COLORS.white,
        fontFamily: FONTS.Poppins400
    },

    tenWhite500: {
        fontSize: Responsive.font(10),
        color: COLORS.white,
        fontFamily: FONTS.Poppins500
    },

    tenWhite600: {
        fontSize: Responsive.font(10),
        color: COLORS.white,
        fontFamily: FONTS.Poppins600
    },

    tenWhite700: {
        fontSize: Responsive.font(10),
        color: COLORS.white,
        fontFamily: FONTS.Poppins700
    },

    tenWhite800: {
        fontSize: Responsive.font(10),
        color: COLORS.white,
        fontFamily: FONTS.Poppins800
    },

    tenWhite900: {
        fontSize: Responsive.font(10),
        color: COLORS.white,
        fontFamily: FONTS.Poppins900
    },



    twelveWhite400: {
        fontSize: Responsive.font(12),
        color: COLORS.white,
        fontFamily: FONTS.Poppins400
    },

    twelveWhite500: {
        fontSize: Responsive.font(12),
        color: COLORS.white,
        fontFamily: FONTS.Poppins500
    },

    twelveWhite600: {
        fontSize: Responsive.font(12),
        color: COLORS.white,
        fontFamily: FONTS.Poppins600
    },

    twelveWhite700: {
        fontSize: Responsive.font(12),
        color: COLORS.white,
        fontFamily: FONTS.Poppins700
    },

    twelveWhite800: {
        fontSize: Responsive.font(12),
        color: COLORS.white,
        fontFamily: FONTS.Poppins800
    },

    twelveWhite900: {
        fontSize: Responsive.font(12),
        color: COLORS.white,
        fontFamily: FONTS.Poppins900
    },



    fourteenWhite400: {
        fontSize: Responsive.font(14),
        color: COLORS.white,
        fontFamily: FONTS.Poppins400
    },

    fourteenWhite500: {
        fontSize: Responsive.font(14),
        color: COLORS.white,
        fontFamily: FONTS.Poppins500
    },

    fourteenWhite600: {
        fontSize: Responsive.font(14),
        color: COLORS.white,
        fontFamily: FONTS.Poppins600
    },

    fourteenWhite700: {
        fontSize: Responsive.font(14),
        color: COLORS.white,
        fontFamily: FONTS.Poppins700
    },

    fourteenWhite800: {
        fontSize: Responsive.font(14),
        color: COLORS.white,
        fontFamily: FONTS.Poppins800
    },

    fourteenWhite900: {
        fontSize: Responsive.font(14),
        color: COLORS.white,
        fontFamily: FONTS.Poppins900
    },

    


    sixteenWhite400: {
        fontSize: Responsive.font(16),
        color: COLORS.white,
        fontFamily: FONTS.Poppins400
    },

    sixteenWhite500: {
        fontSize: Responsive.font(16),
        color: COLORS.white,
        fontFamily: FONTS.Poppins500
    },

    sixteenWhite600: {
        fontSize: Responsive.font(16),
        color: COLORS.white,
        fontFamily: FONTS.Poppins600
    },

    sixteenWhite700: {
        fontSize: Responsive.font(16),
        color: COLORS.white,
        fontFamily: FONTS.Poppins700
    },

    sixteenWhite800: {
        fontSize: Responsive.font(16),
        color: COLORS.white,
        fontFamily: FONTS.Poppins800
    },

    sixteenWhite900: {
        fontSize: Responsive.font(16),
        color: COLORS.white,
        fontFamily: FONTS.Poppins900
    },



    eighteenWhite400: {
        fontSize: Responsive.font(18),
        color: COLORS.white,
        fontFamily: FONTS.Poppins400
    },

    eighteenWhite500: {
        fontSize: Responsive.font(18),
        color: COLORS.white,
        fontFamily: FONTS.Poppins500
    },

    eighteenWhite600: {
        fontSize: Responsive.font(18),
        color: COLORS.white,
        fontFamily: FONTS.Poppins600
    },

    eighteenWhite700: {
        fontSize: Responsive.font(18),
        color: COLORS.white,
        fontFamily: FONTS.Poppins700
    },

    eighteenWhite800: {
        fontSize: Responsive.font(18),
        color: COLORS.white,
        fontFamily: FONTS.Poppins800
    },

    eighteenWhite900: {
        fontSize: Responsive.font(18),
        color: COLORS.white,
        fontFamily: FONTS.Poppins900
    },



    twentyWhite400: {
        fontSize: Responsive.font(20),
        color: COLORS.white,
        fontFamily: FONTS.Poppins400
    },

    twentyWhite500: {
        fontSize: Responsive.font(20),
        color: COLORS.white,
        fontFamily: FONTS.Poppins500
    },

    twentyWhite600: {
        fontSize: Responsive.font(20),
        color: COLORS.white,
        fontFamily: FONTS.Poppins600
    },

    twentyWhite700: {
        fontSize: Responsive.font(20),
        color: COLORS.white,
        fontFamily: FONTS.Poppins700
    },

    twentyWhite800: {
        fontSize: Responsive.font(20),
        color: COLORS.white,
        fontFamily: FONTS.Poppins800
    },

    twentyWhite900: {
        fontSize: Responsive.font(20),
        color: COLORS.white,
        fontFamily: FONTS.Poppins900
    },











    tenBlack400: {
        fontSize: Responsive.font(10),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins400
    },

    tenBlack500: {
        fontSize: Responsive.font(10),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins500
    },

    tenBlack600: {
        fontSize: Responsive.font(10),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins600
    },

    tenBlack700: {
        fontSize: Responsive.font(10),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins700
    },

    tenBlack800: {
        fontSize: Responsive.font(10),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins800
    },

    tenBlack900: {
        fontSize: Responsive.font(10),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins900
    },



    twelveBlack400: {
        fontSize: Responsive.font(13),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins400
    },

    twelveBlack500: {
        fontSize: Responsive.font(13),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins500
    },

    twelveBlack600: {
        fontSize: Responsive.font(12),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins600
    },

    twelveBlack700: {
        fontSize: Responsive.font(12),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins700
    },

    twelveBlack800: {
        fontSize: Responsive.font(12),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins800
    },

    twelveBlack900: {
        fontSize: Responsive.font(12),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins900
    },



    fourteenBlack400: {
        fontSize: Responsive.font(13),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins400,
  
    },

    fourteenBlack500: {
        fontSize: Responsive.font(14),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins500
    },

    fourteenBlack600: {
        fontSize: Responsive.font(14),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins600
    },

    fourteenBlack700: {
        fontSize: Responsive.font(14),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins700
    },

    fourteenBlack800: {
        fontSize: Responsive.font(14),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins800
    },

    fourteenBlack900: {
        fontSize: Responsive.font(14),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins900
    },

    


    sixteenBlack400: {
        fontSize: Responsive.font(16),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins400
    },

    sixteenBlack500: {
        fontSize: Responsive.font(16),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins500
    },

    sixteenBlack600: {
        fontSize: Responsive.font(16),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins600
    },

    sixteenBlack700: {
        fontSize: Responsive.font(16),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins700
    },

    sixteenBlack800: {
        fontSize: Responsive.font(16),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins800
    },

    sixteenBlack900: {
        fontSize: Responsive.font(16),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins900
    },



    eighteenBlack400: {
        fontSize: Responsive.font(18),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins400
    },

    eighteenBlack500: {
        fontSize: Responsive.font(18),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins500
    },

    eighteenBlack600: {
        fontSize: Responsive.font(18),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins600
    },

    eighteenBlack700: {
        fontSize: Responsive.font(18),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins700
    },

    eighteenBlack800: {
        fontSize: Responsive.font(18),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins800
    },

    eighteenBlack900: {
        fontSize: Responsive.font(18),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins900
    },

    

    twentyBlack400: {
        fontSize: Responsive.font(20),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins400
    },

    twentyBlack500: {
        fontSize: Responsive.font(20),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins500
    },

    twentyBlack600: {
        fontSize: Responsive.font(20),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins600
    },

    twentyBlack700: {
        fontSize: Responsive.font(20),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins700
    },

    twentyBlack800: {
        fontSize: Responsive.font(20),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins800
    },

    twentyBlack900: {
        fontSize: Responsive.font(20),
        color: COLORS.Black,
        fontFamily: FONTS.Poppins900
    },









    tenBlueText400: {
        fontSize: Responsive.font(10),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins400
    },

    tenBlueText500: {
        fontSize: Responsive.font(10),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins500
    },

    tenBlueText600: {
        fontSize: Responsive.font(10),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins600
    },

    tenBlueText700: {
        fontSize: Responsive.font(10),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins700
    },

    tenBlueText800: {
        fontSize: Responsive.font(10),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins800
    },

    tenBlueText900: {
        fontSize: Responsive.font(10),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins900
    },



    twelveBlueText400: {
        fontSize: Responsive.font(12),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins400
    },

    twelveBlueText500: {
        fontSize: Responsive.font(12),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins500
    },

    twelveBlueText600: {
        fontSize: Responsive.font(12),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins600
    },

    twelveBlueText700: {
        fontSize: Responsive.font(12),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins700
    },

    twelveBlueText800: {
        fontSize: Responsive.font(12),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins800
    },

    twelveBlueText900: {
        fontSize: Responsive.font(12),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins900
    },



    fourteenBlueText400: {
        fontSize: Responsive.font(14),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins400
    },

    fourteenBlueText500: {
        fontSize: Responsive.font(14),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins500
    },

    fourteenBlueText600: {
        fontSize: Responsive.font(14),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins600
    },

    fourteenBlueText700: {
        fontSize: Responsive.font(14),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins700
    },

    fourteenBlueText800: {
        fontSize: Responsive.font(14),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins800
    },

    fourteenBlueText900: {
        fontSize: Responsive.font(14),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins900
    },

    
    sixteenBlueText400: {
        fontSize: Responsive.font(16),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins400
    },

    sixteenBlueText500: {
        fontSize: Responsive.font(16),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins500
    },

    sixteenBlueText600: {
        fontSize: Responsive.font(16),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins600
    },

    sixteenBlueText700: {
        fontSize: Responsive.font(16),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins700
    },

    sixteenBlueText800: {
        fontSize: Responsive.font(16),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins800
    },

    sixteenBlueText900: {
        fontSize: Responsive.font(16),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins900
    },



    eighteenBlueText400: {
        fontSize: Responsive.font(18),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins400
    },

    eighteenBlueText500: {
        fontSize: Responsive.font(18),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins500
    },

    eighteenBlueText600: {
        fontSize: Responsive.font(18),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins600
    },

    eighteenBlueText700: {
        fontSize: Responsive.font(18),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins700
    },

    eighteenBlueText800: {
        fontSize: Responsive.font(18),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins800
    },

    eighteenBlueText900: {
        fontSize: Responsive.font(18),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins900
    },

    

    twentyBlueText400: {
        fontSize: Responsive.font(20),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins400
    },

    twentyBlueText500: {
        fontSize: Responsive.font(20),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins500
    },

    twentyBlueText600: {
        fontSize: Responsive.font(20),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins600
    },

    twentyBlueText700: {
        fontSize: Responsive.font(20),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins700
    },

    twentyBlueText800: {
        fontSize: Responsive.font(20),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins800
    },

    twentyBlueText900: {
        fontSize: Responsive.font(20),
        color: COLORS.blueText,
        fontFamily: FONTS.Poppins900
    },

    








    tenRedText400: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    tenRedText500: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    tenRedText600: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    tenRedText700: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    tenRedText800: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    tenRedText900: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },



    twelveRedText400: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    twelveRedText500: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    twelveRedText600: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    twelveRedText700: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    twelveRedText800: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    twelveRedText900: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },



    fourteenRedText400: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    fourteenRedText500: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    fourteenRedText600: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    fourteenRedText700: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    fourteenRedText800: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    fourteenRedText900: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },

    


    sixteenRedText400: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    sixteenRedText500: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    sixteenRedText600: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    sixteenRedText700: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    sixteenRedText800: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    sixteenRedText900: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },



    eighteenRedText400: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    eighteenRedText500: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    eighteenRedText600: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    eighteenRedText700: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    eighteenRedText800: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    eighteenRedText900: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },

    

    twentyRedText400: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    twentyRedText500: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    twentyRedText600: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    twentyRedText700: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    twentyRedText800: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    twentyRedText900: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },

    








    tenPlaceHolderColor400: {
        fontSize: Responsive.font(10),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins500
    },

    tenPlaceHolderColor500: {
        fontSize: Responsive.font(12),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins500
    },

    tenPlaceHolderColor600: {
        fontSize: Responsive.font(10),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins600
    },

    tenPlaceHolderColor700: {
        fontSize: Responsive.font(10),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins700
    },

    tenPlaceHolderColor800: {
        fontSize: Responsive.font(10),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins800
    },

    tenPlaceHolderColor900: {
        fontSize: Responsive.font(10),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins900
    },



    twelvePlaceHolderColor400: {
        fontSize: Responsive.font(11),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins400
    },

    twelvePlaceHolderColor500: {
        fontSize: Responsive.font(12),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins500
    },

    twelvePlaceHolderColor600: {
        fontSize: Responsive.font(12),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins600
    },

    twelvePlaceHolderColor700: {
        fontSize: Responsive.font(12),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins700
    },

    twelvePlaceHolderColor800: {
        fontSize: Responsive.font(12),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins800
    },

    twelvePlaceHolderColor900: {
        fontSize: Responsive.font(12),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins900
    },



    fourteenPlaceHolderColor400: {
        fontSize: Responsive.font(14),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins400
    },

    fourteenPlaceHolderColor500: {
        fontSize: Responsive.font(14),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins500
    },

    fourteenPlaceHolderColor600: {
        fontSize: Responsive.font(14),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins600
    },

    fourteenPlaceHolderColor700: {
        fontSize: Responsive.font(14),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins700
    },

    fourteenPlaceHolderColor800: {
        fontSize: Responsive.font(14),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins800
    },

    fourteenPlaceHolderColor900: {
        fontSize: Responsive.font(14),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins900
    },

    


    sixteenPlaceHolderColor400: {
        fontSize: Responsive.font(16),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins400
    },

    sixteenPlaceHolderColor500: {
        fontSize: Responsive.font(16),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins500
    },

    sixteenPlaceHolderColor600: {
        fontSize: Responsive.font(16),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins600
    },

    sixteenPlaceHolderColor700: {
        fontSize: Responsive.font(16),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins700
    },

    sixteenPlaceHolderColor800: {
        fontSize: Responsive.font(16),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins800
    },

    sixteenPlaceHolderColor900: {
        fontSize: Responsive.font(16),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins900
    },



    eighteenPlaceHolderColor400: {
        fontSize: Responsive.font(18),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins400
    },

    eighteenPlaceHolderColor500: {
        fontSize: Responsive.font(18),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins500
    },

    eighteenPlaceHolderColor600: {
        fontSize: Responsive.font(18),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins600
    },

    eighteenPlaceHolderColor700: {
        fontSize: Responsive.font(18),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins700
    },

    eighteenPlaceHolderColor800: {
        fontSize: Responsive.font(18),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins800
    },

    eighteenPlaceHolderColor900: {
        fontSize: Responsive.font(18),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins900
    },

    

    twentyPlaceHolderColor400: {
        fontSize: Responsive.font(20),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins400
    },

    twentyPlaceHolderColor500: {
        fontSize: Responsive.font(20),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins500
    },

    twentyPlaceHolderColor600: {
        fontSize: Responsive.font(20),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins600
    },

    twentyPlaceHolderColor700: {
        fontSize: Responsive.font(20),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins700
    },

    twentyPlaceHolderColor800: {
        fontSize: Responsive.font(20),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins800
    },

    twentyPlaceHolderColor900: {
        fontSize: Responsive.font(20),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.Poppins900
    },

    
    








    tenRedText400: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    tenRedText500: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    tenRedText600: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    tenRedText700: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    tenRedText800: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    tenRedText900: {
        fontSize: Responsive.font(10),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },



    twelveRedText400: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    twelveRedText500: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    twelveRedText600: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    twelveRedText700: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    twelveRedText800: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    twelveRedText900: {
        fontSize: Responsive.font(12),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },



    fourteenRedText400: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    fourteenRedText500: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    fourteenRedText600: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    fourteenRedText700: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    fourteenRedText800: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    fourteenRedText900: {
        fontSize: Responsive.font(14),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },

    


    sixteenRedText400: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    sixteenRedText500: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    sixteenRedText600: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    sixteenRedText700: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    sixteenRedText800: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    sixteenRedText900: {
        fontSize: Responsive.font(16),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },



    eighteenRedText400: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    eighteenRedText500: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    eighteenRedText600: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    eighteenRedText700: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    eighteenRedText800: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    eighteenRedText900: {
        fontSize: Responsive.font(18),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },

    

    twentyRedText400: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins400
    },

    twentyRedText500: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins500
    },

    twentyRedText600: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins600
    },

    twentyRedText700: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins700
    },

    twentyRedText800: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins800
    },

    twentyRedText900: {
        fontSize: Responsive.font(20),
        color: COLORS.redText,
        fontFamily: FONTS.Poppins900
    },

  
    








    tenGreenAppColor400: {
        fontSize: Responsive.font(10),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins400
    },

    tenGreenAppColor500: {
        fontSize: Responsive.font(10),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins500
    },

    tenGreenAppColor600: {
        fontSize: Responsive.font(10),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins600
    },

    tenGreenAppColor700: {
        fontSize: Responsive.font(10),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins700
    },

    tenGreenAppColor800: {
        fontSize: Responsive.font(10),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins800
    },

    tenGreenAppColor900: {
        fontSize: Responsive.font(10),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins900
    },



    twelveGreenAppColor400: {
        fontSize: Responsive.font(12),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins400
    },

    twelveGreenAppColor500: {
        fontSize: Responsive.font(12),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins500
    },

    twelveGreenAppColor600: {
        fontSize: Responsive.font(12),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins600
    },

    twelveGreenAppColor700: {
        fontSize: Responsive.font(12),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins700
    },

    twelveGreenAppColor800: {
        fontSize: Responsive.font(12),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins800
    },

    twelveGreenAppColor900: {
        fontSize: Responsive.font(12),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins900
    },



    fourteenGreenAppColor400: {
        fontSize: Responsive.font(14),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins400
    },

    fourteenGreenAppColor500: {
        fontSize: Responsive.font(14),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins500
    },

    fourteenGreenAppColor600: {
        fontSize: Responsive.font(14),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins600
    },

    fourteenGreenAppColor700: {
        fontSize: Responsive.font(14),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins700
    },

    fourteenGreenAppColor800: {
        fontSize: Responsive.font(14),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins800
    },

    fourteenGreenAppColor900: {
        fontSize: Responsive.font(14),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins900
    },

    


    sixteenGreenAppColor400: {
        fontSize: Responsive.font(16),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins400
    },

    sixteenGreenAppColor500: {
        fontSize: Responsive.font(16),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins500
    },

    sixteenGreenAppColor600: {
        fontSize: Responsive.font(16),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins600
    },

    sixteenGreenAppColor700: {
        fontSize: Responsive.font(16),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins700
    },

    sixteenGreenAppColor800: {
        fontSize: Responsive.font(16),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins800
    },

    sixteenGreenAppColor900: {
        fontSize: Responsive.font(16),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins900
    },



    eighteenGreenAppColor400: {
        fontSize: Responsive.font(18),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins400
    },

    eighteenGreenAppColor500: {
        fontSize: Responsive.font(18),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins500
    },

    eighteenGreenAppColor600: {
        fontSize: Responsive.font(18),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins600
    },

    eighteenGreenAppColor700: {
        fontSize: Responsive.font(18),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins700
    },

    eighteenGreenAppColor800: {
        fontSize: Responsive.font(18),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins800
    },

    eighteenGreenAppColor900: {
        fontSize: Responsive.font(18),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins900
    },

    

    twentyGreenAppColor400: {
        fontSize: Responsive.font(20),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins400
    },

    twentyGreenAppColor500: {
        fontSize: Responsive.font(20),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins500
    },

    twentyGreenAppColor600: {
        fontSize: Responsive.font(20),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins600
    },

    twentyGreenAppColor700: {
        fontSize: Responsive.font(20),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins700
    },

    twentyGreenAppColor800: {
        fontSize: Responsive.font(20),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins800
    },

    twentyGreenAppColor900: {
        fontSize: Responsive.font(20),
        color: COLORS.greenAppColor,
        fontFamily: FONTS.Poppins900
    },




});