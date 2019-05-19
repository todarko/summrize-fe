import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';
import { WebBrowser } from 'expo';

import styles from '../components/Styles'

export default class ArticleDetails extends React.Component {
    static navigationOptions = {
        title:'article comments'
    
    }
        
    constructor(props) {
        super(props);
        this.scrollView = null;
        this.state = {
            data: null,
        };
    }


render() {
    return (
        this._handleData()
    );
}

_handleData() { //add view for each button && add styling
        const item = this.props.navigation.state.params;        

  switch(!this.props.navigation.state.params)
  {

    case !this.props.navigation.state.params.mornin :
        return (
        <View style={styles.container}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
          <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
          <Text style={styles.article_description}>{this.props.navigation.state.params.mornin.article_description}</Text>
          <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.mornin.url, {readerMode:true})}>Read full article...</Text>
          <Text style={styles.titleText}>comments...</Text>
          <FlatList
                    data={this.props.navigation.state.params.mornin.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
          <Text style={styles.titleText} onPress={() => this._handleCommentsPress(item.mornin.permalink)}>see full comments...</Text>

                </View>
          </ScrollView>
        </View>)
    case !this.props.navigation.state.params.aftnoon :
    return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>      
          <Text style={styles.article_description}>{this.props.navigation.state.params.aftnoon.article_description}</Text>
          <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.aftnoon.url, {readerMode:true})}>Read full article...</Text>
          <Text style={styles.titleText}>comments...</Text>
                <FlatList
                    data={this.props.navigation.state.params.aftnoon.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
          <Text style={styles.titleText} onPress={() => this._handleCommentsPress(item.aftnoon.permalink)}>see full comments...</Text>
      </View>
      </ScrollView>
    </View>)
    case !this.props.navigation.state.params.evenin :
    return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>      
          <Text style={styles.article_description}>{this.props.navigation.state.params.evenin.article_description}</Text>
          <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.evenin.url, {readerMode:true})}>Read full article...</Text>
          <Text style={styles.titleText}>comments...</Text>
                <FlatList
                    data={this.props.navigation.state.params.evenin.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
          <Text style={styles.titleText} onPress={() => this._handleCommentsPress(item.evenin.permalink)}>see full comments...</Text>
      </View>
      </ScrollView>
    </View>)
        case !this.props.navigation.state.params.day :
        return (
        <View style={styles.container}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
          <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
          <Text style={styles.article_description}>{this.props.navigation.state.params.day.article_description}</Text>
          <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.day.url, {readerMode:true})}>Read full article...</Text>
          <Text style={styles.titleText}>comments...</Text>
          <FlatList
                    data={this.props.navigation.state.params.day.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
          <Text style={styles.titleText} onPress={() => this._handleCommentsPress(item.day.permalink)}>see full comments...</Text>
                </View>
          </ScrollView>
        </View>)
        case !this.props.navigation.state.params.week :
        return (
        <View style={styles.container}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
          <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
          <Text style={styles.article_description}>{this.props.navigation.state.params.week.article_description}</Text>
          <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.week.url, {readerMode:true})}>Read full article...</Text>
          <Text style={styles.titleText}>comments...</Text>
          <FlatList
                    data={this.props.navigation.state.params.week.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
          <Text style={styles.titleText} onPress={() => this._handleCommentsPress(item.week.permalink)}>see full comments...</Text>
                </View>
          </ScrollView>
        </View>)
        case !this.props.navigation.state.params.month :
        return (
        <View style={styles.container}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
          <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
          <Text style={styles.article_description}>{this.props.navigation.state.params.month.article_description}</Text>
          <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.month.url, {readerMode:true})}>Read full article...</Text>
          <Text style={styles.titleText}>comments...</Text>
          <FlatList
                    data={this.props.navigation.state.params.month.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
          <Text style={styles.titleText} onPress={() => this._handleCommentsPress(item.month.permalink)}>see full comments...</Text>
                </View>
          </ScrollView>
        </View>)
        case !this.props.navigation.state.params.year :
        return (
        <View style={styles.container}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
          <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
          <Text style={styles.article_description}>{this.props.navigation.state.params.year.article_description}</Text>
          <Text style={styles.articleUrl} onPress={() => this._handleLearnMorePress(item.year.url, {readerMode:true})}>Read full article...</Text>
          <Text style={styles.titleText}>comments...</Text>
          <FlatList
                    data={this.props.navigation.state.params.year.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
          <Text style={styles.titleText} onPress={() => this._handleCommentsPress(item.year.permalink)}>see full comments...</Text>
                </View>
          </ScrollView>
        </View>)
        /* case !this.props.navigation.state.params.all :
        return (
        <View style={styles.container}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} ref={scrollView => {
                //Sometimes ref can be null so we check it. 
                if(scrollView !== null && this.scrollView !== scrollView){
                    this.scrollView = scrollView
                    scrollView.scrollTo({x: 0});}}}>
          <View style={{flex: 1, paddingBottom: 0}}>
          <View style={styles.imageWrapper}><Image source = {{uri: this._handleEmptyStringUri(item) }} style={this._handleEmtypImage(item)}/></View>
          <Text>{this.props.navigation.state.params.all._id}</Text>
          <Text style={styles.titleText}>comments...</Text>
          <FlatList
                    data={this.props.navigation.state.params.all.children}
                    keyExtractor={(item, index) => item.author.toString()}
                    renderItem={({item}) => 
                    <TouchableHighlight><View> 
                        <View style={styles.commentLabel}><Text style={styles.developmentModeText}>{item.body} </Text></View>
                        <View style={styles.commentRow}><Text style={styles.subRedditText}>by: {item.author}</Text>
                        <Text style={styles.subRedditText}>{item.score}</Text></View>
                    </View></TouchableHighlight>}
                />
                </View>
          </ScrollView>
        </View>) */
  }
  }

  

    _handleLearnMorePress(url) {
        WebBrowser.openBrowserAsync(url);
      }

      _handleCommentsPress(url) {
        WebBrowser.openBrowserAsync("https://www.reddit.com/" + url);
      }

      _handleEmtypImage(item) {
        //console.log(item)
          if (item.mornin) {
            if (!item.mornin.article_thumbnail && !item.mornin.article) {
                //console.log("what" + item.mornin.article)
                return styles.imageThumbnailsNull
              }
              else {
                return styles.articleImage
              }
          }
          else if (item.aftnoon) {
            if (!item.aftnoon.article_thumbnail && !item.aftnoon.article) {
                //console.log("what" + item.mornin.article)
                return styles.imageThumbnailsNull
              }
              else {
                return styles.articleImage
              }
          }
            else if (item.evenin) {
              if (!item.evenin.article_thumbnail && !item.evenin.article) {
                  //console.log("what" + item.mornin.article)
                  return styles.imageThumbnailsNull
                }
                else {
                  return styles.articleImage
                }
            }
            else if (item.day) {
              if (!item.day.article_thumbnail && !item.day.article) {
                  //console.log("what" + item.mornin.article)
                  return styles.imageThumbnailsNull
                }
                else {
                  return styles.articleImage
                }
            }
            else if (item.week) {
              if (!item.week.article_thumbnail && !item.week.article) {
                  //console.log("what" + item.mornin.article)
                  return styles.imageThumbnailsNull
                }
                else {
                  return styles.articleImage
                }
            }
            else if (item.month) {
              if (!item.month.article_thumbnail && !item.month.article) {
                  //console.log("what" + item.mornin.article)
                  return styles.imageThumbnailsNull
                }
                else {
                  return styles.articleImage
                }
            }
            else if (item.year) {
              if (!item.year.article_thumbnail && !item.year.article) {
                  //console.log("what" + item.mornin.article)
                  return styles.imageThumbnailsNull
                }
                else {
                  return styles.articleImage
                }
            }
            else if (item.all) {
              if (!item.all.article_thumbnail && !item.all.article) {
                  //console.log("what" + item.mornin.article)
                  return styles.imageThumbnailsNull
                }
                else {
                  return styles.articleImage
                }
            }
        }
    
      _handleEmptyStringUri(item) {
        //console.log(item)
        if (item.mornin) {
            if (!item.mornin.article_thumbnail){
            //console.log("blah" + item.mornin.article_thumbnail)
            return item.mornin.article
          }
          else {
            return item.mornin.article_thumbnail
          }
        }
        else if (item.aftnoon) {
          if (!item.aftnoon.article_thumbnail){
            //console.log("blah" + item.mornin.article_thumbnail)
            return item.aftnoon.article
          }
          else {
            return item.aftnoon.article_thumbnail
          }
        }
          else if (item.evenin) {
            if (!item.evenin.article_thumbnail){
              //console.log("blah" + item.mornin.article_thumbnail)
              return item.evenin.article
            }
            else {
              return item.evenin.article_thumbnail
            }
        }
        else if (item.day) {
          if (!item.day.article_thumbnail){
            //console.log("blah" + item.mornin.article_thumbnail)
            return item.day.article
          }
          else {
            return item.day.article_thumbnail
          }
      }
          else if (item.week) {
            if (!item.week.article_thumbnail){
              //console.log("blah" + item.mornin.article_thumbnail)
              return item.week.article
            }
            else {
              return item.week.article_thumbnail
            }
        }
        else if (item.month) {
          if (!item.month.article_thumbnail){
            //console.log("blah" + item.mornin.article_thumbnail)
            return item.month.article
          }
          else {
            return item.month.article_thumbnail
          }
        }
        else if (item.year) {
          if (!item.year.article_thumbnail){
            //console.log("blah" + item.mornin.article_thumbnail)
            return item.year.article
          }
          else {
            return item.year.article_thumbnail
          }
        }
        else if (item.all) {
          if (!item.all.article_thumbnail){
            //console.log("blah" + item.mornin.article_thumbnail)
            return item.all.article
          }
          else {
            return item.all.article_thumbnail
          }
        }
        
      }
}


