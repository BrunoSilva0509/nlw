const database = require('./db.js')
const createProffy = require('./createProffy')



database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name:"Diego Fernandes", 
        avatar:href="https://github.com/diego3g.png",
        whatsapp:"89989898", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
    }
    classValue = {
        subject:"Química", 
        cost:"20", 
    }
    classScheduleValues = [
        {
            weekday:1, 
            time_from:720, 
            time_to:1220,
        }
    ]
    
   // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultar os dados inseridos
    
    //todos os proffys
    const selectedProffys = await db.all('SELECT * FROM proffys')
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys =  await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //select seleciona as tabelas
    //from seleciona qual primeiro
    //join indica a junção da tabela classes com a (proffys)
    //where é aonde, como se fosse uma condição

    console.log(selectClassesAndProffys)
    
    //
})