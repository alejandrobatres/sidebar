import React from 'react';
import './App.css';
import { BiBarChartSquare, BiChart, BiMessageSquareDetail, BiCog } from 'react-icons/bi';
import { GiFootprint } from 'react-icons/gi';
import { FcButtingIn } from 'react-icons/fc';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
      <div id='layout'>
          <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                  </div>
                  <div className='content'>
                      <div className='patient'>
                        <FcButtingIn />
                        <div className='patient-name'>
                          <p className='patient-text'>Tam Tran</p>
                          <p className='patient-subtext'>Patient</p>
                        </div>
                        <div className='patient-arrows'>
                          <MdOutlineKeyboardArrowUp />
                          <MdOutlineKeyboardArrowDown />
                        </div>
                      </div>
                      <div>
                        <p className='tools-header'>Tools</p>
                        <ul>
                          <li>
                            <BiBarChartSquare />
                            <p className='tool'>Explore</p>
                          </li>
                          <li>
                            <BiChart />
                            <p className='tool'>Snippets</p>
                          </li>
                          <li>
                            <BiMessageSquareDetail />
                            <p className='tool'>Reports</p>
                          </li>
                          <li>
                            <BiCog />
                            <p className='tool'>Settings</p>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div className='tools-insights'>
                        <p className='tools-insights-text'>Insights</p>
                        <a></a>
                      </div>
                      <hr />
                      <div className='tools-footer'>
                        <p className='tools-footer-text'>Charts reference the left and right foot as follows.</p>
                        <div className='tools-footer-feet'>
                          <div className='tools-footer-foot'>
                            <GiFootprint />
                            <p style={{margin: '.5rem'}}>Left</p>
                          </div>
                          <div className='tools-footer-foot'>
                            <p style={{margin: '.5rem'}}>Right</p>
                            <GiFootprint />
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='header'>
                  <h3 className={`
                      title
                      ${'left-' + leftOpen}
                      ${'right-' + rightOpen}
                  `}>
                      Main Page
                  </h3>
              </div>
              <div className='content'>
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;