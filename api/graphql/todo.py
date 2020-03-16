import graphene
from sqlalchemy import (text)
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


class UpdateTodo(graphene.Mutation):
    """Mutation to update todo."""    
    class Arguments:
        id = graphene.ID()
        body = graphene.String()
    
    todo = graphene.Field(TodoType)
    def mutate(self, info, body, id):
        old_todo = TodoType.get_query(info).get(id)
        old_todo.body = body
        return UpdateTodo(todo=old_todo)

class ToggleTodo(graphene.Mutation):
    """Mutation to toggle the completion status of a todo."""    
    class Arguments:
        id = graphene.ID()
    
    todo = graphene.Field(TodoType)
    def mutate(self, info, id):
        old_todo = TodoType.get_query(info).get(id)
        old_todo.complete = not old_todo.complete
        return ToggleTodo(todo=old_todo)

        
class TodoMutation(graphene.ObjectType):
    createTodo = CreateTodo.Field()
    updateTodo = UpdateTodo.Field()
    toggleTodo = ToggleTodo.Field()

schema = graphene.Schema(query=Query, mutation=TodoMutation)