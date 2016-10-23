import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem } from 'native-base';

export default class Locations extends Component {
  render() {
    return (
      <Container style={styles.alignmentFix}>
        <Content>
          <List>
            <ListItem>
              <Card>
                <CardItem>
                  <Text>Nashville</Text>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://c2.staticflickr.com/6/5509/12298744374_9441f9cbeb_b.jpg'}} />
                  <Button transparent textStyle={{color: '#87838B'}} onPress={this.handleNashville}>
                      389 Providers Online
                  </Button>
                </CardItem>
              </Card>
            </ListItem>
            <ListItem>
              <Card>
                <CardItem>
                  <Text>Las Vegas</Text>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://www.firstoptiononline.com/wp-content/uploads/2014/10/las-vegas-skyline.jpg'}} />
                  <Button transparent textStyle={{color: '#87838B'}} onPress={this.handleNashville}>
                      452 Providers Online
                  </Button>
                </CardItem>
              </Card>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }

  handleNashville() {
    console.log('HANDLE NASHVILLE')
    Actions.category({type: 'push'})
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60
  },
});
