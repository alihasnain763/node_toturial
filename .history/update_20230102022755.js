const getData = require('./mongodb')

const updateData = async () => {

    let Data = await getData();
    let result =  await Data.updateOne(

        {name: 'max 5'},{
        $set: { name: "max pro 5"}

        }
    )
    console.log(data)
}


updataData()