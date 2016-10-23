import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem } from 'native-base';


import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

export default class Providers extends Component {
  render() {
    const menu = <SideNav />
    return (
        <SideMenu menu={menu}>
        <Container style={styles.container}>
          <Content>
          <Grid>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
          </Grid>
          </Content>
        </Container>
        </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 60,
  },
});
