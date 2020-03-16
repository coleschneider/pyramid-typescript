def includeme(config):
        # Relative to this directory. Do the same path for the template
    config.add_static_view('static', '../dist')
    config.add_route('home', '/')
    config.add_route('graphql', '/graphql')