//Con el if para validaciones complentamente distintas
const typeCountry = 'EC';
if (typeCountry == 'EC'){
          console.log("Es Ecuador");
}
else if(typeCountry == 'PY'){
          console.log("Es Paraguay");
}
else if(typeCountry == 'UY'){
          console.log("Es Uruguay");
}
else{
          console.log("Es Ninguno");
}
//Con el switch se comparan cases con la misma variable
switch (typeCountry) {
          case 'EC':
                    console.log("Es Ecuador");
                    break;
          case 'PY':
                    console.log("Es Paraguay");
                    break;
          case 'UY':
                    console.log("Es Uruguay");
                    break;
          default:
                    console.log("Ninguno");
}