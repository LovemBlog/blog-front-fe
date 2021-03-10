interface todoItem {
  text: string,
  done: boolean
}
interface todoStore {
  list: todoItem[]
}

export const state = (): todoStore => ({
  list: [
    {
      text: '第一件事',
      done: false
    },
    {
      text: '第二件事',
      done: false
    }
  ]
})

export const mutations = {
  add(state: todoStore, text: string) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state: todoStore, { todo }: { todo: todoItem }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state: todoStore, todo: todoItem) {
    todo.done = !todo.done
  }
}