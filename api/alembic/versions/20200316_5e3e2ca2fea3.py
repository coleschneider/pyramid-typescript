"""timestamps

Revision ID: 5e3e2ca2fea3
Revises: 492ec66d34fc
Create Date: 2020-03-16 19:30:07.998628

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e3e2ca2fea3'
down_revision = '492ec66d34fc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('todos', sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True))
    op.add_column('todos', sa.Column('updated_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('todos', 'updated_at')
    op.drop_column('todos', 'created_at')
    # ### end Alembic commands ###
