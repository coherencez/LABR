import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'

import { buttonBgColor, bgColor } from '../css/variables'
import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

export default class BusinessProfile extends Component {

  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.alignmentFix}>
        <Content>
          <Grid>
            <Row>
              <Col style={{ backgroundColor: '#22F', width: 150 }}>
                <Thumbnail square size={80} source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                <List>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text>Roofing</Text>
                      <Text note>since 1997</Text>
                  </ListItem>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text>Tile</Text>
                      <Text note>since 2001</Text>
                  </ListItem>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text>Roofing</Text>
                      <Text note>since 1997</Text>
                  </ListItem>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text>Tile</Text>
                      <Text note>since 2001</Text>
                  </ListItem>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text>Roofing</Text>
                      <Text note>since 1997</Text>
                  </ListItem>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text>Tile</Text>
                      <Text note>since 2001</Text>
                  </ListItem>
                </List>
              </Col>
              <Col style={{ backgroundColor: '#ff2', width: 300, height: 100 }}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    backgroundColor: buttonBgColor,
  },
  helperText: {
    fontSize: 13,
    margin: 5,
  },
  helperText2: {
    fontSize: 10,
    margin: 5,
    opacity: .7,
    left: 55,
  },
});
