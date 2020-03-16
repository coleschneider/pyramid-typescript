from pyramid.view import view_config

from webob_graphql import serve_graphql_request
from api.models.todo import schema

@view_config(
    route_name='graphql',
    # The serve_graphql_request method will detect what's the best renderer
    # to use, so it will do the json render automatically.
    # In summary, don't use the renderer='json' here :)
)
def graphql_view(request):
    context = {'session': request.dbsession}
    return serve_graphql_request(request, schema, context_value=context)

    # Optional, for adding batch query support (used in Apollo-Client)
    # return serve_graphql_request(request, schema, batch_enabled=True, context_value=context)