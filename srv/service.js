const cds = require('@sap/cds');

module.exports = cds.service.impl(async function (srv) {
    this.before('CREATE', 'NAVOYGIP', async (req, res) => {
        try {
            let table = await srv.read('create_voyage.NAVOYGIP');
            function findObjectByVOYNM(voynm) {
                return table.find((item) => item.VOYNM === voynm);
            }
            let generatedVoyageNo;
            let flag=true;
            for (let i = 1000000001; i < 1000000009; i++) {
                const voyNmToFind = i;
                const foundObject = findObjectByVOYNM(voyNmToFind);

                if (foundObject) {
                    generatedVoyageNo = i + 1;

                    console.log( generatedVoyageNo)
                    break;
                } else{
                    flag=false;
                }

            }
            if(flag===false){
                generatedVoyageNo = 1000000000;
            }
            
           
            let data = await req.data;
            
           
            const tx = cds.transaction(req);
               
              
            
             try{
                await tx.run({
                    INSERT: {
                        into: { ref: ['create_voyage.NAVOYGIP'] },
                        columns: [
                            "VOYNM",
                            "VLEGN",
                            "PORTC",
                            "PORTN",
                            "LOCNAM",
                            "PDIST",
                            "VSPEED",
                            "PPDAYS",
                            "VSDAYS",
                            "VETAD",
                            "VETAT",
                            "VETDD",
                            "VETDT",
                            "VWEAD",
                            "PSTAT",
                            "MATNR",
                            "MAKTX",
                            "CARGS",
                            "CARGU",
                            "OTHCO_code",
                            "FRCOST_code",
                            "TOTCO_code"
                        ],
                        values: [
                            generatedVoyageNo,
                            data.VLEGN,
                            data.PORTC,
                            data.PORTN,
                            data.LOCNAM,
                            data.PDIST,
                            data.VSPEED,
                            data.PPDAYS,
                            data.VSDAYS,
                            data.VETAD,
                            data.VETAT,
                            data.VETDD,
                            data.VETDT,
                            data.VWEAD,
                            data.PSTAT,
                            data.MATNR,
                            data.MAKTX,
                            data.CARGS,
                            data.CARGU,
                            data.OTHCO,
                            data.FRCOST,
                            data.TOTCO
                        ]
                    }
                });

                

                
                console.log(data);
                console.log('Success');
            }
            

             catch (error) {

                

                console.error(error);

             }
        } catch (error) {

            
            console.log(error)



        }
    });
});
