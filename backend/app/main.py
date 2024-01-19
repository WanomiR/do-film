from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from .crud import save_raw


app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/upload-raw/")
async def upload_raw(raw_uploads: list[UploadFile]):
    await save_raw(raw_uploads)
    return {"fileNames": [file.filename for file in raw_uploads]}




