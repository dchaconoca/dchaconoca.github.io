# Símbolos

### Definición
    • Tipo de dato primitivo como string, number, boolean, null y undefined
    • Valores únicos e immutables, es decir, la función Symbol() permite obtener identificadores únicos y diferentes a los ya creados y a los por crear
    • Se les puede agregar una descripción que facilite su identificación (recomendado)
    
### Otras características
    • Se debe utilizar Objeto.getOwnPropertySymbols() para poder enumerar las propiedades 
    de un objeto cuyas claves son Symbol
    • No sufren “casting ” de tipos (no se convierten implícitamente en otro tipo como string)
    
### Usos
    • Los valores únicos que se producen con Symbol() pueden ser utilizados como claves (keys)   de los objetos y así poder crear nuevas propiedades sin que éstas entren en 
    conflicto con las existentes. Ésto es particularmente útil cuando se habla de objetos “grandes” como el objeto global Wnindow
    • Evita la sobreescritura de propiedades y métodos ya existentes
    • Como las propiedades con claves Symbol() no son enumeradas por Objeto.keys u Objeto.
    getOwnPropertyNames, pueden utilizarse para definir propiedades privadas
    • Pueden utilizarse para definir una lista de constantes, ejemplo una lista de 
    descripciones de errores

### Propiedades y métodos

| **Propiedad** | **Descripción** | **Ejemplo** |
| ------------- | ------------- | ------------- |
| Symbol.length  | Es 0 para todos los símbolos  |   |
| **Método**  |  |   |
| Symbol.for(key)  | Devuelve el símbolo creado con la clave dada. Si no existe, un nuevo símbolo se crea | let sym = Symbol.for("nombre");  |
| Symbol.keyFor(sym)  | Devuelve la clave del símbolo dado | console.log(Symbol.keyFor(sym)); // nombre  |

### Símbolos más conocidos

| **Symbol** | **Descripción** |
| ------------- | ------------- |
| Symbol.hasInstance  | Método usado por instanceof para determinar la herencia de un objeto |
| Symbol.iterator  | Método que devuelve un iterador. Los objetos que implementen la interfaz Iterable deben tener una propiedad que tenga como clave este símbolo. Dicha propiedad debe ser una función que devuelva un objeto que implemente la interfaz Iterator.  Usado por for...of. |
| Symbol.match  | Método usado por String.prototype.match() para comparar strings |
| Symbol.replace  | Método usado por String.prototype.replace() para reemplazar substrings |
| Symbol.search  | Método usado por String.prototype.search() para buscar substrings |
| Symbol.species  | Constructor utilizado para crear objetos derivados |
| Symbol.split  | Método usado por String.prototype.split() para dividir strings |
| Symbol.toPrimitive  | Método que devuelve una representación del valor primitivo de un objeto |
| Symbol.toStringTag  | Un string utilizado por Object.prototype.toString() para crear una descripción de objeto |
| Symbol.unscopables  | Un objeto cuyas propiedades son los nombres de las propiedades del objeto que no deben incluirse en una declaración with |

### Ejemplos 

#### Declaración
```
// Se ejecuta la función Symbol con una descripción que sirve de referencia
let simbolo = Symbol("descripcion");

// Cada ejecución de la función devuelve un valor distinto
let x = Symbol("coordenada");
let y = Symbol("coordenada");
console.log(x === y); // false
```

#### Para definir propiedades privadas en una clase
```
const PASSWORD = Symbol("password");
const ID = Symbol("id");
 
class Persona {
  constructor(nombre, apellido, email) {
    this[ID] = 1;
    this.nombre = nombre;
    this.id = 4;
    this.apellido = apellido;
    this.email = email;
    this[PASSWORD] = "generatedPassword";
  }
  getInfoPersona() {
    console.log(this[ID]); // 1
    console.log(this.id); // 4
    return {
      detalles: "Más detalles",
    };
  }
}
```

#### Lista de constantes
```	
let VAN = Symbol('van');
let TRUCK = Symbol('truck');
let FERRY = Symbol('ferry');
 
class Transporte {
  constructor(tipo) {
    switch(tipo) {
      case VAN:
        this.capacidad = 300; //Furgoneta 300 kilos max
        this.nombre = "Van";
        break;
      case TRUCK:
        this.capacidad = 1200; //Camión 1200 kilos max
        this.nombre = "Truck";
        break;
      case FERRY:
        this.capacidad = 5000; //Furgoneta 5000 kilos max
        this.nombre = "Ferry";
        break;
      default:
        throw new TypeError('Tipo de transporte incorrecto');
    }
  }
  toString() {
    return `Transport type ${this.nombre} with capacity ${this.capacidad}`;
  }
}
```

#### Clave con el mismo nombre de una función
```
const hasOwnProperty = Symbol("hasOwnProperty");

let map = {
    prop1: 1,
    prop2: 2,
    prop3: 3,
    [hasOwnProperty]: "Símbolo"
}

console.log(map[hasOwnProperty]); // "Símbolo"
console.log(typeof map[hasOwnProperty]); // String
console.log(map.hasOwnProperty("prop1")); // Lamado de la función hasOwnProperty, devuelve true
```

#### Symbol.iterator
```
let iterador = grupo.elementos[Symbol.iterator]();
for (let elemento of grupo) {
    console.log(elemento);
}
```

