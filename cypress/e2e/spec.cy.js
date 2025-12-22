describe('Read XL',()=>{
  it('read xl on login',()=>{
    my.task("readXlsx", { filepath: "bugs.xlsx",sheetName: "bugs" }).then(rows =>{
      const weights ={critical: 4, high: 3,medium: 2,low: 1 };
      const counts ={critical: 0, high: 0,medium: 0, low: 0};

      //count bugs by severity
      rows.forEach(row =>{
        const sev = String(row.severity).trim().toLowerCase();
        if (counts.hasOwnProperty(sev)) {
          counts[sev]++;
        }
      })

    })
    
  })
})