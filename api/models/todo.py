from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    Boolean
)

from .meta import Base


class Todo(Base):
    __tablename__ = 'todos'
    id = Column(Integer, primary_key=True)
    body = Column(Text)
    complete = Column(Boolean)


Index('todo_index', Todo.body, unique=True, mysql_length=255)
