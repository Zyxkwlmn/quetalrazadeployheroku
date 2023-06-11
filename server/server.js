import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
app.use(express.json());

//Conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7Urn3r28#",
    database: "vet"
})

//LOGIN
app.post('/login',(req,res) => {
    const sql = "SELECT * FROM Login WHERE `userLogin` = ? AND `passwordLogin` = ?";
    db.query(sql, [req.body.user,req.body.password],(err,data) => {
        if(err) return res.json("Error")
        if (data.length > 0) {
            const id = data[0].userLogin;
            const token = jwt.sign({id},"jwtSecretKey",{expiresIn: 300})
            return res.json({Login: true, token, data});
        } else {
            return res.json("No record")
        }
        
    })
})


//APPOINTMENT
app.get('/ListAppo/:id',(req,res) => {
    const sql = "SELECT `Appointment`.`idAppointment`, DATE_FORMAT(`Appointment`.`dateAppointment`, '%Y-%m-%d') as dateAppointment, `Appointment`.`reasonAppointment`, `Appointment`.`statusAppointment`,`Appointment`.`timeAppointment` FROM Appointment INNER JOIN Pet ON `Appointment`.`idPet` = `Pet`.`idPet` WHERE `Pet`.`idPet` = ?";
    const id = req.params.id;
    db.query(sql, [id],(err, result) => {
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get('/ListAppoAll',(req,res) => {
    const sql = "SELECT `Appointment`.`idAppointment`,`User`.`nameUser`,`User`.`phoneUser`, `Pet`.`namePet`, `Pet`.`speciePet`, `Pet`.`genderPet`, DATE_FORMAT(`Appointment`.`dateAppointment`, '%Y-%m-%d') as dateAppointment , `Appointment`.`reasonAppointment`, `Appointment`.`statusAppointment`,`Appointment`.`timeAppointment` FROM Appointment INNER JOIN Pet ON `Appointment`.`idPet` = `Pet`.`idPet` INNER JOIN User ON `User`.`idUser` = `Pet`.`idUser`";
    db.query(sql, (err, result) => {
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get('/ReadAppo/:id',(req,res) => {
    const sql = "SELECT `Appointment`.`idAppointment`, `Pet`.`namePet`, `Pet`.`speciePet`, `Pet`.`genderPet`, DATE_FORMAT(`Appointment`.`dateAppointment`, '%Y-%m-%d') as dateAppointment, `Appointment`.`commentAppointment`, `Appointment`.`statusAppointment`,`Appointment`.`timeAppointment`, `Appointment`.`reasonAppointment`  FROM Appointment INNER JOIN Pet ON `Appointment`.`idPet` = `Pet`.`idPet` WHERE `Appointment`.`idAppointment` = ?";
    const id = req.params.id;
    db.query(sql,[id], (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/CreateAppo', (req,res) => {
    const sql = "INSERT INTO Appointment (`idPet`, `dateAppointment`, `reasonAppointment`, `commentAppointment`, `statusAppointment`,`timeAppointment`) VALUES (?)";
    const values = [
        req.body.idPet,
        req.body.dateAppo,
        req.body.reason,
        req.body.comment,
        req.body.status,
        req.body.timeAppo
    ]

    db.query(sql, [values],(err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/UpdateAppo/:id', (req, res) => {
    const sql = "UPDATE Appointment SET  `dateAppointment` = ?, `reasonAppointment` = ?, `commentAppointment` = ?, `statusAppointment` = ?, `timeAppointment` = ? WHERE `idAppointment` = ?";
    const id = req.params.id;
    db.query(sql, [req.body.dateAppo, req.body.reason,req.body.comment, req.body.status,req.body.timeAppo,id],(err,result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })   
})

app.delete('/DeleteAppo/:id', (req, res) => {
    const sql = "DELETE FROM Appointment WHERE `idAppointment` = ?";
    const id = req.params.id;
    db.query(sql, [id],(err,result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })   
})


//PET
app.get('/ListPet/:id',(req,res) => {
    const sql = "select `idPet`,`idUser`,`namePet`,`speciePet`,`racePet`,DATE_FORMAT(`birthdatePet`, '%Y-%m-%d') as birthdatePet ,`genderPet`,`photoPet`,`descriptionPet` from Pet WHERE `Pet`.`idUser` = ?";
    const id = req.params.id;
    db.query(sql, [id],(err, result) => {
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get('/ReadPet/:id',(req,res) => {
    const sql = "select `idPet`,`idUser`,`namePet`,`speciePet`,`racePet`,DATE_FORMAT(`birthdatePet`, '%Y-%m-%d') as birthdatePet ,`genderPet`,`photoPet`,`descriptionPet` FROM Pet WHERE idPet = ?";
    const id = req.params.id;
    db.query(sql,[id], (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/CreatePet/:id', (req,res) => {
    const sql = "INSERT INTO Pet (`idUser`,`namePet`,`speciePet`,`racePet`,`birthdatePet`,`genderPet`,`photoPet`,`descriptionPet`) VALUES (?)";
    const id = req.params.id;
    const values = [
        id,
        req.body.name,
        req.body.specie,
        req.body.race,
        req.body.birthday,
        req.body.gender,
        req.body.photo,
        req.body.description
    ]

    db.query(sql, [values],(err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/UpdatePet/:id', (req, res) => {
    const sql = "UPDATE Pet SET  `namePet` = ?, `speciePet` = ?, `racePet` = ?,`genderPet`  = ?,`descriptionPet` = ? WHERE `idPet` = ?";
    const id = req.params.id;
    db.query(sql, [req.body.name,req.body.specie, req.body.race, req.body.gender, req.body.description, id],(err,result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })   
})

app.delete('/DeletePet/:id', (req, res) => {
    const sql = "DELETE FROM Pet WHERE `idPet` = ?";
    const id = req.params.id;
    db.query(sql, [id],(err,result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })   
})


//CLIENT
app.get('/',(req,res) => {
    const sql = "select * from User";
    db.query(sql, (err, result) => {
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get('/ReadClient/:id',(req,res) => {
    const sql = "SELECT * FROM User WHERE idUser = ?";
    const id = req.params.id;
    db.query(sql,[id], (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/CreateClient', (req,res) => {
    const sql = "INSERT INTO User (`idUser`,`passwordUser`,`nameUser`, `surnameUser`,`dniUser`,`addressUser`,`emailUser`, `phoneUser`) VALUES (?)";
    const values = [
        req.body.dni,
        "123456",
        req.body.name,
        req.body.lastname,
        req.body.dni,
        req.body.address,
        req.body.email,
        req.body.phone
    ]

    db.query(sql, [values],(err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/UpdateClient/:id', (req, res) => {
    const sql = "UPDATE User SET  `nameUser` = ?, `surnameUser` = ?, `addressUser` = ?, `emailUser` = ?, `phoneUser` = ? WHERE `idUser` = ?";
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.lastname,req.body.address, req.body.email,req.body.phone,id],(err,result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })   
})

app.delete('/DeleteClient/:id', (req, res) => {
    const sql = "DELETE FROM User WHERE `idUser` = ?";
    const id = req.params.id;
    db.query(sql, [id],(err,result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })   
})

//ESCUCHA DEL PUERTO
app.listen(8080, ()=> {
    console.log("Listening");
})



