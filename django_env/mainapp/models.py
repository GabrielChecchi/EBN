from django.db import models
from django.contrib.auth.models import User

# Create your models here.

PAISES = [
    ("Alemania", "Alemania"),
    ("Andorra", "Andorra"),
    ("Argentina", "Argentina"),
    ("Australia", "Australia"),
    ("Austria", "Austria"),
    ("Bahamas", "Bahamas"),
    ("Barbados", "Barbados"),
    ("Belice", "Belice"),
    ("Bolivia", "Bolivia"),
    ("Brasil", "Brasil"),
    ("Canadá", "Canadá"),
    ("Chile", "Chile"),
    ("China", "China"),
    ("Colombia", "Colombia"),
    ("Costa Rica", "Costa Rica"),
    ("Cuba", "Cuba"),
    ("Dinamarca", "Dinamarca"),
    ("Dominica", "Dominica"),
    ("Ecuador", "Ecuador"),
    ("El Salvador", "El Salvador"),
    ("España", "España"),
    ("Estados Unidos", "Estados Unidos"),
    ("Filipinas", "Filipinas"),
    ("Finlandia", "Finlandia"),
    ("Francia", "Francia"),
    ("Granada", "Granada"),
    ("Grecia", "Grecia"),
    ("Guatemala", "Guatemala"),
    ("Guyana", "Guyana"),
    ("Haití", "Haití"),
    ("Honduras", "Honduras"),
    ("India", "India"),
    ("Irlanda", "Irlanda"),
    ("Islandia", "Islandia"),
    ("Italia", "Italia"),
    ("Jamaica", "Jamaica"),
    ("Japón", "Japón"),
    ("México", "México"),
    ("Montenegro", "Montenegro"),
    ("Nicaragua", "Nicaragua"),
    ("Noruega", "Noruega"),
    ("Nueva Zelanda", "Nueva Zelanda"),
    ("Países Bajos", "Países Bajos"),
    ("Panamá", "Panamá"),
    ("Paraguay", "Paraguay"),
    ("Perú", "Perú"),
    ("Polonia", "Polonia"),
    ("Portugal", "Portugal"),
    ("Reino Unido", "Reino Unido"),
    ("República Checa", "República Checa"),
    ("República Dominicana", "República Dominicana"),
    ("Rumania", "Rumania"),
    ("Rusia", "Rusia"),
    ("Suecia", "Suecia"),
    ("Suiza", "Suiza"),
    ("Turquía", "Turquía"),
    ("Ucrania", "Ucrania"),
    ("Uruguay", "Uruguay"),
    ("Venezuela", "Venezuela"),
    ("Otro", "Otro")
]

PROVINCIAS = [
    ("CABA", "CABA"),
    ("Buenos Aires", "Buenos Aires"),
    ("Catamarca", "Catamarca"),
    ("Chaco", "Chaco"),
    ("Chubut", "Chubut"),
    ("Córdoba", "Córdoba"),
    ("Corrientes", "Corrientes"),
    ("Entre Ríos", "Entre Ríos"),
    ("Formosa", "Formosa"),
    ("Jujuy", "Jujuy"),
    ("La Pampa", "La Pampa"),
    ("La Rioja", "La Rioja"),
    ("Mendoza", "Mendoza"),
    ("Misiones", "Misiones"),
    ("Neuquén", "Neuquén"),
    ("Río Negro", "Río Negro"),
    ("Salta", "Salta"),
    ("San Juan", "San Juan"),
    ("San Luis", "San Luis"),
    ("Santa Cruz", "Santa Cruz"),
    ("Santa Fe", "Santa Fe"),
    ("Santiago del Estero", "Santiago del Estero"),
    ("Tierra del Fuego", "Tierra del Fuego"),
    ("Tucumán", "Tucumán"),
]

LOCALIDADES = [
    # CABA
    ("Agronomía", "Agronomía"),
    ("Almagro", "Almagro"),
    ("Balvanera", "Balvanera"),
    ("Barracas", "Barracas"),
    ("Belgrano", "Belgrano"),
    ("Boedo", "Boedo"),
    ("Caballito", "Caballito"),
    ("Chacarita", "Chacarita"),
    ("Coghlan", "Coghlan"),
    ("Colegiales", "Colegiales"),
    ("Constitución", "Constitución"),
    ("Flores", "Flores"),
    ("Floresta", "Floresta"),
    ("La Boca", "La Boca"),
    ("La Paternal", "La Paternal"),
    ("Liniers", "Liniers"),
    ("Mataderos", "Mataderos"),
    ("Montserrat", "Montserrat"),
    ("Monte Castro", "Monte Castro"),
    ("Nueva Pompeya", "Nueva Pompeya"),
    ("Núñez", "Núñez"),
    ("Palermo", "Palermo"),
    ("Parque Avellaneda", "Parque Avellaneda"),
    ("Parque Chacabuco", "Parque Chacabuco"),
    ("Parque Chas", "Parque Chas"),
    ("Parque Patricios", "Parque Patricios"),
    ("Puerto Madero", "Puerto Madero"),
    ("Recoleta", "Recoleta"),
    ("Retiro", "Retiro"),
    ("Saavedra", "Saavedra"),
    ("San Cristóbal", "San Cristóbal"),
    ("San Nicolás", "San Nicolás"),
    ("San Telmo", "San Telmo"),
    ("Vélez Sarsfield", "Vélez Sarsfield"),
    ("Versalles", "Versalles"),
    ("Villa Crespo", "Villa Crespo"),
    ("Villa del Parque", "Villa del Parque"),
    ("Villa Devoto", "Villa Devoto"),
    ("Villa Gral. Mitre", "Villa Gral. Mitre"),
    ("Villa Lugano", "Villa Lugano"),
    ("Villa Luro", "Villa Luro"),
    ("Villa Ortúzar", "Villa Ortúzar"),
    ("Villa Pueyrredón", "Villa Pueyrredón"),
    ("Villa Real", "Villa Real"),
    ("Villa Riachuelo", "Villa Riachuelo"),
    ("Villa Santa Rita", "Villa Santa Rita"),
    ("Villa Soldati", "Villa Soldati"),
    ("Villa Urquiza", "Villa Urquiza"),
    # Provincia (partidos)
    ("Vicente López", "Vicente López"),
    ("San Isidro", "San Isidro"),
    ("San Fernando", "San Fernando"),
    ("Tigre", "Tigre"),
    ("General San Martín", "General San Martín"),
    ("Malvinas Argentinas", "Malvinas Argentinas"),
    ("José C. Paz", "José C. Paz"),
    ("San Miguel", "San Miguel"),
    ("Tres de Febrero", "Tres de Febrero"),
    ("Morón", "Morón"),
    ("Hurlingham", "Hurlingham"),
    ("Moreno", "Moreno"),
    ("Merlo", "Merlo"),
    ("La Matanza", "La Matanza"),
    ("Avellaneda", "Avellaneda"),
    ("Lanús", "Lanús"),
    ("Lomas de Zamora", "Lomas de Zamora"),
    ("Quilmes", "Quilmes"),
    ("Almirante Brown", "Almirante Brown"),
    ("Esteban Echeverría", "Esteban Echeverría"),
    ("Ezeiza", "Ezeiza"),
    ("Berazategui", "Berazategui"),
    ("Florencio Varela", "Florencio Varela")
]


class Usuario(models.Model):
    id_usuario = models.OneToOneField(User, on_delete = models.CASCADE)
    nombre_usuario = models.CharField(max_length = 50)
    pais = models.CharField(max_length = 100, choices = PAISES)
    provincia = models.CharField(max_length = 100, blank = True, choices = PROVINCIAS)
    localidad = models.CharField(max_length = 100, blank = True, choices = LOCALIDADES)

class Mensaje(models.Model):
    emisor = models.ForeignKey(Usuario, on_delete = models.CASCADE, related_name = "mensajes_enviados")
    receptor = models.ForeignKey(Usuario, on_delete = models.CASCADE, related_name = "mensajes_recibidos")
    contenido = models.CharField(max_length = 200)
    fecha = models.DateField(auto_now = True, editable = False)
    hora = models.TimeField(auto_now = True, editable = False)

class Publicacion(models.Model):
    contenido = models.TextField()
    fecha = models.DateTimeField(auto_now = True, editable = False)
    reacciones = models.ManyToManyField(Usuario, related_name = "reacciones_publicacion")

class ImagenPublicacion(models.Model):
    publicacion = models.ForeignKey(Publicacion, related_name = "imagenes", on_delete = models.CASCADE)
    archivo = models.ImageField(upload_to = "imagenes/publicaciones/")

class Comentario(models.Model):
    publicacion = models.ForeignKey(Publicacion, related_name = "comentarios", on_delete = models.CASCADE)
    usuario = models.ForeignKey(Usuario, related_name = "comentarios", on_delete = models.CASCADE)
    reacciones = models.ManyToManyField(Usuario, related_name = "reacciones_comentario")
    contenido = models.CharField(max_length = 100)
    fecha = models.DateTimeField(auto_now = True, editable = False)

class PublicacionProducto(models.Model):
    nombre = models.CharField(max_length = 100)
    descripcion = models.TextField(max_length = 200)
    precio = models.FloatField()

class ImagenProducto(models.Model):
    producto = models.ForeignKey(PublicacionProducto, related_name = "imagenes", on_delete = models.CASCADE)
    archivo = models.ImageField(upload_to = "imagenes/productos/")
