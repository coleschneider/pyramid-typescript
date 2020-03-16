from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    Boolean
)

from .meta import Base
import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

class TodoModel(Base):
    __tablename__ = 'todos'
    id = Column(Integer, primary_key=True)
    body = Column(Text)
    complete = Column(Boolean)



Index('todo_index', TodoModel.body, unique=True, mysql_length=255)


class Todo(SQLAlchemyObjectType):
    class Meta:
        model = TodoModel

class Query(graphene.ObjectType):
    todos = graphene.List(Todo)
    def resolve_todos(self, info):
        query = Todo.get_query(info)  # SQLAlchemy query
        return query.all()
schema = graphene.Schema(query=Query)