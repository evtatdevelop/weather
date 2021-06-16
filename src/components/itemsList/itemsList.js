import React, {Component} from 'react';

import './itemsList.css';
import Spiner from '../spiner';

export default class ItemsList extends Component {

  state = {
    items: null
  }

  componentDidMount() {
    const {getData} = this.props;
    const items = getData();
    this.setState({items})
  }

  renderitemsList(data) {
    return data.map(item => {
      const {code} = item;
      const label = this.props.renderItem(item);
      return (
        <li 
          key={code}
          className='itemListItem'
          onClick={() => this.props.onItemSelected(code)}
        >
          {label}
        </li>
      )
    })
  }

  render() {
    const {items} = this.state;
    if (!items) return <Spiner/>
    const itemsList = this.renderitemsList(items);

    return (
      <ul className='itemList'>
        {itemsList}
      </ul>
    )
  }
}