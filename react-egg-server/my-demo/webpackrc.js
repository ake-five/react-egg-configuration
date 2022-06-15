    // eslint-disable-next-line import/no-anonymous-default-export
    export default{
        entry:'src/index.js',
        define:{
            'process.env':{
                CMDEFINE_ENV:process.env.CMDEFINE_ENV,
            }
        }
    }

