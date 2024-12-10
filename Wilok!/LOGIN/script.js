const usuarioValido = {
    nombre: "Fulanodetal@gmail.com",
    contraseña: "12345678"  
  };
  

  function login() {
    const usuario = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
  
   
    if (usuario === usuarioValido.nombre && contraseña === usuarioValido.contraseña) {
    
      alert("¡Bienvenido!");
    
      window.location.href = "file:///C:/Users/mediapiladmin/Desktop/mediapila/Wilok!/LOGIN/chatt/index.html";
    } else {
      
      alert("Usuario o contraseña incorrectos.");
    }
  }
  