import { gql } from "@apollo/client"

export const GET_TASKS = gql`
  query getTasks {
    getTasks {
      id
      title
      completed
    }
  }
`

export const ADD_TASK = gql`
  mutation addTask($title: String!) {
    addTask(title: $title) {
      id
      title
      completed
    }
  }
`

export const UPDATE_TASK = gql`
  mutation updateTask($id: ID!, $completed: Boolean) {
    updateTask(id: $id, completed: $completed) {
      id
      completed
    }
  }
`
