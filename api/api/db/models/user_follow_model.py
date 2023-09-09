
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey, Integer
from api.db.base import Base
from api.db.models.user_model import UserModel
from sqlalchemy.orm import relationship



class Follow(Base):
    """Model for follow and follwer"""

    __tablename__ = "follow"
    user_id : Mapped[int]      = mapped_column(
        ForeignKey(UserModel.id, onupdate="CASCADE", ondelete="CASCADE"),
        primary_key=True,
    )
    follower_id : Mapped[int]  = mapped_column(
        Integer,
        ForeignKey(UserModel.id, onupdate="CASCADE", ondelete="CASCADE"),
        nullable = True,
        primary_key=True,
    )
    following_id : Mapped[int] = mapped_column(
        Integer,
        ForeignKey(UserModel.id, onupdate="CASCADE", ondelete="CASCADE"),
        nullable = True,
        primary_key=True,
    ) 
    follower = relationship("UserModel", foreign_keys=[follower_id])
    following = relationship("UserModel", foreign_keys=[following_id])



