const express=require("express")
const app=express();
const PORT=8000;
const path=require("path");



app.get("/test",(req,res)=>{
    res.json({message:"Hello From Server 12eafsdf23"})
})

// Serve admin build
app.use("/", express.static(path.join(__dirname, "./frontend/build")));

// Serve admin and frontend index files
app.get("/*", function (req, res) {
   res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})