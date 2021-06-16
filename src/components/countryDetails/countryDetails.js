import React, {Component} from 'react';

import './countryDetails.css';
// import LocationService from '../../services/locationService';

const Fieald = ({data, field, label}) => {
  return (
    <li><span>{label}</span>{data[field]}</li>
  )
}
export {Fieald}

export default class CountryDetails extends Component {
  
  // locationService = new LocationService();

  state = {
    data: null
  }

  componentDidMount() {
    this.updateItemDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemCode !== this.props.itemCode) {
      this.updateItemDetails();
    }
  }
  
  updateItemDetails() {
    // const {countryCode} = this.props;
    // if(!countryCode) return;
    // const country = this.locationService.getCountryByCode(countryCode);
    // this.setState({country: country})

    const {getData} = this.props;
    const data = getData();
    this.setState({data})
  }

  render() {
    if (!this.state.data) {
      return <span className='cselectError'>Select element, please</span>
    }
    
    const {name} = this.state.data;
    const {data} = this.state;
    return (
      <ul className='detailList'>
        {/* <li className='name'>{name} ({native} |{emoji})</li> */}
        <li className='name'>{name}</li>
        {React.Children.map(this.props.children, (child => {
          return React.cloneElement(child, {data})
        }))}
      </ul>
    )
  }
}