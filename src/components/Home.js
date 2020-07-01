import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Spinner from './Spinner';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'No Dog',
            url: '',
            loading: null,
            buttonLoading: null
        };
    }
    generateDog() {
        this.setState({
            loading: true,
            buttonLoading: 'dog'
        });

        fetch("https://dog.ceo/api/breed/bulldog/french/images/random")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    text: 'Enjoy',
                    url: responseJson.message,
                    loading: false,
                    buttonLoading: null
                });
            });
    }
    generateCat() {
        this.setState({
            loading: true,
            buttonLoading: 'cat'
        });

        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    text: 'Enjoy',
                    url: responseJson[0].url,
                    loading: false,
                    buttonLoading: null
                });
            })
    }
    renderImage() {
        switch (this.state.loading) {
            case true:
                return (
                    <View
                    style={{ width: 400, height: 400, backgroundColor: '#db55ff' }}
                    >
                         <Spinner />
                    </View>
                )
            case false:
                return (
                    <Image
                        source={{
                            uri: `${this.state.url}`
                        }}
                        style={{ width: 400, height: 400, backgroundColor: '#db55ff' }}
                    />
                )
            default:
                return (
                    <View
                        style={{ width: 400, height: 400, backgroundColor: '#db55ff' }}
                    />
                )
                break;
        }
    }

    buttonDogImage() {
        switch (this.state.buttonLoading) {
            case 'dog':
                return (
                    <Spinner />
                )
            default:
                return (
                    <Image
                    source={require("../images/french.png")}
                    style={{ width: 80, height: 80}}
                    />
                )
                break;
        }
    }
    buttonCatImage() {
        switch (this.state.buttonLoading) {
            case 'cat':
                return (
                         <Spinner />
                )
            default:
                return (
                    <Image
                            source={require("../images/cat.png")}
                            style={{ width: 80, height: 80}}
                    />
                )
                break;
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: "black", padding: 20 }}>
                <Text style={styles.textStyle}>For My Lovely Dimyana!</Text>
                {this.renderImage()}
                <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', marginTop: 20 }}>
                    <Button
                        onPress={this.generateDog.bind(this)}
                        title="Frenchie"
                        style={styles.leftButton}
                    >
                        {this.buttonDogImage()}
                    </Button>

                    <Button
                        onPress={this.generateCat.bind(this)}
                        title="Kitty"
                        style={styles.rightButton}
                    >
                        
                        {this.buttonCatImage()}
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        color: 'red',
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        color: '#db55ff'

    },
    leftButton: {
        width: 120,
        height: 100,
        justifyContent: 'center',
        fontSize: 30,   
        fontWeight: 'bold',
        backgroundColor: '#ff5c5c'
    },
    rightButton: {
        width: 120,
        height: 100,
        justifyContent: 'center',
        fontSize: 30,   
        fontWeight: 'bold',
        backgroundColor: '#00cbe6'
    }

});

export default Home;