from fastapi import FastAPI, Depends , HTTPException , status , Form
from sqlalchemy.orm import Session
from typing import List
import uvicorn
import models, schema  # Ensure these imports are correct
from database import SessionLocal, engine, Base
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
# import logging

# logging.basicConfig(level=logging.ERROR)

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware # for separate frontend and backend server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#for static html files
app.mount("/static", StaticFiles(directory="static"), name="static")


models.Base.metadata.create_all(bind=engine) # type: ignore

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# HOME PAGE
@app.get("/", response_class=HTMLResponse)
async def show_home_page():
    with open("static/index.html", "r") as file:
        return HTMLResponse(content=file.read(), status_code=200)


# Feedback Form Route
@app.get("/feedback", response_class=HTMLResponse)
async def show_feedback_form():
    with open("static/FBForm.html", "r") as file:
        return HTMLResponse(content=file.read(), status_code=200)



# feedback form submission route
@app.post("/feedform", response_model=schema.FeedBase)
async def feedback(name: str = Form(...), phoneno: str = Form(...), location: str = Form(...), description: str = Form(...), db: Session = Depends(get_db)):
    new_form = models.Feedback(name=name, phoneno=phoneno, location=location, description=description) # type: ignore
    db.add(new_form)
    db.commit()
    db.refresh(new_form)
    return new_form
    # return HTMLResponse(f"<h3>Feedback Submitted!</h3><p>Name: {name}</p><p>Location: {location}</p><p>Description: {description}</p>")


# @app.post("/feedform", tags=['feedback'])
# async def feedback(
#     name: str = Form(...),
#     email: str = Form(...),
#     location: str = Form(...),
#     phoneno: str = Form(...),
#     description: str = Form(...),
#     db: Session = Depends(get_db)
# ):
#     new_form = models.Feedback(name=name, email=email, location=location, phoneno=phoneno, description=description)  # type: ignore
#     db.add(new_form)
#     db.commit()
#     db.refresh(new_form)
#     return new_form


@app.get("/feedbacks", response_class=HTMLResponse)
async def show_all_feedbacks(db: Session = Depends(get_db)):
    feedbacks = db.query(models.Feedback).all()
    
    html_content = "<h2>Feedback List</h2><ul>"
    for feedback in feedbacks:
        html_content += f"<li>{feedback.name}: {feedback.description} (Location: {feedback.location})</li>"
    html_content += "</ul>"

    return HTMLResponse(content=html_content)


# @app.get("/feedform/{id}", response_class=HTMLResponse, tags=['feedback'])
# async def all(id: int, db: Session = Depends(get_db)):
#     try:
#         feedback = db.query(models.Feedback).filter(models.Feedback.id == id).first()  # type: ignore
#         if not feedback:
#             raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
        
#         # Return an HTML page with the feedback details
#         html_content = f"""
#         <html>
#             <head>
#                 <title>Feedback #{id}</title>
#             </head>
#             <body>
#                 <h1>Feedback Details</h1>
#                 <p><strong>Name:</strong> {feedback.name}</p>
#                 <p><strong>Email:</strong> {feedback.email}</p>
#                 <p><strong>Location:</strong> {feedback.location}</p>
#                 <p><strong>Phone Number:</strong> {feedback.phoneno}</p>
#                 <p><strong>Description:</strong> {feedback.description}</p>
#             </body>
#         </html>
#         """
#         return HTMLResponse(content=html_content)
#     except Exception as e:
#         logging.error(f"Error: {e}")
#         raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=str(e))


@app.get("/feedform/{id}", response_model=List[schema.ShowFeed])
async def all(id : int , db: Session = Depends(get_db)):
    allfeed = db.query(models.Feedback).filter(models.Feedback.id == id).all() # type: ignore
    if not allfeed:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)
    return allfeed

@app.post("/user",response_model=schema.user)
async def create(request: schema.user , db: Session = Depends(get_db)):
    user = models.User(name = request.name , email = request.email , password = request.password) #type: ignore
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


# Checks user presence
@app.get("/user/login")
async def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Validate password (without hash password hai)
    if user.password != password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid password")
    
    return {"message": "Login successful", "user_id": user.id, "name": user.name}




'''

@app.get("/user/{id}" , response_model=schema.ShowUser)
async def show(id:int , db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == id).first() # type: ignore
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with the id {id} is not available")
    return user

'''





if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
