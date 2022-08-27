from .app import db

class Movie(db.Model):
    __tablename__ = 'movie_tbl'

    id = db.Column(db.Integer, primary_key=True)
    original_title = db.Column(db.String(500))
    genre = db.Column(db.String(255))
    release_year = db.Column(db.String(255))
    runtime = db.Column(db.String(255))
    overview = db.Column(db.String(10000))
    mood = db.Column(db.String(255))

    def __repr__(self):
        return '<Movie %r>' % (self.id)

Movie()