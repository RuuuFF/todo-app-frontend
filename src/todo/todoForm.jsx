import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  changeDescription,
  search
} from '../store/actions/todoActions'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentDidMount() {
    this.props.search()
  }

  keyHandler(event) {
    if (event.key === 'Enter') {
      event.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (event.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            type="text"
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            value={this.props.description}
            onKeyUp={this.keyHandler}
            onChange={this.props.changeDescription}
          />
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton
            style='primary'
            icon='plus'
            onClick={this.props.handleAdd}
          />
          <IconButton
            style='info'
            icon='search'
            onClick={this.props.handleSearch}
          />
          <IconButton
            style='default'
            icon='close'
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  search,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)