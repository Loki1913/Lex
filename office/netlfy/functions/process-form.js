// Netlify function para procesar formularios
exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }
    
    try {
        const data = JSON.parse(event.body);
        
        // Aquí procesarías los datos del formulario
        // Por ejemplo, enviar un email, guardar en base de datos, etc.
        
        console.log('Datos del formulario:', data);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Formulario procesado correctamente' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error procesando el formulario' })
        };
    }
};