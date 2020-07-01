import React from "react";
import { StyleSheet, Button, View, Text, Image} from 'react-native';

class Home extends React.Component {
    constructor () {
      super();
      this.state = {
        text: 'No Dog',
        url: ''
      };
    }
    generateDog () {
    fetch("https://dog.ceo/api/breed/bulldog/french/images/random")
        .then(response => response.json())
        .then((responseJson) =>{
            this.setState({
                text: 'Enjoy',
                url: responseJson.message
            });
        })
    }
    generateCat () {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then((responseJson) =>{
                this.setState({
                    text: 'Enjoy',
                    url: responseJson[0].url
                });
            })
    }

    render () {
      return (
        <View>
          <Text>{this.state.text}</Text>
          <Text>{this.state.url}</Text>
          <Image
           source={{
            uri: `${this.state.url}`
           }}
           style={{ width: 400, height: 400 }}
           />
          <Button
           onPress={this.generateDog.bind(this)}
           title = "Frenchie"
           ></Button>

            <Button
           onPress={this.generateCat.bind(this)}
           color="#ff5c5c"
           title = "Kitty"
           ></Button>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    buttonStyle: {
        color: 'red',
    }
  });

export default Home;