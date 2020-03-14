

def includeme(config):
    config.add_route('todos', '/api/v1/todos')
    config.add_route('home', '/*subpath')