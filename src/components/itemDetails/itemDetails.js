import React, {Component} from 'react';

import './itemDetails.css';
// import LocationService from '../../services/locationService';

const Field = ({data, field, label}) => {
  if (field === 'gooLink')
    return (  <li><p></p><a href={data[field]} target='_blank' rel="noreferrer">Google Maps</a></li> )
  else  
    return (  <li><p>{label}</p>{data[field]}</li> )

}
export {Field}

export default class ItemDetails extends Component {
  
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
      <ul className = 'detailList'>
        {/* <li className='name'>{name} ({native} |{emoji})</li> */}
        <li className = 'name'>{name}</li>
        {React.Children.map(this.props.children, (child => {
          return React.cloneElement(child, {data})
        }))}
      </ul>
    )
  }
}