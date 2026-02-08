// Datos predefinidos para el checklist
const checklistData = [
    {
        id: 1,
        name: "Motor",
        phrases: {
            ok: "Funciona correctamente, sin ruidos anormales ni pérdidas de fluidos.",
            warning: "Presenta leves ruidos o vibraciones, podría requerir ajustes.",
            problem: "Presenta fallas graves, pérdidas de aceite o refrigerante, necesita reparación."
        }
    },
    {
        id: 2,
        name: "Transmisión",
        phrases: {
            ok: "Cambios suaves y precisos, sin ruidos ni patinajes.",
            warning: "Algunos cambios pueden ser ligeramente bruscos, requiere verificación.",
            problem: "Problemas graves en cambios, patinaje o ruidos anormales."
        }
    },
    {
        id: 3,
        name: "Frenos",
        phrases: {
            ok: "Frenado eficiente y uniforme, pastillas y discos en buen estado.",
            warning: "Frenado ligeramente desigual o ruidos leves al frenar.",
            problem: "Frenado deficiente, vibraciones o pérdida de líquido de frenos."
        }
    },
    {
        id: 4,
        name: "Suspensión",
        phrases: {
            ok: "Suspensión en buen estado, sin ruidos ni pérdidas en amortiguadores.",
            warning: "Leves ruidos o desgaste en componentes de suspensión.",
            problem: "Amortiguadores dañados, ruidos fuertes o inestabilidad en curva."
        }
    },
    {
        id: 5,
        name: "Dirección",
        phrases: {
            ok: "Dirección precisa, sin holguras ni ruidos anormales.",
            warning: "Ligera holgura en la dirección o ruidos leves.",
            problem: "Holgura excesiva, dirección pesada o ruidos fuertes."
        }
    },
    {
        id: 6,
        name: "Carrocería",
        phrases: {
            ok: "Sin abolladuras, oxidación ni daños importantes en la pintura.",
            warning: "Algunas marcas menores, rayones o pequeños puntos de óxido.",
            problem: "Abolladuras importantes, oxidación severa o reparaciones mal realizadas."
        }
    },
    {
        id: 7,
        name: "Interiores",
        phrases: {
            ok: "Interiores en buen estado, sin roturas ni desgastes excesivos.",
            warning: "Desgaste moderado en asientos o paneles, pequeños detalles a reparar.",
            problem: "Roturas importantes, tapizados dañados o malos olores persistentes."
        }
    },
    {
        id: 8,
        name: "Neumáticos",
        phrases: {
            ok: "Neumáticos con buen dibujo, presión correcta y sin daños visibles.",
            warning: "Desgaste irregular o presión ligeramente incorrecta.",
            problem: "Neumáticos lisos, dañados o con presión muy incorrecta."
        }
    },
    {
        id: 9,
        name: "Luces",
        phrases: {
            ok: "Todas las luces funcionan correctamente, ópticas sin daños.",
            warning: "Alguna luz puede no funcionar o tener opacidad en las ópticas.",
            problem: "Varias luces no funcionan o ópticas rotas/empañadas."
        }
    },
    {
        id: 10,
        name: "Sistema eléctrico",
        phrases: {
            ok: "Todos los componentes eléctricos funcionan correctamente.",
            warning: "Algunos accesorios eléctricos pueden presentar fallas intermitentes.",
            problem: "Fallas eléctricas importantes, batería deficiente o alternador defectuoso."
        }
    },
    {
        id: 11,
        name: "Aire acondicionado",
        phrases: {
            ok: "Funciona correctamente, enfriando y calentando según lo esperado.",
            warning: "Enfría/calienta lentamente o con capacidad reducida.",
            problem: "No funciona, tiene fugas o necesita recarga de gas."
        }
    },
    {
        id: 12,
        name: "Escape",
        phrases: {
            ok: "Sistema de escape en buen estado, sin ruidos anormales ni fugas.",
            warning: "Leves ruidos o pequeñas fugas en el sistema de escape.",
            problem: "Fugas importantes, ruidos fuertes o catalizador defectuoso."
        }
    },
    {
        id: 13,
        name: "Vidrios y espejos",
        phrases: {
            ok: "Todos los vidrios y espejos en buen estado, sin daños.",
            warning: "Pequeñas fisuras o ralladuras menores en vidrios o espejos.",
            problem: "Vidrios rotos, espejos dañados o mecanismos defectuosos."
        }
    },
    {
        id: 14,
        name: "Niveles de fluidos",
        phrases: {
            ok: "Todos los fluidos en nivel correcto y en buen estado.",
            warning: "Algunos fluidos requieren rellenado o tienen aspecto opaco.",
            problem: "Falta de fluidos importantes o contaminación severa."
        }
    },
    {
        id: 15,
        name: "Documentación",
        phrases: {
            ok: "Toda la documentación está en orden y actualizada.",
            warning: "Falta algún documento menor o requiere alguna actualización.",
            problem: "Falta documentación importante o hay irregularidades graves."
        }
    }
];

// Estado de la aplicación
const appState = {
    checklist: {},
    trafficLight: null,
    formData: {
        fecha: "",
        vehiculo: "",
        dominio: "",
        kilometraje: "",
        observacion: ""
    }
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Establecer fecha actual por defecto
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').value = today;
    appState.formData.fecha = formatDate(today);
    
    // Inicializar el checklist
    initializeChecklist();
    
    // Inicializar eventos del formulario
    initializeFormEvents();
    
    // Inicializar botón de descarga PDF
    initializeDownloadButton();
    
    // Actualizar vista previa inicial
    updateReportPreview();
});

// Inicializar el checklist
function initializeChecklist() {
    const container = document.getElementById('checklist-container');
    
    checklistData.forEach(item => {
        // Inicializar estado del ítem
        appState.checklist[item.id] = { status: null, phrase: "" };
        
        // Crear elemento del checklist
        const checklistItem = document.createElement('div');
        checklistItem.className = 'checklist-item';
        checklistItem.innerHTML = `
            <h3>${item.name}</h3>
            <div class="status-buttons">
                <button class="status-btn ok" data-id="${item.id}" data-status="ok">
                    <span>✅</span> OK
                </button>
                <button class="status-btn warning" data-id="${item.id}" data-status="warning">
                    <span>⚠️</span> Atención
                </button>
                <button class="status-btn problem" data-id="${item.id}" data-status="problem">
                    <span>❌</span> Problema
                </button>
            </div>
            <div class="status-phrase" id="phrase-${item.id}">
                <!-- La frase se insertará dinámicamente -->
            </div>
        `;
        
        container.appendChild(checklistItem);
        
        // Agregar eventos a los botones
        const buttons = checklistItem.querySelectorAll('.status-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const status = this.getAttribute('data-status');
                updateChecklistItem(id, status);
            });
        });
    });
}

// Actualizar un ítem del checklist
function updateChecklistItem(id, status) {
    // Actualizar estado
    appState.checklist[id].status = status;
    appState.checklist[id].phrase = checklistData.find(item => item.id === id).phrases[status];
    
    // Actualizar interfaz
    const itemElement = document.querySelector(`.checklist-item:nth-child(${id})`);
    
    // Remover clase active de todos los botones del ítem
    const buttons = itemElement.querySelectorAll('.status-btn');
    buttons.forEach(button => button.classList.remove('active'));
    
    // Agregar clase active al botón seleccionado
    const selectedButton = itemElement.querySelector(`.status-btn[data-status="${status}"]`);
    selectedButton.classList.add('active');
    
    // Mostrar la frase correspondiente
    const phraseElement = document.getElementById(`phrase-${id}`);
    phraseElement.textContent = appState.checklist[id].phrase;
    phraseElement.classList.add('show');
    
    // Actualizar semáforo y vista previa
    updateTrafficLight();
    updateReportPreview();
}

// Actualizar semáforo de compra
function updateTrafficLight() {
    // Contar estados
    const items = Object.values(appState.checklist);
    const totalItems = items.length;
    const okItems = items.filter(item => item.status === 'ok').length;
    const warningItems = items.filter(item => item.status === 'warning').length;
    const problemItems = items.filter(item => item.status === 'problem').length;
    
    // Calcular recomendación
    let recommendation = null;
    let recommendationText = "";
    
    // Verificar si hay al menos un ítem evaluado
    const evaluatedItems = okItems + warningItems + problemItems;
    
    if (evaluatedItems === 0) {
        recommendationText = "Complete el checklist para ver la recomendación";
    } else if (problemItems > 0) {
        recommendation = "red";
        recommendationText = "NO COMPRAR - El vehículo presenta problemas graves que requieren reparación costosa.";
    } else if (warningItems > 0) {
        recommendation = "yellow";
        recommendationText = "COMPRAR RENEGOCIANDO - El vehículo requiere algunas reparaciones que deben considerarse en el precio.";
    } else if (okItems === totalItems) {
        recommendation = "green";
        recommendationText = "COMPRAR - El vehículo se encuentra en buen estado general.";
    }
    
    // Actualizar estado
    appState.trafficLight = recommendation;
    
    // Actualizar interfaz del semáforo
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => light.classList.remove('active'));
    
    if (recommendation) {
        const activeLight = document.getElementById(`light-${recommendation}`);
        activeLight.classList.add('active');
    }
    
    // Actualizar texto
    document.getElementById('traffic-light-text').textContent = recommendationText;
}

// Inicializar eventos del formulario
function initializeFormEvents() {
    // Fecha
    document.getElementById('fecha').addEventListener('change', function() {
        appState.formData.fecha = formatDate(this.value);
        updateReportPreview();
    });
    
    // Vehículo
    document.getElementById('vehiculo').addEventListener('input', function() {
        appState.formData.vehiculo = this.value;
        updateReportPreview();
    });
    
    // Dominio
    document.getElementById('dominio').addEventListener('input', function() {
        appState.formData.dominio = this.value.toUpperCase();
        this.value = appState.formData.dominio;
        updateReportPreview();
    });
    
    // Kilometraje
    document.getElementById('kilometraje').addEventListener('input', function() {
        appState.formData.kilometraje = this.value;
        updateReportPreview();
    });
    
    // Observación
    document.getElementById('observacion').addEventListener('input', function() {
        appState.formData.observacion = this.value;
        document.getElementById('char-count').textContent = this.value.length;
        updateReportPreview();
    });
}

// Formatear fecha
function formatDate(dateString) {
    if (!dateString) return "-";
    
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

// Actualizar vista previa del informe
function updateReportPreview() {
    // Actualizar datos del formulario
    document.getElementById('report-fecha').textContent = appState.formData.fecha || "-";
    document.getElementById('report-vehiculo').textContent = appState.formData.vehiculo || "-";
    document.getElementById('report-dominio').textContent = appState.formData.dominio || "-";
    document.getElementById('report-kilometraje').textContent = appState.formData.kilometraje || "-";
    document.getElementById('report-observacion').textContent = appState.formData.observacion || "-";
    
    // Actualizar semáforo en la vista previa
    const trafficLightElement = document.getElementById('report-traffic-light');
    trafficLightElement.innerHTML = "";
    
    if (appState.trafficLight === "green") {
        trafficLightElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <span style="font-size: 2rem;">🟢</span>
                <span style="font-weight: bold; font-size: 1.2rem;">COMPRAR</span>
            </div>
            <p>El vehículo se encuentra en buen estado general.</p>
        `;
    } else if (appState.trafficLight === "yellow") {
        trafficLightElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <span style="font-size: 2rem;">🟡</span>
                <span style="font-weight: bold; font-size: 1.2rem;">COMPRAR RENEGOCIANDO</span>
            </div>
            <p>El vehículo requiere algunas reparaciones que deben considerarse en el precio.</p>
        `;
    } else if (appState.trafficLight === "red") {
        trafficLightElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <span style="font-size: 2rem;">🔴</span>
                <span style="font-weight: bold; font-size: 1.2rem;">NO COMPRAR</span>
            </div>
            <p>El vehículo presenta problemas graves que requieren reparación costosa.</p>
        `;
    } else {
        trafficLightElement.innerHTML = `<p>Complete el checklist para ver la recomendación</p>`;
    }
    
    // Actualizar checklist en la vista previa
    const checklistElement = document.getElementById('report-checklist');
    checklistElement.innerHTML = "";
    
    // Verificar si hay algún ítem evaluado
    const hasEvaluatedItems = Object.values(appState.checklist).some(item => item.status !== null);
    
    if (!hasEvaluatedItems) {
        checklistElement.innerHTML = `<p>Los resultados del checklist aparecerán aquí</p>`;
        return;
    }
    
    // Generar checklist para la vista previa
    checklistData.forEach(item => {
        const itemState = appState.checklist[item.id];
        
        if (itemState.status) {
            const statusIcons = {
                ok: "✅",
                warning: "⚠️",
                problem: "❌"
            };
            
            const statusClasses = {
                ok: "ok",
                warning: "warning",
                problem: "problem"
            };
            
            const checklistItem = document.createElement('div');
            checklistItem.className = `report-checklist-item ${statusClasses[itemState.status]}`;
            checklistItem.innerHTML = `
                <h4>${statusIcons[itemState.status]} ${item.name}</h4>
                <p>${itemState.phrase}</p>
            `;
            
            checklistElement.appendChild(checklistItem);
        }
    });
}

// Inicializar botón de descarga PDF
function initializeDownloadButton() {
    document.getElementById('download-pdf').addEventListener('click', generatePDF);
}

// Generar PDF
async function generatePDF() {
    // Verificar que haya datos básicos
    if (!appState.formData.vehiculo || !appState.formData.dominio) {
        alert("Por favor, complete al menos los campos de Vehículo y Dominio antes de generar el PDF.");
        return;
    }
    
    // Verificar que haya al menos un ítem del checklist evaluado
    const hasEvaluatedItems = Object.values(appState.checklist).some(item => item.status !== null);
    
    if (!hasEvaluatedItems) {
        alert("Por favor, complete al menos un ítem del checklist antes de generar el PDF.");
        return;
    }
    
    // Crear un elemento temporal para el PDF
    const pdfContainer = document.createElement('div');
    pdfContainer.style.position = 'absolute';
    pdfContainer.style.left = '-9999px';
    pdfContainer.style.width = '800px';
    pdfContainer.style.padding = '40px';
    pdfContainer.style.backgroundColor = 'white';
    pdfContainer.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    
    // Construir contenido del PDF
    let pdfContent = `
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2c3e50; padding-bottom: 20px;">
            <h1 style="color: #2c3e50; font-size: 32px; margin-bottom: 10px;">Akina Check</h1>
            <h2 style="color: #6c757d; font-size: 24px; font-weight: normal;">Informe de Inspección Vehicular</h2>
        </div>
        
        <div style="margin-bottom: 30px;">
            <h3 style="color: #2c3e50; border-bottom: 1px solid #e9ecef; padding-bottom: 8px; margin-bottom: 15px;">Datos del Vehículo</h3>
            <div style="line-height: 1.8;">
                <p><strong>Fecha:</strong> ${appState.formData.fecha || "-"}</p>
                <p><strong>Vehículo:</strong> ${appState.formData.vehiculo || "-"}</p>
                <p><strong>Dominio:</strong> ${appState.formData.dominio || "-"}</p>
                <p><strong>Kilometraje:</strong> ${appState.formData.kilometraje || "-"} km</p>
                <p><strong>Observación General:</strong> ${appState.formData.observacion || "-"}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 30px;">
            <h3 style="color: #2c3e50; border-bottom: 1px solid #e9ecef; padding-bottom: 8px; margin-bottom: 15px;">Recomendación</h3>
    `;
    
    // Agregar semáforo al PDF
    if (appState.trafficLight === "green") {
        pdfContent += `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <span style="font-size: 24px;">🟢</span>
                <span style="font-weight: bold; font-size: 18px;">COMPRAR</span>
            </div>
            <p>El vehículo se encuentra en buen estado general.</p>
        `;
    } else if (appState.trafficLight === "yellow") {
        pdfContent += `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <span style="font-size: 24px;">🟡</span>
                <span style="font-weight: bold; font-size: 18px;">COMPRAR RENEGOCIANDO</span>
            </div>
            <p>El vehículo requiere algunas reparaciones que deben considerarse en el precio.</p>
        `;
    } else if (appState.trafficLight === "red") {
        pdfContent += `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <span style="font-size: 24px;">🔴</span>
                <span style="font-weight: bold; font-size: 18px;">NO COMPRAR</span>
            </div>
            <p>El vehículo presenta problemas graves que requieren reparación costosa.</p>
        `;
    }
    
    pdfContent += `</div><div style="margin-bottom: 30px;">
        <h3 style="color: #2c3e50; border-bottom: 1px solid #e9ecef; padding-bottom: 8px; margin-bottom: 15px;">Checklist de Inspección</h3>
    `;
    
    // Agregar checklist al PDF
    checklistData.forEach(item => {
        const itemState = appState.checklist[item.id];
        
        if (itemState.status) {
            const statusIcons = {
                ok: "✅",
                warning: "⚠️",
                problem: "❌"
            };
            
            const borderColors = {
                ok: "#27ae60",
                warning: "#f39c12",
                problem: "#e74c3c"
            };
            
            pdfContent += `
                <div style="border-left: 4px solid ${borderColors[itemState.status]}; padding: 12px 15px; margin-bottom: 12px; background-color: rgba(0,0,0,0.02);">
                    <div style="font-weight: bold; margin-bottom: 5px;">${statusIcons[itemState.status]} ${item.name}</div>
                    <div>${itemState.phrase}</div>
                </div>
            `;
        }
    });
    
    // Pie de página del PDF
    pdfContent += `
        </div>
        <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; font-size: 12px; color: #6c757d;">
            Desarrollado por AFM Solutions — afmsolutions.com.ar
        </div>
    `;
    
    pdfContainer.innerHTML = pdfContent;
    document.body.appendChild(pdfContainer);
    
    try {
        // Usar html2canvas para capturar el contenido
        const canvas = await html2canvas(pdfContainer, {
            scale: 2,
            useCORS: true,
            logging: false
        });
        
        // Crear PDF con jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        // Agregar imagen al PDF
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190; // Ancho máximo en mm para A4
        const pageHeight = 297; // Altura de A4 en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        
        // Si la imagen es más alta que una página, agregar páginas adicionales
        let heightLeft = imgHeight;
        let position = 10;
        
        while (heightLeft >= pageHeight) {
            position = heightLeft - pageHeight + 10;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 10, -position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        // Descargar el PDF
        const fileName = `Informe_${appState.formData.dominio || 'vehiculo'}_${new Date().toISOString().slice(0, 10)}.pdf`;
        pdf.save(fileName);
        
        // Limpiar
        document.body.removeChild(pdfContainer);
        
    } catch (error) {
        console.error("Error al generar el PDF:", error);
        alert("Ocurrió un error al generar el PDF. Por favor, intente nuevamente.");
        
        // Limpiar en caso de error
        if (document.body.contains(pdfContainer)) {
            document.body.removeChild(pdfContainer);
        }
    }
}
