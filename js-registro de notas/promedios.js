$('#resultado').hide();
$(document).ready(function(){
    $('#click').click(function(){
            $('#resultado').slideDown();
            nombre=$('#nombre').val();
            apellido=$('#apellido').val();
            $('#Nombre-Apellido').text("El estudiante " + nombre + ", " + apellido + " presenta los siguientes promedios :")
            M1=$('#M1').val();
            M2=$('#M2').val();
            M3=$('#M3').val();
            M4=$('#M4').val();
            promedioMa=(parseInt(M1)+parseInt(M2)+parseInt(M3)+parseInt(M4))/4;
            $('#resultadoMa').text("Promedio de Matemática = " + promedioMa)
            C1=$('#C1').val();
            C2=$('#C2').val();
            C3=$('#C3').val();
            C4=$('#C4').val();
            promedioCo=(parseInt(C1)+parseInt(C2)+parseInt(C3)+parseInt(C4))/4;
            $('#resultadoCo').text("Promedio de Comunicación = " + promedioCo)
            H1=$('#H2').val();
            H2=$('#H2').val();
            H3=$('#H3').val();
            H4=$('#H4').val();
            promedioHi=(parseInt(H1)+parseInt(H2)+parseInt(H3)+parseInt(H4))/4;
            $('#resultadoHi').text("Promedio de Historia = " + promedioHi)
            Ci1=$('#Ci1').val();
            Ci2=$('#Ci2').val();
            Ci3=$('#Ci3').val();
            Ci4=$('#Ci4').val();
            promedioCi=(parseInt(Ci1)+parseInt(Ci2)+parseInt(Ci3)+parseInt(Ci4))/4;
            $('#resultadoCi').text("Promedio de Ciencias = " + promedioCi)
            E1=$('#E1').val();
            E2=$('#E2').val();
            E3=$('#E3').val();
            E4=$('#E4').val();
            promedioEd=(parseInt(E1)+parseInt(E2)+parseInt(E3)+parseInt(E4))/4;
            $('#resultadoEd').text("Promedio de Educación Fisica = " + promedioEd)
            I1=$('#I1').val();
            I2=$('#I2').val();
            I3=$('#I3').val();
            I4=$('#I4').val();
            promedioIn=(parseInt(I1)+parseInt(I2)+parseInt(I3)+parseInt(I4))/4;
            $('#resultadoIn').text("Promedio de Inglés = " + promedioIn)
            A1=$('#A1').val();
            A2=$('#A2').val();
            A3=$('#A3').val();
            A4=$('#A4').val();
            promedioAr=(parseInt(A1)+parseInt(A2)+parseInt(A3)+parseInt(A4))/4;
            $('#resultadoAr').text("Promedio de Arte y Cultura = " + promedioAr)
            V1=$('#V1').val();
            V2=$('#V2').val();
            V3=$('#V3').val();
            V4=$('#V4').val();
            promedioVa=(parseInt(V1)+parseInt(V2)+parseInt(V3)+parseInt(V4))/4;
            $('#resultadoVa').text("Promedio de Valores = " + promedioVa)
            promedioTotal=(promedioMa+promedioCo+promedioHi+promedioCi+promedioEd+promedioIn+promedioAr+promedioVa)/8;
            if (promedioTotal>= 12 ){
            mensjFinal =  "estudiante esta aprobado.";
            } 
            else {
                mensjFinal = "estudiante esta desaprobado.";
            }
            $('#resultadoFinal').text("Finalmente el estudiante obtendria un promedio final de " + promedioTotal + ", por lo tanto el " + mensjFinal)
    });
});