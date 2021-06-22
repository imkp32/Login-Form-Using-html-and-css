import React, { Component } from 'react'
import './dashboard.css';
import {Col,Row,Container} from 'react-bootstrap';
import WidgetText from './widgetText'
import WidgetBar from './widgetBar';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { options } from 'fusioncharts';

const config = {
    apiKey:"",
    spreadsheetId:""
}
const url = ""


 class dashboard extends Component {

   
    render() {
        const chartData = [
            {
              label: "NAV",
              value: "290"
            },
            {
              label: "1 Day Return",
              value: "260"
            },
            {
              label: "1 Week Return",
              value: "180"
            },
            {
              label: "1 Month Return",
              value: "140"
            },
            {
              label: "1 Quarter Return",
              value: "115"
            },
            {
              label: "1 Year Return",
              value: "100"
            },
            {
              label: "Week to Day",
              value: "30"
            },
            {
              label: "Month to Day",
              value: "30"
            },
            {
                label: "Year to Day",
                value: "30"
              },
              {
                label: "Quarter to Day",
                value: "30"
              },
              {
                label: "Last week Return",
                value: "30"
              },
              {
                label: "Last month Return",
                value: "30"
              },
              {
                label: "Last Quarter Return",
                value: "30"
              },
              {
                label: "Last Year Return",
                value: "30"
              }
          ];

          const options = [
            'one', 'two', 'three'
          ];
          const defaultOption = options[0];

         
        return (
            <div>
              <Container>
                <Row className='topHeader'>
                   <Col>
                        MarketView Dashboard
                   </Col>
                   <Col>
                        Hello there
                   </Col>      
                </Row>
              </Container>
              <Container>
                <Row className='mainDashboard'>
                  <Col>
                    <WidgetText title='NAV' value='100' description ='hello there' />
                  </Col>
                  <Col>
                    <WidgetText title='One day Return' value='100' description ='hello there' />
                  </Col>
                  <Col>
                    <WidgetText title='One Week Return' value='100' description ='hello there' />
                  </Col>
                  <Col>
                  </Col>

                </Row>
              </Container>
                
            </div>
        );
    }
 }

export default dashboard
