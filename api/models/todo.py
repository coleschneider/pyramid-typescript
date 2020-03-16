from .meta import Base
from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    Boolean
)


class Todo(Base):
    __tablename__ = 'todos'
    id = Column(Integer, primary_key=True, autoincrement=True)
    body = Column(Text, nullable=False)
    complete = Column(Boolean, default=False)



Index('todo_index', Todo.body, unique=False, mysql_length=255)

