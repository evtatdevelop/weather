import React, {Component} from 'react';

import './itemsList.css';
import Spiner from '../spiner';

export default class ItemsList extends Component {

  state = {
    items: null
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
          key = {code}
          className = 'itemListItem'
          onClick = {() => this.props.onItemSelected(code)}
        >
          {label}
        </li>
      )
    })
  }



  onUpdateSearch = e => {
    const term = e.target.value;
    const items = this.state.items.filter(item => item.name.indexOf(term) > -1)
    // console.log(visible)
    this.setState({items})
  }

  render() {
    const {items} = this.state;
    if (!items) return <Spiner/>
    const itemsList = this.renderitemsList(items);

    return (
      <>
        <input 
          type='text'
          placeholder = "Search"
          onChange = {this.onUpdateSearch}
        />
        <ul className = 'itemList'>
          {itemsList}
        </ul>
      </>  
    )
  }
}