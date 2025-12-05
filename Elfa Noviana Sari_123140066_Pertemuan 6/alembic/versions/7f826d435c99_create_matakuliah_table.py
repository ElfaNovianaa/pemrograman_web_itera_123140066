"""create matakuliah table

Revision ID: 7f826d435c99
Revises: None
Create Date: 2025-12-06 00:11:10.308159

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7f826d435c99'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    """Upgrade schema."""
    op.create_table(
        'matakuliah',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('kode_mk', sa.Text(), nullable=False),
        sa.Column('nama_mk', sa.Text(), nullable=False),
        sa.Column('sks', sa.Integer(), nullable=False),
        sa.Column('semester', sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('kode_mk')
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table('matakuliah')
