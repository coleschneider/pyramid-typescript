import graphene

from graphene_sqlalchemy import SQLAlchemyObjectType
from api.models import Todo


class TodoType(SQLAlchemyObjectType):
    class Meta:
        model = Todo

class Query(graphene.ObjectType):
    todos = graphene.List(TodoType)
    def resolve_todos(self, info):
        
        query = TodoType.get_query(info)  # SQLAlchemy query
        return query.all()

class CreateTodo(graphene.Mutation):
    """Mutation to create todo."""    
    class Arguments:
        body = graphene.String(required=True)
        complete = graphene.Boolean()
    
    todo = graphene.Field(TodoType)
    def mutate(self, info, body, complete):
        db_session = info.context['session']
        new_todo = Todo(body=body, complete=complete)
        db_session.add(new_todo)
        db_session.flush()
        db_session.refresh(new_todo)
        return CreateTodo(todo=new_todo)

        
class TodoMutation(graphene.ObjectType):
    createTodo = CreateTodo.Field()

schema = graphene.Schema(query=Query, mutation=TodoMutation)