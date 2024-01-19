from pathlib import Path
from fastapi import UploadFile

UPLOAD_FOLDER = Path() / "backend" / "uploads"


async def save_raw(raw_uploads: list[UploadFile]) -> None:

    for file in raw_uploads:
        data = await file.read()
        save_to = UPLOAD_FOLDER / file.filename

        with open(save_to, "wb") as f:
            f.write(data)
