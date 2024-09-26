from typing import List
from pydantic import BaseModel


class FeedBase(BaseModel):
    name: str
    phoneno: str
    # email:str
    location : str
    description : str

    class Config():
        from_attributes = True

class user(BaseModel):
    name:str
    email:str
    password:str

    class Config():
        from_attributes = True

class ShowUser(BaseModel):
    name:str
    email:str
    feedbacks : List[FeedBase] =[]
    class Config():
        from_attributes = True

class ShowFeed(BaseModel):
    name: str
    phoneno: str
    # email:str
    location : str
    description : str

    
    class Config():
        from_attributes = True


