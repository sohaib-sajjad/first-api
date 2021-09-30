module.exports=(app)=>{
    //importing controller.js functions to routes.js
    const notes=require('../controllers/controller.js');

    //create a new note
    app.post('/api/create',notes.create);
    
    //retrive all notes
    app.get('/api/notes',notes.findAll);

    //retrive a single note by id
    app.get('/api/find/:noteId',notes.findone);

    //update a note with noteId
    app.put('/api/update/:noteId',notes.update);

    //delete a Note with noteId
    app.delete('/api/delete/:noteId',notes.delete);

    app.get('/about',function(req,res){
        res.json({"message": "welcome to crud api's"});
    });
}