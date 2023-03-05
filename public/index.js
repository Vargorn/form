const products = [
  {
    "PRODUCTCODE": "GC1040",
    "NAME": "GenWatt Diesel 200kW"
  },
  {
    "PRODUCTCODE": "GC1020",
    "NAME": "GenWatt Diesel 10kW"
  },
  {
    "PRODUCTCODE": "IN7080",
    "NAME": "Installation: Industrial - High"
  },
  {
    "PRODUCTCODE": "SL9040",
    "NAME": "SLA: Silver"
  },
  {
    "PRODUCTCODE": "GC3040",
    "NAME": "GenWatt Propane 500kW"
  },
  {
    "PRODUCTCODE": "SL9080",
    "NAME": "SLA: Platinum"
  },
  {
    "PRODUCTCODE": "GC3020",
    "NAME": "GenWatt Propane 100kW"
  },
  {
    "PRODUCTCODE": "GC3060",
    "NAME": "GenWatt Propane 1500kW"
  },
  {
    "PRODUCTCODE": "GC1060",
    "NAME": "GenWatt Diesel 1000kW"
  },
  {
    "PRODUCTCODE": "SL9020",
    "NAME": "SLA: Bronze"
  },
  {
    "PRODUCTCODE": "GC5040",
    "NAME": "GenWatt Gasoline 750kW"
  },
  {
    "PRODUCTCODE": "IN7020",
    "NAME": "Installation: Portable"
  },
  {
    "PRODUCTCODE": "SL9060",
    "NAME": "SLA: Gold"
  },
  {
    "PRODUCTCODE": "GC5020",
    "NAME": "GenWatt Gasoline 300kW"
  },
  {
    "PRODUCTCODE": "IN7040",
    "NAME": "Installation: Industrial - Low"
  },
  {
    "PRODUCTCODE": "GC5060",
    "NAME": "GenWatt Gasoline 2000kW"
  },
  {
    "PRODUCTCODE": "IN7060",
    "NAME": "Installation: Industrial - Medium"
  },
  {
    "PRODUCTCODE": "R001C1",
    "NAME": "Renault Logan"
  },
  {
    "PRODUCTCODE": "R002C2",
    "NAME": "Renault Logan Stepway"
  },
  {
    "PRODUCTCODE": "R003C3",
    "NAME": "Renault Sandero"
  },
  {
    "PRODUCTCODE": "R004C4",
    "NAME": "Renault Sandero Stepway"
  },
  {
    "PRODUCTCODE": "R005E1",
    "NAME": "K7M"
  },
  {
    "PRODUCTCODE": "R006E2",
    "NAME": "K4M"
  },
  {
    "PRODUCTCODE": "R007E3",
    "NAME": "H4M"
  },
  {
    "PRODUCTCODE": "HK001C1",
    "NAME": "Kia Rio"
  },
  {
    "PRODUCTCODE": "HK002C2",
    "NAME": "Kia Rio X-Line"
  },
  {
    "PRODUCTCODE": "HK003C3",
    "NAME": "Hyundai Accent"
  },
  {
    "PRODUCTCODE": "HK004C4",
    "NAME": "Hyundai Solaris"
  },
  {
    "PRODUCTCODE": "HK005E1",
    "NAME": "G4LC"
  },
  {
    "PRODUCTCODE": "HK006E2",
    "NAME": "G4FG"
  },
  {
    "PRODUCTCODE": "VAG001C1",
    "NAME": "Volkswagen Polo Sedan"
  },
  {
    "PRODUCTCODE": "VAG002C2",
    "NAME": "Volkswagen Polo 2021"
  },
  {
    "PRODUCTCODE": "VAG003C3",
    "NAME": "Skoda Rapid"
  },
  {
    "PRODUCTCODE": "VAG004E1",
    "NAME": "CZCA"
  },
  {
    "PRODUCTCODE": "VAG005E2",
    "NAME": "CFW"
  },
  {
    "PRODUCTCODE": "VAG006E3",
    "NAME": "CWVA"
  },
  {
    "PRODUCTCODE": "VAG007E4",
    "NAME": "CFNA"
  },
  {
    "PRODUCTCODE": "VAG008E5",
    "NAME": "CFNB"
  },
  {
    "PRODUCTCODE": "L001C1",
    "NAME": "Lada Vesta"
  },
  {
    "PRODUCTCODE": "L002C2",
    "NAME": "Lada Xray"
  },
  {
    "PRODUCTCODE": "L003E1",
    "NAME": "VAZ-21179"
  },
  {
    "PRODUCTCODE": "L004E2",
    "NAME": "VAZ-21129"
  },
  {
    "PRODUCTCODE": "R008A1",
    "NAME": "Carpets Renault"
  },
  {
    "PRODUCTCODE": "HK007A1",
    "NAME": "Carpets Hyundai"
  },
  {
    "PRODUCTCODE": "HK008A2",
    "NAME": "Carpets Kia"
  },
  {
    "PRODUCTCODE": "VAG009A1",
    "NAME": "Carpets Volkswagen"
  },
  {
    "PRODUCTCODE": "VAG010A2",
    "NAME": "Carpets Skoda"
  },
  {
    "PRODUCTCODE": "L005A1",
    "NAME": "Carpets Lada"
  },
  {
    "PRODUCTCODE": "MI001A1",
    "NAME": "Phone holder Xiaomi"
  }
];
products.forEach(product => {
  let option = document.createElement('option');
  option.value = product.PRODUCTCODE;
  option.innerText = product.NAME;
  document.getElementById("00N2w00000TazoM").appendChild(option)
});