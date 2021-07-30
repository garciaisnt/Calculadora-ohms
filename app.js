var app = new Vue({

    el: '#app',
    data: {                    
        Bandas: 0,
        nBandasCargar: 0,
        tolerancia: null,
        nResistencia: 0,
        txtNumero: '',
        Colors: [],
        respuestaNum: 'Ninguno',
        tipoNotacion: 0,
        toleranciaNumero: '',
        ColoresBandas:
        {
            0:'Negro',
            1:'Cafe',
            2:'Rojo',
            3:'Naranja',
            4:'Amarrillo',
            5:'Verde',
            6:'Azul',
            7:'Violeta',
            8:'Gris',
            9:'Blanco',
        }
    },
    methods: {
        
        cambioNumBanda: function(){           

            this.Colors = [];
            this.nResistencia = 0; 
            this.tolerancia = null;  

            this.nBandasCargar = this.Bandas;
            if(this.Bandas > 3) this.nBandasCargar = this.nBandasCargar -1;           
            console.log(this.nResistencia)

        },
        
        cambioValor: function() {
            
            let resultado;
            let multiplicador;            
            
            //banda 3, todo gud
            if( ( this.Bandas === 3 && this.Colors[2] ) || (this.Bandas === 4) && (this.Colors[2]) && (this.tolerancia))
            {
                if(this.Colors[2] == 0 ) resultado = this.Colors[0] + this.Colors[1];
                else{

                    multiplicador = "0".repeat(this.Colors[2]);
                    resultado = this.Colors[0] + this.Colors[1] + multiplicador;
                }            
                                
                if(this.Bandas == 3)                
                    this.nResistencia = resultado +"Ω";
                else
                    this.nResistencia = resultado +"Ω ±"+this.tolerancia+ "% tolerancia";


            }
            
            else if( (this.Bandas === 5) && (this.Colors[3]) && (this.tolerancia))
            {
                if(this.Colors[3] == 0 ) resultado = this.Colors[0] + this.Colors[1];
                else{

                    multiplicador = "0".repeat(this.Colors[3]);
                    resultado = this.Colors[0] + this.Colors[1] + this.Colors[2]+ multiplicador;
                }
                this.nResistencia = resultado +"Ω ±"+this.tolerancia+ "% tolerancia";
                
            }
            
           
            
        },

        calColNumero: function(){

            //this.txtNumero charat
            
            this.respuestaNum = this.txtNumero;
           

            let numero = this.txtNumero, 
                notacion = this.tipoNotacion;

            //if(numero.length > 2)alert("hola")
            if(notacion == 0 && numero > 999) //K
            {
                
                
            }
            else if(notacion == 1 && numero > 999999) //M
                this.txtNumero = this.txtNumero.slice(0,6);


            this.respuestaNum = this.ColoresBandas[numero.charAt(0)] + " " +
                                this.ColoresBandas[numero.charAt(1)] + " " +
                                this.ColoresBandas[numero.charAt(2)];

            

            
            

        }

    }

})