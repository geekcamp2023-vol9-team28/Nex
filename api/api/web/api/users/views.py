
from fastapi import APIRouter, HTTPException, Response, status, Depends
from api.db.models.user_model import Follow
from api.db.dao.user_dao import UserDAO

router = APIRouter()


@router.get("/{user_id}/followers")
async def get_followers(
    user_id: int,
    user_dao: UserDAO = Depends(),
):
    total_followers = user_dao.get_total_followers(user_id)
    return total_followers
    


# @router.post("/{user_id}/follow")
# def follow_user(user_id: int, current_user_id: int, db: Session = Depends(get_db)):
#     existing_follow = db.query(Follow).filter(
#         Follow.follower_id == current_user_id,
#         Follow.following_id == user_id
#     ).first()
#     if existing_follow:
#         raise HTTPException(status_code=400, detail="Already following")
    
#     new_follow = Follow(follower_id=current_user_id, following_id=user_id)
#     db.add(new_follow)
#     db.commit()
#     return {"status": "Followed successfully"}

# @router.put("/{user_id}/follow")
# def unfollow_user(user_id: int, current_user_id: int, db: Session = Depends(get_db)):
#     existing_follow = db.query(Follow).filter(
#         Follow.follower_id == current_user_id,
#         Follow.following_id == user_id
#     ).first()
#     if not existing_follow:
#         return {"status": "Not following, no action needed"}
    
#     db.delete(existing_follow)
#     db.commit()
#     return {"status": "Unfollowed successfully"}