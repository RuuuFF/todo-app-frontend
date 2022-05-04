import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  changeDescription,
  search,
  add,
  clear
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
    const { add, search, description, clear } = this.props

    if (event.key === 'Enter') {
      event.shiftKey ? search() : add(description)
    } else if (event.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, description, clear, changeDescription } = this.props

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            type="text"
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            value={description}
            onKeyUp={this.keyHandler}
            onChange={changeDescription}
          />
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton
            style='primary'
            icon='plus'
            onClick={() => add(description)}
          />
          <IconButton
            style='info'
            icon='search'
            onClick={search}
          />
          <IconButton
            style='default'
            icon='close'
            onClick={clear}
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
  add,
  clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)