import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';


export default class SideNav extends Component {
  render() {
    return (
      <Container>
        <Content>
            <List style={styles.alignmentFix}>
              <ListItem iconLeft>
                <Icon name='md-contact' />
                <Text>Sign Up</Text>
                <Text note>Note here</Text>
              </ListItem>
                <ListItem iconLeft>
                    <Icon name='md-archive' />
                    <Text>History</Text>
                </ListItem>
                <ListItem iconLeft iconRight>
                    <Icon name='ios-briefcase' />
                    <Text>Business Account</Text>
                    <Icon name='ios-mic-outline' style={styles.hidden}/>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name='md-text' />
                    <Text>Messages</Text>
                    <Badge>3</Badge>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name='md-aperture' />
                    <Text>Settings</Text>
                </ListItem>
            </List>
        </Content>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60,
  },
  hidden: {
    opacity: 0,
  }
});
