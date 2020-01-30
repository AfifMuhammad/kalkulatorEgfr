import React from 'react';
import { Container, Form, Item, Label, Radio, Input, Content, Text, Button, Header, Left, Title, Body, Right, Icon, Footer, FooterTab } from 'native-base';

export default class Calculation extends React.Component {
    state = {
        gender: '',
    }

    render() {
        return (
        <Container>
        
        <Header>
            <Body>
            <Title>Kalkulasi</Title>
            </Body>
            <Right />
        </Header>

        <Content>
            <Form>
                <Item fixedLabel>
                    <Label>Kreatinin</Label>
                    <Input keyboardType='numeric'/>
                </Item>
                <Item fixedLabel>
                    <Label>Usia</Label>
                    <Input keyboardType='numeric'/>
                    <Label>Tahun</Label>
                </Item>
                <Item fixedLabel>
                    <Label>Berat Badan</Label>
                    <Input keyboardType='numeric'/>
                    <Label>Kg</Label>
                </Item>
                <Item fixedLabel last>
                    <Left>
                    <Label>Jenis Kelamin</Label>
                    </Left>
                    
                    <Radio onPress={() => this.setState({ gender: 'Laki-laki' })}
                            selected={this.state.gender == 'Laki-laki'}/>
                    <Label>Laki-laki</Label>
                    <Radio onPress={() => this.setState({ gender: 'Perempuan' })}
                            selected={this.state.gender == 'Perempuan'}/>
                    <Label>Perempuan</Label>
                </Item>
            </Form>
        </Content>
        </Container>
        );
    }
}

