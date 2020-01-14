import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  RefreshControl,
  Platform,
  UIManager
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      isLoading: true,
      isRefreshing: false,
      page: 1,
      pos: false
    };
  }

  fetchChat = async () => {
      const chat 
      this.setState({chat, isLoading:false, isRefreshing:false})
  }

  renderMessage = message => {
      return (
          //each chat message
          <> </>
      )
  }
  scrollToTop =  () => {
      this.flatListRef.scrollToIndex({animated:true, index: 0});
  }
  renderChat = () => {
      const {chat, isLoading} = this.state
      if(chat.length && isLoading){
          return (
              <FlatList
              style={}
              data={chats}
              ref={ref => {this.flatListRef = ref}}
              initialNumToRender={3}
              extraData={chats}
              horizontal
              keyExtractor={message => message.id.toString()}
              renderMessage={({messsag}) => this.renderMessage(message)}
              onEndReachedThreshold={0.3}
              initialScrollIndex={-1}
              onEndReached={} />
          )
      }
  }
  renderView = () => {
      const {isLoading} = this.state
      if(isLoading){
          return <></>
      }else{
          return this.renderChat()
      }
  }
  renderFab = () => {
    return (
      <FabButton
        style={
          this.state.page > 1
            ? [styles.scroll_up_fab, styles.scroll_up_fab_shown]
            : [styles.scroll_up_fab, styles.scroll_up_fab_hidden]
        }
        onPress={this.scrollToTop}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={Platform.OS === "ios" ? 40 : 50}
        />
      </FabButton>
    );
  };
  render(){
      return(
          <View style ={}>
              <View style={}>
                  {this.renderFab()}
                  {this.renderView()}
              </View>
          </View>
      )
  }
}
const styles = StyleSheet.create({})


