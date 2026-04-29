let nombre,apellido,dni,edad,email,a=true,c=0;
while (c<=4) {
    switch (c) {
        case 0:
            nombre=prompt("Introduzca su nombre");
            if (nombre.length<3) {
                alert("El nombre es muy corto");
            }else {
                alert("Pase al siguiente");
                c=1;
            }
            break;
        case 1:
            apellido=prompt("Introduzca su apellido")
            if (apellido.length<3) {
                alert("El nombre es muy corto");
            }else {
                alert("Pase al siguiente");
                c=2;
            }
            break;
        case 2:
            dni=prompt("Introduzca DNI de Argentina");
            if ((/^\d+$/.test(dni))&&(dni.length<=8))
            {alert("Pase al siguiente"); c=3;}
            else
            {alert("El dni o es muy corto o no es de argentina");}
            break;
        case 3:
            edad=prompt("Ingrese su edad")
            if ((edad<18)&&(edad>120))
            {alert("La edad no puede ser registrada")}
            else
            {alert("Continue"); c=4;}
            break;
        case 4:
            email=prompt("Ingrese su email");
            if ((email.includes("@"))&&(email.length()<=6))
            {alert("En momentos su cuenta sera hecha"); c=5;}
            else
            {alert("El correo electronico o no existe, o directamente hay falta de caracteres por favor intentelo de nuevo")}
            break;
    }
}

