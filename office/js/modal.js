// JavaScript - Funcionalidades de modales
document.addEventListener('DOMContentLoaded', function() {
    // Modal de propiedad
    const propertyModal = document.getElementById('propertyModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const propertyButtons = document.querySelectorAll('[data-property]');
    
    // Datos de propiedades (simulados)
    const properties = {
        1: {
            title: "Apartamento en Santo Domingo Este",
            address: "Villa Duarte, Santo Domingo Este",
            price: "US$185,000",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Exclusivo apartamento de 3 habitaciones con vista panorámica. Amplio espacio, acabados de lujo y ubicación privilegiada cerca de centros comerciales, hospitales y escuelas. Ideal para familias que buscan comodidad y seguridad.",
            features: `
                <span><i class="fas fa-bed"></i> 3 Habitaciones</span>
                <span><i class="fas fa-bath"></i> 2 Baños</span>
                <span><i class="fas fa-ruler-combined"></i> 120 m²</span>
                <span><i class="fas fa-car"></i> 2 Parqueos</span>
                <span><i class="fas fa-tree"></i> Área Verde</span>
                <span><i class="fas fa-swimming-pool"></i> Piscina</span>
            `,
            location: "<p>Ubicado en una de las zonas más prestigiosas de Santo Domingo Este, a 10 minutos del centro comercial Megacentro y 15 minutos de la zona colonial.</p><div style='width: 100%; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px; margin-top: 15px;'>Mapa de ubicación</div>"
        },
        2: {
            title: "Casa en Punta Cana",
            address: "Bavaro, Punta Cana",
            price: "US$325,000",
            image: "https://images.unsplash.com/photo-1600566753080-2577f3ce6c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Hermosa casa en residencial exclusivo de Punta Cana. Diseño moderno con amplios espacios, perfecta para disfrutar del clima caribeño. Cuenta con terraza, jardín y área de parrilla.",
            features: `
                <span><i class="fas fa-bed"></i> 4 Habitaciones</span>
                <span><i class="fas fa-bath"></i> 3 Baños</span>
                <span><i class="fas fa-ruler-combined"></i> 220 m²</span>
                <span><i class="fas fa-car"></i> 2 Parqueos</span>
                <span><i class="fas fa-tree"></i> Jardín</span>
                <span><i class="fas fa-umbrella-beach"></i> Cerca de la playa</span>
            `,
            location: "<p>Ubicada en el corazón de Bavaro, a solo 5 minutos de las playas más famosas de Punta Cana y 10 minutos del aeropuerto internacional.</p><div style='width: 100%; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px; margin-top: 15px;'>Mapa de ubicación</div>"
        },
        3: {
            title: "Apartamento en Santiago",
            address: "Centro, Santiago",
            price: "US$1,200/mes",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Moderno apartamento en el centro de Santiago. Perfecto para profesionales que trabajan en el área céntrica. Edificio con seguridad 24/7, gimnasio y salón social.",
            features: `
                <span><i class="fas fa-bed"></i> 2 Habitaciones</span>
                <span><i class="fas fa-bath"></i> 2 Baños</span>
                <span><i class="fas fa-ruler-combined"></i> 95 m²</span>
                <span><i class="fas fa-car"></i> 1 Parqueo</span>
                <span><i class="fas fa-dumbbell"></i> Gimnasio</span>
                <span><i class="fas fa-concierge-bell"></i> Salón social</span>
            `,
            location: "<p>Ubicado en el centro financiero de Santiago, a walking distance de bancos, restaurantes y centros comerciales. Excelente acceso to transporte público.</p><div style='width: 100%; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px; margin-top: 15px;'>Mapa de ubicación</div>"
        }
    };
    
    // Abrir modal de propiedad
    propertyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const propertyId = this.getAttribute('data-property');
            const property = properties[propertyId];
            
            if (property) {
                document.getElementById('modalPropertyImg').src = property.image;
                document.getElementById('modalPropertyTitle').textContent = property.title;
                document.getElementById('modalPropertyAddress').textContent = property.address;
                document.getElementById('modalPropertyPrice').textContent = property.price;
                document.getElementById('modalPropertyDescription').textContent = property.description;
                document.getElementById('modalPropertyFeatures').innerHTML = property.features;
                document.getElementById('modalPropertyLocation').innerHTML = property.location;
                
                // Reset tabs
                document.querySelectorAll('.modal-tab').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.modal-tab-content').forEach(content => content.classList.remove('active'));
                document.querySelector('[data-tab="descripcion"]').classList.add('active');
                document.getElementById('descripcion').classList.add('active');
                
                propertyModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Tabs dentro del modal
    const modalTabs = document.querySelectorAll('.modal-tab');
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            modalTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Modal de contacto
    const contactModal = document.getElementById('contactModal');
    const contactButtons = document.querySelectorAll('[data-lawyer]');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lawyerId = this.getAttribute('data-lawyer');
            
            // Aquí podrías cargar información específica del abogado si lo deseas
            contactModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Modal de perfil de abogado
    const lawyerModal = document.getElementById('lawyerModal');
    const profileButtons = document.querySelectorAll('[data-profile]');
    
    // Datos de abogados (simulados)
    const lawyers = {
        maria: {
            name: "Dra. María Fernández",
            specialty: "Derecho Inmobiliario",
            experience: "15 años de experiencia",
            description: "Especialista en transacciones de bienes raíces y derecho registral. Egresada de la Universidad Autónoma de Santo Domingo con honores. Miembro del Colegio de Abogados de la República Dominicana y de la International Bar Association.",
            education: "Licenciatura en Derecho - Universidad Autónoma de Santo Domingo<br>Maestría en Derecho Inmobiliario - Universidad de Barcelona",
            contact: {
                phone: "+1 (809) 555-1001",
                email: "maria.fernandez@lexproperties.com",
                whatsapp: "https://wa.me/18095551001"
            }
        },
        carlos: {
            name: "Lic. Carlos Rodríguez",
            specialty: "Derecho Corporativo",
            experience: "12 años de experiencia",
            description: "Experto en derecho mercantil, fusiones y adquisiciones. Consultor de importantes empresas nacionales e internacionales. Ha liderado transacciones por valor de más de USD $50 millones.",
            education: "Licenciatura en Derecho - Pontificia Universidad Católica Madre y Maestra<br>Especialización en Derecho Corporativo - Harvard Law School",
            contact: {
                phone: "+1 (809) 555-1002",
                email: "carlos.rodriguez@lexproperties.com",
                whatsapp: "https://wa.me/18095551002"
            }
        },
        laura: {
            name: "Dra. Laura Martínez",
            specialty: "Derecho Laboral",
            experience: "10 años de experiencia",
            description: "Especialista en derecho laboral y seguridad social. Asesora de empresas en compliance normativo y relaciones laborales. Ha representado tanto a empleadores como a empleados en disputas laborales complejas.",
            education: "Licenciatura en Derecho - Universidad Nacional Pedro Henríquez Ureña<br>Maestría en Derecho Laboral - Universidad de Salamanca",
            contact: {
                phone: "+1 (809) 555-1003",
                email: "laura.martinez@lexproperties.com",
                whatsapp: "https://wa.me/18095551003"
            }
        }
    };
    
    profileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lawyerId = this.getAttribute('data-profile');
            const lawyer = lawyers[lawyerId];
            
            if (lawyer) {
                document.getElementById('lawyerProfileContent').innerHTML = `
                    <div style="display: flex; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 250px;">
                            <img src="https://images.unsplash.com/photo-${lawyerId === 'maria' ? '1560250097-0b93528c311a' : lawyerId === 'carlos' ? '1582750433449-648ed127bb54' : '1573497019940-1c28c88b4f3e'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="${lawyer.name}" style="width: 100%; border-radius: 12px;">
                        </div>
                        <div style="flex: 2; min-width: 300px;">
                            <h2>${lawyer.name}</h2>
                            <p class="especialidad">${lawyer.specialty}</p>
                            <p class="experiencia">${lawyer.experience}</p>
                            <p>${lawyer.description}</p>
                            <div class="abogado-contact" style="margin-top: 20px;">
                                <a href="${lawyer.contact.whatsapp}" class="btn btn-primary btn-small"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                                <a href="mailto:${lawyer.contact.email}" class="btn btn-primary btn-small"><i class="fas fa-envelope"></i> Email</a>
                                <a href="tel:${lawyer.contact.phone}" class="btn btn-primary btn-small"><i class="fas fa-phone"></i> Llamar</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Educación</h3>
                        <p>${lawyer.education}</p>
                    </div>
                `;
                
                lawyerModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Cerrar modales
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            propertyModal.style.display = 'none';
            contactModal.style.display = 'none';
            lawyerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === propertyModal) {
            propertyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === lawyerModal) {
            lawyerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});