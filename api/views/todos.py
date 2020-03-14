from pyramid.view import view_config

# class Todo:
#     def __init__(self, id, body, complete):
#         self.id = id
#         self.body = body
#         self.complete = complete
#     def __json__(self, request):
#         return {'id':self.id, 'body': self.body, 'complete': self.complete, }




@view_config(route_name='todos', renderer='json')
def get_todos(request):
    """Sends back a list of todos"""
    response = request.response
    response.headers.extend({'Content-Type': 'application/json'})
    
    return [{'message': 1}]