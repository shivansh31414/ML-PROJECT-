from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from datetime import datetime
from app.db.session import get_db
from app.db.models import User
from app.utils.security import get_current_user
from app.services.model_service import run_model

router = APIRouter()

class PredictRequest(BaseModel):
    feature_a: float
    feature_b: float
    feature_c: float

class PredictResponse(BaseModel):
    result: float

@router.post("", response_model=PredictResponse)
def predict(payload: PredictRequest, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        result = run_model(payload.dict())
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Model error: {str(e)}")

    current_user.last_query = str(payload.dict())
    current_user.last_result = str(result)
    current_user.updated_at = datetime.utcnow()
    db.add(current_user)
    db.commit()

    return PredictResponse(result=result)
