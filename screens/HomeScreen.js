import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Animated,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  FlatList,
  TouchableHighlight,
  Platform,
  RefreshControl
} from 'react-native';
import { WebBrowser } from 'expo';
import styles from '../components/Styles'
import MorninComponent from '../components/MorninComponent';
import AftnoonComponent from '../components/AftnoonComponent';
import EveninComponent from '../components/EveninComponent';
import BannerComponent from '../components/BannerComponent'


const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  constructor(props) {
    super(props);
    this.scrollView = null;

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      data: null,
      renderedData: null,
      borderBottomWidth:0,
      scrollY: new Animated.Value(0),
      scrollAnim,
      offsetAnim,
      refreshing: false,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnim,
        ),
        0,
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
      ),
    };
    this._summrizeApiCall('mornin');
  }

  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;


  clearFocus() {
    this.setState({
      morninBorderFocus:0,
      aftnoonBorderFocus:0,
      eveninBorderFocus:0,
      dailyBorderFocus:0,
      weeklyBorderFocus:0,
      monthlyBorderFocus:0,
      yearlyBorderFocus:0,
      allBorderFocus:0,
    })

  }

  dailyFocus() {
    this.setState({
      dailyBorderFocus:5
    })
  }

  morninFocus() {
    this.setState({
      morninBorderFocus:5
    })
  }

  aftnoonFocus() {
    this.setState({
      aftnoonBorderFocus:5
    })
  }

  eveninFocus() {
    this.setState({
      eveninBorderFocus:5
    })
  }

  dailyFocus() {
    this.setState({
      dailyBorderFocus:5
    })
  }

  weeklyFocus() {
    this.setState({
      weeklyBorderFocus:5
    })
  }

  monthlyFocus() {
    this.setState({
      monthlyBorderFocus:5
    })
  }

  yearlyFocus() {
    this.setState({
      yearlyBorderFocus:5
    })
  }

  allFocus() {
    this.setState({
      allBorderFocus:5
    })
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this._summrizeApiCall('mornin').then(() => {
      this.setState({refreshing: false});
    });
  }

  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  componentDidMount() {
    this.state.scrollAnim.addListener(({ value }) => {
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });
  }

  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const toValue = this._scrollValue > NAVBAR_HEIGHT &&
      this._clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
      ? this._offsetValue + NAVBAR_HEIGHT
      : this._offsetValue - NAVBAR_HEIGHT;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { clampedScroll } = this.state;
    const {navigate} = this.props.navigation;
    const bottomNavBar = this.state.clampedScroll.interpolate({
      inputRange: [ 0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [ 0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      extrapolate: 'clamp',
    });
    const topNavBar = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)], //neg here moves it the opposite way
      extrapolate: 'clamp',
    });
    const navbarOpacity = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Animated.ScrollView scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {useNativeDriver: true},
          )} ref='_scrollView'
          scrollEventThrottle={16}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onScrollEndDrag={this._onScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            />
          }>
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
        <View style={{paddingBottom: 50, paddingTop:0, backgroundColor:'rgba(0,0,0,0)',}}></View>
              {this.state.renderedData}
        </ScrollView>
        <View style={{paddingBottom: 50, paddingTop:0, backgroundColor:'rgba(0,0,0,0)',}}></View>

        </Animated.ScrollView>
        <Animated.View style={[styles.navbar, { transform: [{ translateY: topNavBar }] }]}>
          <Animated.Text style={[styles.headerText, { opacity: navbarOpacity }]}>
          summrize
          </Animated.Text>
                    {this.selectedBanner}
        </Animated.View>
        <Animated.View style={[
            styles.tabBarInfoContainerBottom,
            {
              transform: [{
                translateY: bottomNavBar,
              }]
            },
            
          ]}> 
        <View style={styles.buttonRow}>
              <Animated.ScrollView horizontal= {true} showsHorizontalScrollIndicator={false} stickyHeaderIndices={[0]}>
                  <TouchableOpacity onPress={() => this._summrizeApiCall('mornin')} style={styles.helpLink}>
                    <View style={[styles.mornin,{borderBottomWidth:this.state.morninBorderFocus}]}>
                      <Text style={styles.tabBarInfoText}>mornin</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._summrizeApiCall('aftnoon')} style={styles.helpLink}>
                  <View style={[styles.aftnoon,{borderBottomWidth:this.state.aftnoonBorderFocus}]}>
                      <Text style={styles.tabBarInfoText}>aftnoon</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._summrizeApiCall('evenin')} style={styles.helpLink}>
                    <View style={[styles.evenin,{borderBottomWidth:this.state.eveninBorderFocus}]}>
                      <Text style={styles.tabBarInfoText}>evenin</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._summrizeApiCall('day')} style={styles.helpLink}>
                    <View style={[styles.dailyButton,{borderBottomWidth:this.state.dailyBorderFocus}]}>
                      <Text style={styles.tabBarInfoText}>daily</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._summrizeApiCall('week')} style={styles.helpLink}>
                    <View style={[styles.evenin,{borderBottomWidth:this.state.weeklyBorderFocus}]}>
                      <Text style={styles.tabBarInfoText}>weekly</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._summrizeApiCall('month')} style={styles.helpLink}>
                    <View style={[styles.aftnoon,{borderBottomWidth:this.state.monthlyBorderFocus}]}>
                      <Text style={styles.tabBarInfoText}>monthly</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._summrizeApiCall('year')} style={styles.helpLink}>
                    <View style={[styles.mornin,{borderBottomWidth:this.state.yearlyBorderFocus}]}>
                      <Text style={styles.tabBarInfoText}>yearly</Text>
                    </View>
                  </TouchableOpacity>
                  </Animated.ScrollView>
                  </View>
        </Animated.View>
    </View>
  </SafeAreaView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _summrizeApiCall(apiCall) { //could add return and add formatting to reduce pages?
    return fetch('https://api.summrize.com/api/' + apiCall)
    .then((response) => response.json())
      .then((responseJson) => {
        switch(apiCall)
        {
          case 'mornin' :
          //('mornin')
          const morninJson = [...new Map(responseJson.map(o => [o.mornin._id, o])).values()]
          this.clearFocus()
          this.morninFocus()
          this.setState({
          isLoading: false,
          dataSource: morninJson,
          selectedBanner:<EveninComponent />,
        })
          this.setState({renderedData:(
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} ref={scrollView => {
              //Sometimes ref can be null so we check it. 
              if(scrollView !== null && this.scrollView !== scrollView){
                  this.scrollView = scrollView
                  scrollView.scrollTo({x: 0});}}}>
              <FlatList
                    inverted
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.mornin._id.toString()}
                    renderItem={({item}) => 
                    <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.mornin.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.mornin.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                    }
                />
                </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0}, bounces=false), this.selectedBanner=(<MorninComponent />)) 
              return 
          case 'aftnoon' :
            const aftnoonJson = [...new Map(responseJson.map(o => [o.aftnoon._id, o])).values()]
            this.clearFocus()
            this.aftnoonFocus()
              this.setState({
              isLoading: false,
              dataSource: aftnoonJson,
              selectedBanner: <EveninComponent />
            })
              this.setState({renderedData:(
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <FlatList
                    inverted
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.aftnoon._id.toString()}
                    renderItem={({item}) => 
                    <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.aftnoon.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.aftnoon.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                    }
                />
                </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0, animated:false}), this.selectedBanner=(<AftnoonComponent />)) 
              return 
            case 'evenin' :
            const eveninJson = [...new Map(responseJson.map(o => [o.evenin._id, o])).values()]
            this.clearFocus()
            this.eveninFocus()
            this.setState({
            isLoading: false,
            dataSource: eveninJson,
          })
          
            this.setState({renderedData:(
              <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
                <FlatList
                      inverted
                      data={this.state.dataSource}
                      keyExtractor={(item, index) => item.evenin._id.toString()}
                      renderItem={({item}) => 
                      <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.evenin.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.evenin.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                      }
                  />
                  </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0},bounces=false), this.selectedBanner=(<EveninComponent />)) 
              return
            case 'day' :
          //('mornin')
          const dayJson = [...new Map(responseJson.map(o => [o.day._id, o])).values()]
          this.clearFocus()
          this.dailyFocus()
          this.setState({
          isLoading: false,
          dataSource: dayJson,
        })
          this.setState({renderedData:(
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} ref={scrollView => {
              //Sometimes ref can be null so we check it. 
              if(scrollView !== null && this.scrollView !== scrollView){
                  this.scrollView = scrollView
                  scrollView.scrollTo({x: 0});}}}>
              <FlatList
                    inverted
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.day._id.toString()}
                    renderItem={({item}) => 
                    <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.day.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.day.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                    }
                />
                </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0}, bounces=false), this.selectedBanner=(<BannerComponent />)) 
              return 
              case 'week' :
          const weekJson = [...new Map(responseJson.map(o => [o.week._id, o])).values()]
          this.clearFocus()
          this.weeklyFocus()
          this.setState({
          isLoading: false,
          dataSource: weekJson,
        })
          this.setState({renderedData:(
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} ref={scrollView => {
              //Sometimes ref can be null so we check it. 
              if(scrollView !== null && this.scrollView !== scrollView){
                  this.scrollView = scrollView
                  scrollView.scrollTo({x: 0});}}}>
              <FlatList
                    inverted
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.week._id.toString()}
                    renderItem={({item}) => 
                    <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.week.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.week.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                    }
                />
                </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0}, bounces=false), this.selectedBanner=(<BannerComponent />)) 
              return 
              case 'month' :
          //('mornin')
          const monthJson = [...new Map(responseJson.map(o => [o.month._id, o])).values()]
          this.clearFocus()
          this.monthlyFocus()
          this.setState({
          isLoading: false,
          dataSource: monthJson,
          selectedBanner:null,
        })
          this.setState({renderedData:(
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} ref={scrollView => {
              //Sometimes ref can be null so we check it. 
              if(scrollView !== null && this.scrollView !== scrollView){
                  this.scrollView = scrollView
                  scrollView.scrollTo({x: 0});}}}>
              <FlatList
                    inverted
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.month._id.toString()}
                    renderItem={({item}) => 
                    <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.month.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.month.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                    }
                />
                </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0}, bounces=false), this.selectedBanner=(<BannerComponent />)) 
              return 
              case 'year' :
          const yearJson = [...new Map(responseJson.map(o => [o.year._id, o])).values()]
          this.clearFocus()
          this.yearlyFocus()
          this.setState({
          isLoading: false,
          dataSource: yearJson,
        })
          this.setState({renderedData:(
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} ref={scrollView => {
              //Sometimes ref can be null so we check it. 
              if(scrollView !== null && this.scrollView !== scrollView){
                  this.scrollView = scrollView
                  scrollView.scrollTo({x: 0});}}}>
              <FlatList
                    inverted
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.year._id.toString()}
                    renderItem={({item}) => 
                    <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.year.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.year.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                    }
                />
                </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0}, bounces=false), this.selectedBanner=(<BannerComponent />)) 
              return 
              case 'all' :
          //('mornin')
          const allJson = [...new Map(responseJson.map(o => [o.all._id, o])).values()]
          this.clearFocus()
          this.allFocus()
          this.setState({
          isLoading: false,
          dataSource: allJson,
          selectedBanner:<EveninComponent />,
        })
          this.setState({renderedData:(
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} ref={scrollView => {
              //Sometimes ref can be null so we check it. 
              if(scrollView !== null && this.scrollView !== scrollView){
                  this.scrollView = scrollView
                  scrollView.scrollTo({x: 0});}}}>
              <FlatList
                    inverted
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item.all._id.toString()}
                    renderItem={({item}) => 
                    <TouchableWithoutFeedback style={styles.touchableHighlight}><View style={styles.lineStyle}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ArticleDetails', item)}><View><View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
                        <Text style={styles.titleText}>{item.all.title}</Text></View></TouchableWithoutFeedback>
                        <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.all.url, {readerMode:true})} >Read Article</Text>
                    </View></TouchableWithoutFeedback>
                    }
                />
                </ScrollView>
              )}, this.refs._scrollView.getNode().scrollTo({x: 0, y: 0}, bounces=false)) 
              return 
        };
      })
      .catch((error) =>{
        this.setState({renderedData:(
<View style={{ paddingTop:150,}}>
<Text style={styles.errorText}>Yikes... Check your Connection!</Text>
</View>

        )})
        return
   });
  }


  _handleEmtypImage(item) {
      if (item.mornin) {
        if (!item.mornin.article_thumbnail && !item.mornin.article) {
            return styles.imageThumbnailsNull
          }
          else {
            return styles.imageThumbnails
          }
      }
      else if (item.aftnoon) {
        if (!item.aftnoon.article_thumbnail && !item.aftnoon.article) {
            return styles.imageThumbnailsNull
          }
          else {
            return styles.imageThumbnails
          }
      }
        else if (item.evenin) {
          if (!item.evenin.article_thumbnail && !item.evenin.article) {
              return styles.imageThumbnailsNull
            }
            else {
              return styles.imageThumbnails
            }
        }
        else if (item.day) {
          if (!item.day.article_thumbnail && !item.day.article) {
              return styles.imageThumbnailsNull
            }
            else {
              return styles.imageThumbnails
            }
        }
        else if (item.week) {
          if (!item.week.article_thumbnail && !item.week.article) {
              return styles.imageThumbnailsNull
            }
            else {
              return styles.imageThumbnails
            }
        }
        else if (item.month) {
          if (!item.month.article_thumbnail && !item.month.article) {
              return styles.imageThumbnailsNull
            }
            else {
              return styles.imageThumbnails
            }
        }
        else if (item.year) {
          if (!item.year.article_thumbnail && !item.year.article) {
              return styles.imageThumbnailsNull
            }
            else {
              return styles.imageThumbnails
            }
        }
        else if (item.all) {
          if (!item.all.article_thumbnail && !item.all.article) {
              return styles.imageThumbnailsNull
            }
            else {
              return styles.imageThumbnails
            }
        }
    }

  _handleEmptyStringUri(item) {
    if (item.mornin) {
        if (!item.mornin.article_thumbnail){
        return item.mornin.article
      }
      else {
        return item.mornin.article_thumbnail
      }
    }
    else if (item.aftnoon) {
      if (!item.aftnoon.article_thumbnail){
        return item.aftnoon.article
      }
      else {
        return item.aftnoon.article_thumbnail
      }
    }
      else if (item.evenin) {
        if (!item.evenin.article_thumbnail){
          return item.evenin.article
        }
        else {
          return item.evenin.article_thumbnail
        }
    }
    else if (item.day) {
      if (!item.day.article_thumbnail){
        return item.day.article
      }
      else {
        return item.day.article_thumbnail
      }
  }
      else if (item.week) {
        if (!item.week.article_thumbnail){
          return item.week.article
        }
        else {
          return item.week.article_thumbnail
        }
    }
    else if (item.month) {
      if (!item.month.article_thumbnail){
        return item.month.article
      }
      else {
        return item.month.article_thumbnail
      }
    }
    else if (item.year) {
      if (!item.year.article_thumbnail){
        return item.year.article
      }
      else {
        return item.year.article_thumbnail
      }
    }
    else if (item.all) {
      if (!item.all.article_thumbnail){
        return item.all.article
      }
      else {
        return item.all.article_thumbnail
      }
    }
    
  }

  _handleLearnMorePress(url) {
    WebBrowser.openBrowserAsync(url);
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

