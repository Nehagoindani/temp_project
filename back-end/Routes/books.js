const router = require('express').Router();
let Book = require('../models/books.model');
const multer = require('multer');


const storage = multer.diskStorage({
  destination:(req, file, callback)=>{
    callback(null,"../front-end/public/upload");
  },
  filename:(req, file, callback)=>{
    callback(null, file.originalname)

  },
});
const upload = multer({storage: storage});

router.post('/insert',upload.single("bookImage"), async(req, res) => {

  const Bookname = req.body.Bookname
  const Author_Name = req.body.Author_Name
  const bookImage = req.file.originalname
  const books = new Book({Bookname: Bookname, Author_Name: Author_Name, bookImage: bookImage})
  try{
    await books.save();
    res.send('book inserted');
  }catch(err){
    console.log(err)
  }
});


router.put('/update',async(req, res) => {

  const newBookName = req.body.newBookName
  const newAuthor_Name = req.body.newAuthor_Name
 // const newbookImage = req.body.bookname
  const id = req.body.id
  try{
    await Book.findById(id,(err,updatedBook)=>{
      updatedBook.Bookname = newBookName
      updatedBook.Author_Name = newAuthor_Name
      updatedBook.save();
      res.send("book updated"); 
    })
    
  }catch(err){
    console.log(err)
  }
});

router.delete('/delete/:id',async(req, res) => {

  const id = req.params.id
  await Book.findByIdAndRemove(id).exec();
  res.send("deleted")
});


router.get('/read', async(req, res) => {
Book.find({},(err,result)=>{
  if(err){
    res.send(err)
  }
  else{
    res.send(result)
  }
})
  
});
module.exports = router;