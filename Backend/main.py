from flask import Flask, send_from_directory, jsonify, request
from config import app, db
from models import Note, User
import os

@app.route('/')
def serve_frontend():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

@app.route("/notes", methods=["GET"])
def get_notes():
    notes = Note.query.all()
    json_notes = list(map(lambda x: x.to_json(), notes))
    return jsonify({"notes": json_notes})

@app.route("/create_note", methods=["POST"])
def create_note():
    note_title = request.json.get("noteTitle")
    note_description = request.json.get("noteDescription")
    note_status = request.json.get("noteStatus")

    if not note_title or not note_description or not note_status:
        return jsonify({"message": "You must include the note title, note description and status"}), 400

    new_note = Note(note_title=note_title, note_description=note_description, note_status=note_status)
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
