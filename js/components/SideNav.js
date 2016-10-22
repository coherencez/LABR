import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Content>
            <List style={styles.alignmentFix}>
                <ListItem iconLeft>
                    <Icon name='ios-chatboxes' />
                    <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name='ios-alarm' />
                    <Text>Nathaniel Clyne</Text>
                    <Badge>2</Badge>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name='ios-notifications' />
                    <Text>Dejan Lovren</Text>
                    <Text note>Note here</Text>
                </ListItem>
                <ListItem iconLeft iconRight>
                    <Icon name='ios-mic' />
                    <Text>Mama Sakho</Text>
                    <Icon name='ios-mic-outline' />
                </ListItem>
            </List>
        </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60,
  },
});
