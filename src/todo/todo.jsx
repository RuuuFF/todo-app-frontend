import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      list: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''

    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(res => this.setState({
        ...this.state,
        description,
        list: res.data,
      }))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      description: event.target.value
    })
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description })
      .then(res => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(res => this.refresh(this.state.description))
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {
      ...todo,
      done: true
    }).then(res => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, {
      ...todo,
      done: false
    }).then(res => this.refresh(this.state.description))
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          description={this.state.description}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    )
  }
}

export default Todo