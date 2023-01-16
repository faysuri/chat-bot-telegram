require("dotenv").config();

const { Telegraf } = require("telegraf");
const TOKEN = "5945553432:AAEYjjElRWYpGm8VXeya5eCtQQourvDL0BE";
const bot = new Telegraf(TOKEN);

const mysql = require("mysql2/promise");
// Coloca aquí tus credenciales
/* module.exports = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}); */



bot.help((ctx) => {
  ctx.reply('Ayuda');
  // opciones de ayuda
})
bot.settings((ctx) => {
  //como si fuera mnú
  ctx.reply('opciones menu');
})
//comando propio
bot.command(['Hola', 'hola', 'Buenos días', 'HOLA', 'BUENOS DIAS'], (ctx) => {
  /*   let iduser= ctx.from.id
    bot.telegram.sendMessage('ISA MUÑOZ'+iduser) */
  //ctx.reply('Soy Bambot, asistente virtual del restaurante Bambú')
});
//estar pendiente de un msj
/* bot.hears(['Hola', 'hola', 'Buenos días', 'HOLA', 'BUENOS DIAS'], ctx => {
  ctx.reply('Bienvenido '+ctx.from.first_name+' '+ctx.from.last_name +' 😊')
  ctx.reply('Hola! Soy Bambot, asistente virtual del restaurante Bambú')
  console.log('hujjjjj '+ctx.from.first_name)//mostrar nombre de usuario

  ctx.reply('Para registrarse escriba los siguientes datos: \nId: \nNombre: \n Edad: \nEstatura: \nPeso:'
  //Identificación, /Nombre, /Apellido, /sexo, /Edad, /peso en (kg), estatura'
  )
  //let iduser= ctx.from.id
  //ctx.reply('Isa_m '+iduser)//ide usuario
}) */
// preguntas
bot.hears(['Hola', 'hola', 'Buenos días', 'HOLA', 'BUENOS DIAS'], ctx => {
  ctx.reply('Hola! Soy Bambot, asistente virtual del restaurante Bambú')
  console.log('hujjjjj ' + ctx.from.first_name)//mostrar nombre de usuario

  ctx.reply('Para registrarse escriba los siguientes datos: \nId: \nNombre: \nApellido: \nEdad: \nPeso: \nEstatura en cm: \nGenero: F M \nEjemplo:\n26640678,Juan,Mejía,30,54,170,M '

  )
  //let iduser= ctx.from.id
  //ctx.reply('Isa_m '+iduser)//ide usuario
})

bot.use(async (context, next) => {
  //ctx.state.guardar ='fay -_-';
  context.state.prueba = 10;
  console.log(context)
  const informationUser = context.update.message.text
  console.log(informationUser)
  if (!context.update.message) {
    return
  }
  if (!informationUser) {
    context.reply('The information not valid')
    return
  }
  try {
    const arrayInformationUser = informationUser.split(',')
    if (arrayInformationUser.length != 7) {
      context.reply("Falta uno o mas elementos")
      return
    }
    ////...

    const identificacion = arrayInformationUser[0]
    const nombre = arrayInformationUser[1]
    const apellido = arrayInformationUser[2]
    const edad = arrayInformationUser[3]
    const peso = arrayInformationUser[4]
    const estatura = arrayInformationUser[5]
    const genero = arrayInformationUser[6]
    console.log('ID ' + identificacion)
    console.log('NOM ' + nombre)
    console.log('AP ' + apellido)
    console.log('EDAD ' + edad)
    console.log('PESO ' + peso)
    console.log('ESTA ' + estatura)
    console.log('GENE ' + genero)
    console.log('+++++ ' + arrayInformationUser)
    if (identificacion.length < 7 || identificacion.length > 10) {
      context.reply("Identificacion no valida")
      return
    }

    if (!identificacion.match('[0-9]+')) {
      context.reply('Identificacion solo debe tener numeros')
      console.log('Isa dormida')
      return
    }
    if (!nombre.match('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')) {
      context.reply("Nombre no valida")
      console.log('NOMBRE NO FUNCIONA')
      return
    }
    if (!apellido.match('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')) {
      context.reply("APELLIDO no valida")
      return
    }
    /* if (edad.match('/^(1[1-9][0-9]|10[0-9]|100)$/') ) {
      context.reply("Edad incorrecta")
      if (edad.length < 19 || identificacion.length > 30) {
      console.log('rango entre 19 y 30');
      }
    return
    
    }
    
    if(!edad.match('^[0-9]+$')){
     context.reply('Identificacion solo debe tener numeros')
     return
    }
    if (peso.match('/^(1[1-9][0-9]|10[0-9]|500)$/') ) {
      context.reply("peso incorrecta")
    return
    }
    
    if(!peso.match('^[0-9]+$')){
     context.reply('peso solo debe tener numeros')
     return
    }
    
    if (estatura.match('/^(1[1-9][0-9]|10[0-9]|100)$/') ) {
      context.reply("estatura incorrecta")
    return
    }
    
    if(genero('/^[A-Z]+$/i')){
     context.reply('Identificacion solo debe tener numeros')
     return
    }
    if(genero('^[f-F][m-M]')){
      context.reply('solo f o m')
      console.log(genero);
      return
    
     } */


    const connection = await mysql.createConnection({
      host: 'bambu.cbiyyexwbtry.us-east-1.rds.amazonaws.com',
      user: 'admin',
      password: '123456789',
      database: 'bambu'
    })
    var sql = `insert into cliente (Id_cliente,Nombre,Apellido,Edad,Peso,Estatura,Genero) VALUES('${identificacion}','${nombre}','${apellido}','${edad}','${peso}','${estatura}','${genero}')`;
    console.log('conexión establecida')
    const result = await connection.query(sql);
    context.reply('Informacion guardada')
    connection.end()

  } catch (error) {
    console.log(error)
    context.reply('The information not valid')
    return
  }

})
bot.start((ctx) => {
  /*  console.log(ctx.updateSubTypes[0])
   bot.telegram.sendMessage(ctx.chat.id, 'hello world') */
  //console.log(ctx.from)
  //console.log(ctx.chat)
  //console.log(ctx.message)
  //ctx.reply('Bienvenido' +ctx.from.fi)
  /*  ctx.reply("Bienvenido Pola :)))))", {
     reply_markup: {
      // keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
     },
   }) */
  //ctx.reply(ctx.state.guardar);
  ctx.reply(ctx.state.prueba);
  console.log('*-* ++++--')
}
);
/* bot.on("foto", (ctx) => {
 
  ctx.reply("la foto") //context function reply the message
  console.log('cjb -_-'+ctx)
}) */
bot.launch();
