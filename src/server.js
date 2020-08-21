//dados

const proffys = [
    {   name:"Diego Fernandes", 
        avatar:href="https://github.com/diego3g.png",
        whatsapp:"89989898", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220], 
    },
    {   name:"Daniele evangelista", 
        avatar:href="https://github.com/diego3g.png",
        whatsapp:"89989898", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject:"matemática ", 
        cost:"20", 
        weekday:[0], 
        time_from:[710], 
        time_to:[220] },
    {   name:"Mayk", 
        avatar:href="https://github.com/diego3g.png",
        whatsapp:"89989898", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject:"Web", 
        cost:"20", 
        weekday:[0], 
        time_from:[710], 
        time_to:[220] }    
      
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",

]

//funcionalidades

function getSubject(subjectNumber){
    const positionArray = +subjectNumber - 1
    return subjects[positionArray]

}
function pageLanding(req, res){
    return res.render("index.html")
}
    
function pageStudy(req, res){
    const filters =  req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
    
function pageGiveClasses(req, res){
    const data = req.query
    
    //se tiver dados add
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        
        data.subject = getSubject(data.subject)

        //adicionar dados a lista de proffys
        proffys.push(data)
        
        return res.redirect("/study")
    }
    //adicionar dados a lista de proffys
    

    //se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}
    

//servidor
const express = require('express')
const server = express()

//configuração do nunjucks
const nunjucks =  require('nunjucks')/**importação do nunjucks*/
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})/**configuração do nunjucks*/

//inicio e configuração do servidor

server.use(express.static("public"))


//rotas do servidor
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//inicio do servidor
.listen(5500)