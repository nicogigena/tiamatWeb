const index ={
    index: (req, res)=>{
        return res.render('index', { title: 'Express' });
    }
}
module.exports=index