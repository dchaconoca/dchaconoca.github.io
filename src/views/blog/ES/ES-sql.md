# "¿Cómo hacer consultas con SQL?" Parte I



#### Javascript
```
// Se ejecuta la función Symbol con una descripción que sirve de referencia
let simbolo = Symbol("descripcion");
// Cada ejecución de la función devuelve un valor distinto
let x = Symbol("coordenada");
let y = Symbol("coordenada");
console.log(x === y); // false
```

#### SQL
```
SELECT * FROM categoria;
```


#### HTML
```
<div class="form-group row">
    <label for="descripcion" class="col-sm-2 col-form-label">Descripción</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="descripcion" name="descripcion" maxlength=100
        value={% if accion == "Crear" %} "" {% else %} "{{ ingrediente.descripcion }}" {% endif %} >
    </div>
</div>
```

#### CSS
```
.contenedor {
    position: relative;
    display: inline;
    margin: 0; 
    padding: 0; 
    border: 0;
}
```

#### Python
```
  # Guarda un ingrediente, ya sea nuevo o existente (id)
  def guardar(self):
    if not self.id:
      self.created=datetime.now()
      self.updated=datetime.now()
      db.session.add(self)
    else:
      ingrediente = {'nombre': self.nombre, 
                    'descripcion': self.descripcion,
                    'precio': self.precio,
                    'medida_id': self.medida_id,
                    'updated': datetime.now()
                    }
      self.query.filter_by(id=self.id).update(ingrediente)
    db.session.commit()
```

Aquí podrán encontrar el proyecto en Flask -> [Recetario en Flask](https://github.com/dchaconoca/Recetario-en-Flask)