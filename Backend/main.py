from flask import request, jsonify
from config import app, db
from models import Note, User

@app.route("/notes", methods=["GET"])
def get_notes():
    Notes = Note.query.all()
    json_notes = list(map(lambda x: x.to_json(), Notes))
    return jsonify({"notes": json_notes})

@app.route("/create_user", methods=["POST"])
def create_user():
    user_email = request.json.get("userEmail")

    if not user_email:
        return jsonify({"message": "Email is required"}), 400

    existing_user = User.query.filter_by(user_email=user_email).first()

    if existing_user:
        return jsonify({"message": "User already exists", "user": existing_user.to_json()}), 200

    new_user = User(user_email=user_email)

    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "User Created!", "user": new_user.to_json()}), 201

@app.route("/create_note", methods=["POST"])
def create_note():
    note_title = request.json.get("noteTitle")
    note_description = request.json.get("noteDescription")
    status = request.json.get("noteStatus")

    if not note_title:
        return (
            jsonify({"message": "You must include the note title, and status"}),
            400,
        )

    new_note = Note( note_title=note_title, note_description=note_description, note_status=status)
    try:
        db.session.add(new_note)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Note Created!"}), 201



@app.route("/update_note/<int:note_id>", methods=["PATCH"])
def update_note(note_id):
    note = Note.query.get(note_id)

    if not note:
        return jsonify({"message": "Note not found"}), 404

    data = request.json
    note.note_title = data.get("noteTitle", note.note_title)
    note.note_description = data.get("noteDescription", note.note_description)
    note.note_status = data.get("noteStatus", note.note_status)

    db.session.commit()

    return jsonify({"message": "Note updated."}), 200

@app.route("/delete_note/<int:note_id>", methods=["DELETE"])
def delete_note(note_id):
    note = Note.query.get(note_id)

    if not note:
        return jsonify({"message": "Note not found"}), 404

    db.session.delete(note)
    db.session.commit()

    return jsonify({"message": "Note deleted!"}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
