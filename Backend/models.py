from config import db

class Note(db.Model):
    note_id = db.Column(db.Integer, primary_key=True, unique=True)
    note_title = db.Column(db.String(80), nullable=False)
    note_description = db.Column(db.String(80), nullable=False)
    note_status = db.Column(db.String(80), nullable=False)

    def to_json(self):
        return {
            "noteId": self.note_id,
            "noteTitle": self.note_title,
            "noteDescription": self.note_description,
            "noteStatus": self.note_status
        }

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True, unique=True)
    user_email = db.Column(db.String(80), unique=True, nullable=False)

    def to_json(self):
        return {
            "userId": self.user_id,
            "userEmail": self.user_email
        }
