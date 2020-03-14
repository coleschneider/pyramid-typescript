from pyramid.view import view_config

class Todo:
    def __init__(self, id, body, complete):
        self.id = id
        self.body = body
        self.complete = complete
    def __json__(self, request):
        return {'id':self.id, 'body': self.body, 'complete': self.complete, }


@view_config(route_name='home', renderer='templates/index.html')
def my_view(request):
    return {'project': 'api'}

@view_config(route_name='todos', renderer='json')
def get_todos(request):
    """Sends back a list of todos"""
    response = request.response
    response.headers.extend({'Content-Type': 'application/json'})
    todo_one = Todo(1, 'Learn pyramid', True)
    todo_two = Todo(2, 'Learn Graphene', False)
    return [todo_one, todo_two]