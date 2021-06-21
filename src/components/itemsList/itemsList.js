import React, {Component} from 'react';

import './itemsList.css';
import Spiner from '../spiner';

export default class ItemsList extends Component {

  state = {
    items: null,
    term: null,
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
    this.setState({term})
  }

  filterItems(items){
    const {term} = this.state;
    return (term) 
      ? items.filter(item => item.name.indexOf(term) > -1)
      : items;
  }

  render() {
    const {items} = this.state;
    if (!items) return <Spiner/>
    const visibleItems = this.filterItems(items)
    const itemsList = this.renderitemsList(visibleItems);
    // const itemsList = this.renderitemsList(items);

    return (
      <>
        <input
          className = 'search' 
          type = 'text'
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