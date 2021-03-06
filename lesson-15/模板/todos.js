function generate_todo(selector) {
  const URL = './todos.php'

  const todoStore = {
    visibilityFilter: 'SHOW_ALL',
    getVisibleTodos(todos, filter) {
    },
    getTodos(callback) {
      $.ajax(URL, {
        success: callback
      })
    },
    addTodo(text, callback) {
    },
    toggleTodo(id, callback) {
    },
    setVisibilityFilter(filter, callback) {
    },
    nextTodoId() {
      return Math.random().toString(36).substr(2)
    }
  }

  const todoApp = {
    // 初始化，插入UI
    init() {
      const html = `
        <form>
          <input type='text' name='todoText' autocomplete='off'/>
          <button>添加</button>
        </form>

        <img src='../giphy.gif' class='loading' style='display:none'/>

        <ul class='list'>
        </ul>

        <p>
          查看：

          <span class='filter-link current' filter-value='SHOW_ALL'>
            <span class='active'>全部</span>
            <a class='not-active' href='#'>全部</a>
          </span>,

          <span class='filter-link' filter-value='SHOW_ACTIVE'>
            <span class='active'>未完成</span>
            <a class='not-active' href='#'>未完成</a>
          </span>,

          <span class='filter-link' filter-value='SHOW_COMPLETED'>
            <span class='active'>已完成</span>
            <a class='not-active' href='#'>已完成</a>
          </span>

        </p>
      `
      element.innerHTML = html
      this._bindHanlders()

      todoStore.getTodos(this.render.bind(this))
    },
    // 绑定事件
    _bindHanlders() {
      this.loading = element.querySelector('.loading')
      this.form = element.querySelector('form')
      this.form.addEventListener('submit', this.onSubmit.bind(this))

      this.filterLinks = element.querySelectorAll('.filter-link')
      this.filterLinks.forEach((filterLink) => {
        filterLink.addEventListener('click', this.onFilterLinkClick.bind(this, filterLink))
      })

      this.list = element.querySelector('.list')
      this.list.addEventListener('click', this.onTodoItemClick.bind(this))
    },

    render(todos) {
    },

    onSubmit(e) {
    },
    onTodoItemClick() {
    },
    onFilterLinkClick() {
    }
  }

  const element = document.querySelector(selector)
  todoApp.init()
}

// 请求示例代码
// const URL = './todos.php'

// 获取列表
// $.get(URL, (todos) => {
//   console.log(todos)
// })

// 创建
// $.ajax(URL,{
//   data: JSON.stringify({id: 'ccc1', text: 'xxx'}),
//   processData: true,
//   method: 'post',
//   contentType: 'application/json',
//   success: (todos) => {
//     console.log('post response', todos)
//   }
// });

// 切换complete状态
// $.ajax(URL + '?todoId=ccc', {
//   method: 'put',
//   success: (todos) => {
//     console.log('put response', todos)
//   }
// })

// 修改
// $.ajax(URL + '?todoId=bbb', {
//   method: 'patch',
//   data: JSON.stringify({text: 'zzz'}),
//   processData: true,
//   contentType: 'application/json',
//   success: (todos) => {
//     console.log('put response', todos)
//   }
// })

// 删除
// $.ajax(URL + '?todoId=bbb', {
//   method: 'delete',
//   success: (todos) => {
//     console.log('put response', todos)
//   }
// })