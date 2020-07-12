import React, {Component} from 'react'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css';

let { Multiselect } = ReactWidgets

class CreateMultiselect extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      value: [],
      people: listOfPeople(),
    }
  }

  handleCreate(name) {
    let { people, value } = this.state;

    let newOption = {
      name,
      id: people.length + 1
    }

    this.setState({
      value: [...value, newOption],  // select new option
      people: [...people, newOption] // add new option to our dataset
    })
  }

  render() {
    let { value, people } = this.state;

    return (
      <Multiselect 
        data={people}
        value={value}
        allowCreate="onFilter"
        onCreate={name => this.handleCreate(name)}
        onChange={value => this.setState({ value })}
        textField="name"
      />
    )
  }
}

render(<CreateMultiselect/>);