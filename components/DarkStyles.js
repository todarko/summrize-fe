import { StyleSheet,Platform } from 'react-native'
import Dimensions from 'Dimensions';

const buttonWidth = Dimensions.get('window').width;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 0, android: 24 });
const NAVBAR_HEIGHT = 50;

const dark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171F33',
        marginTop:0
      },
      navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: '#171F33',
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        height: NAVBAR_HEIGHT,
        justifyContent: 'center',
        paddingTop: STATUS_BAR_HEIGHT,
      },
      viewContainer: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0)'
      },
      safeArea: {
        flex: 1,
        backgroundColor:'#171F33'
      },
      tabBarInfoContainerBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        
        alignItems: 'center',
        backgroundColor: '#171F33',
        paddingVertical: 0,
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
      },
      touchableHighlight: {
        backgroundColor: '#171F33',

      },
      lineStyle:{
        borderBottomWidth: 0.5,
        borderColor:'gray',
        margin:10,
        backgroundColor: '#171F33',
      },
      titleView:{
        backgroundColor:'#171F33',
        borderBottomWidth: 0.5,
        borderColor:'gray',
        top:15,
        right:20,
        left:20,    
        alignItems: 'center',
        justifyContent: 'center',
      },
      articleUrl: {
        marginBottom: 20,
        color: '#3e6990',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        backgroundColor: 'transparent'
      },
      headerText: {
        color: '#3e6990',
        fontSize: 20,
      },
      titleText: {
        width:'95%',
        paddingTop:10,
        paddingBottom: 10,
        color: '#3e6990',
        fontSize: 20,
        lineHeight: 19,
        textAlign: 'center',
        marginHorizontal:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        overflow:'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      summrizeTitle: {
        fontSize:30,
        borderBottomWidth:5,
        borderColor:'gray',
      },
      developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
      },
      contentContainer: {
        marginTop:0,
        top:0,
      },
      welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
      },
      welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
      },
      getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
      },
      homeScreenFilename: {
        marginVertical: 7,
      },
      codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)', //check here
      },
      codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
      },
      getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
      },
      tabBarInfoContainerTop: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        
        alignItems: 'center',
        backgroundColor: '#171F33',
        paddingVertical: 0,
      },
      tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,10,109, 1)',
        textAlign: 'center',
        textAlignVertical: 'center'
      },
      subRedditText: {
        fontSize: 13,
        backgroundColor: '#171F33',
        color: 'rgba(34,48,86, 1)',
        paddingHorizontal:20,
      },
      navigationFilename: {
        marginTop: 5,
      },
      helpContainer: {
        marginTop: 15,
        alignItems: 'center',
      },
      helpLink: {
        paddingVertical: 5,
        paddingHorizontal:5,
        backgroundColor: '#171F33',
    
      },
      helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
      },
      mornin: {
        width: buttonWidth/4,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'rgba(255,126,107, 1)',
        //this will be for the selected button
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
      },
      aftnoon: {
        width: buttonWidth/4,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'rgba(62,105,144, 1)',
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
      },
      evenin: {
        width: buttonWidth/4,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'rgba(243,155,109, 1)',
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
      },
      dailyButton:{
        width: buttonWidth/4,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'rgba(124,89,131, 1)',
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
    
      },
      weeklyButton:{
        width: buttonWidth/4,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'rgba(255,239,201, 1)',
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
    
      },
      monthlyButton:{
        width: buttonWidth/3.5,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'rgba(235,228,142, 1)',
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
    
      },
      yearlyButton:{
        width: buttonWidth/3.5,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'rgba(255,166,158, 1)',
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
    
      },
      allTimeButton:{
        width: buttonWidth/3.5,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'rgba(242,251,235, 1)',
        borderColor: '#a4b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { height: 3 },
            shadowOpacity: .5,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
    
      },
      buttonRow: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor: '#171F33',
      },
      imageThumbnails: {
        height: 250,
        borderRadius: 25,
        overflow:'hidden',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      imageThumbnailsNull: {
        backgroundColor: '#171F33',
        height:0
      },
      imageWrapper:{
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 6,    
          },
          android: {
            elevation: 5,
          },
        }),
      },
      articleImage: {
        height: 100,
        overflow:'hidden',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      errorText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#3e6990',
        fontSize: 20,
      },
      newPostText: {
        color:'white',
        fontSize: 12,
        lineHeight: 19,
        textAlign: 'center',
        marginHorizontal:5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      newPostBanner: {
        top:40,
        borderRadius:5,
        overflow:'hidden',
        position:'absolute',
        backgroundColor: 'gray',
        opacity: 0.7,
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 3,    
          },
          android: {
            elevation: 5,
          },
        }),
      },
})

//  dark mode 171F33
