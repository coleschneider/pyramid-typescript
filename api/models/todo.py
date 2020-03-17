from .meta import Base
from uuid import uuid4

from sqlalchemy.dialects.postgresql import UUID

from sqlalchemy import (text)
from sqlalchemy import (
    func,
    TIMESTAMP,
    Column,
    Index,
    Integer,
    Text,
    Boolean,
    String
    )



class Todo(Base):
    __tablename__ = 'todos'
    id = Column(UUID(as_uuid=True),
    primary_key=True,
    default=uuid4,)
    body = Column(Text, nullable=False)
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.current_timestamp())
    created_at = Column(TIMESTAMP, server_default=func.now())
    complete = Column(Boolean, default=False)



Index('todo_index', Todo.body, unique=False, mysql_length=255)

