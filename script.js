// ============================================
// AKINA CHECK - SISTEMA PROFESIONAL
// Versión para inspectores y clientes exigentes
// ============================================

// Configuración inicial
const SYSTEM_CONFIG = {
    companyName: "AKINA CHECK",
    companyContact: "info@akinacheck.com | www.akinacheck.com",
    developer: "AFM Solutions | afmsolutions.com.ar",
    version: "v2.0 Profesional"
};

// Base de datos de componentes
const COMPONENTS_DB = [
    // CATEGORÍA CRÍTICA
    {
        id: 1,
        name: "Motor",
        category: "critical",
        weight: 10,
        description: "Sistema motor completo, incluye bloque, culata, distribución y sistemas auxiliares.",
        evaluationGuide: "Verificar ruidos anormales, vibraciones, pérdidas de fluidos, humo en escape y funcionamiento en frío/caliente.",
        okPhrase: "Funciona correctamente, sin ruidos anormales ni pérdidas. Respuesta adecuada al acelerador.",
        warningPhrase: "Presenta leves ruidos o vibraciones. Puede requerir ajustes o mantenimiento preventivo.",
        problemPhrase: "Presenta fallas graves, pérdidas importantes de fluidos o ruidos metálicos. Requiere reparación inmediata."
    },
    {
        id: 2,
        name: "Transmisión",
        category: "critical",
        weight: 9,
        description: "Sistema de transmisión (manual o automática) y embrague.",
        evaluationGuide: "Probar cambios en toda la gama, verificar ruidos, patinajes y respuesta.",
        okPhrase: "Cambios suaves y precisos en toda la gama de revoluciones. Embrague en buen estado.",
        warningPhrase: "Algunos cambios pueden ser bruscos o presentar ruidos leves. Requiere verificación.",
        problemPhrase: "Problemas graves de transmisión: patinaje, ruidos fuertes o cambios que no ingresan."
    },
    
    // CATEGORÍA LEGAL/DOCUMENTACIÓN
    {
        id: 3,
        name: "Documentación",
        category: "legal",
        weight: 10,
        description: "Documentación legal del vehículo y verificaciones.",
        evaluationGuide: "Verificar título, cédula verde/azul, VTV, póliza de seguro y libre deuda.",
        okPhrase: "Toda la documentación está en orden y actualizada. Verificación policial al día.",
        warningPhrase: "Falta algún documento menor o requiere actualizaciones simples.",
        problemPhrase: "Documentación incompleta o irregularidades graves. Imposible transferir legalmente."
    },
    
    // CATEGORÍA IMPORTANTE (SEGURIDAD/CONFIABILIDAD)
    {
        id: 4,
        name: "Sistema de Frenos",
        category: "important",
        weight: 8,
        description: "Frenos delanteros, traseros, servofreno y líquido de frenos.",
        evaluationGuide: "Probar frenado en diferentes velocidades, verificar desgaste de pastillas/discos.",
        okPhrase: "Frenado eficiente y uniforme en todas las ruedas. Pastillas y discos en buen estado.",
        warningPhrase: "Frenado ligeramente desigual o ruidos leves al frenar. Desgaste moderado.",
        problemPhrase: "Frenado deficiente, vibraciones al frenar o pérdida de líquido. Peligro inminente."
    },
    {
        id: 5,
        name: "Suspensión y Dirección",
        category: "important",
        weight: 7,
        description: "Amortiguadores, rótulas, terminales y sistema de dirección.",
        evaluationGuide: "Probar en curvas, baches y verificar ruidos, holguras.",
        okPhrase: "Suspensión estable y dirección precisa. Sin ruidos ni holguras anormales.",
        warningPhrase: "Leves ruidos en suspensión o ligera holgura en dirección.",
        problemPhrase: "Amortiguadores dañados, holgura excesiva o inestabilidad en curva."
    },
    {
        id: 6,
        name: "Neumáticos y Alineación",
        category: "important",
        weight: 6,
        description: "Estado de neumáticos, presión y alineación del vehículo.",
        evaluationGuide: "Verificar dibujo, daños, presión y desgaste irregular.",
        okPhrase: "Neumáticos con buen dibujo, presión correcta y alineación adecuada.",
        warningPhrase: "Desgaste irregular o presión ligeramente incorrecta. Requiere rotación/alineación.",
        problemPhrase: "Neumáticos lisos, dañados o presión muy incorrecta. Peligro de accidente."
    },
    
    // CATEGORÍA SECUNDARIA (CONFORT/ESTÉTICA)
    {
        id: 7,
        name: "Carrocería y Pintura",
        category: "secondary",
        weight: 3,
        description: "Estado general de la carrocería, pintura y ausencia de corrosión.",
        evaluationGuide: "Inspeccionar en buena luz, buscar golpes, rayones, óxido y reparaciones.",
        okPhrase: "Sin abolladuras importantes, oxidación ni daños en la pintura.",
        warningPhrase: "Algunas marcas menores, rayones superficiales o pequeños puntos de óxido.",
        problemPhrase: "Abolladuras importantes, oxidación severa o reparaciones mal realizadas."
    },
    {
        id: 8,
        name: "Interiores y Tapicería",
        category: "secondary",
        weight: 2,
        description: "Estado de asientos, paneles, techo y accesorios interiores.",
        evaluationGuide: "Verificar desgaste, roturas, manchas y funcionamiento de accesorios.",
        okPhrase: "Interiores en buen estado, sin roturas ni desgastes excesivos.",
        warningPhrase: "Desgaste moderado en asientos o paneles, pequeños detalles a reparar.",
        problemPhrase: "Roturas importantes, tapizados dañados o malos olores persistentes."
    },
    {
        id: 9,
        name: "Sistema Eléctrico",
        category: "secondary",
        weight: 4,
        description: "Luces, instrumentos, accesorios eléctricos y batería.",
        evaluationGuide: "Probar todas las luces, instrumentos y accesorios eléctricos.",
        okPhrase: "Todos los componentes eléctricos funcionan correctamente.",
        warningPhrase: "Algunos accesorios eléctricos pueden presentar fallas intermitentes.",
        problemPhrase: "Fallas eléctricas importantes, batería deficiente o alternador defectuoso."
    },
    {
        id: 10,
        name: "Aire Acondicionado y Climatización",
        category: "secondary",
        weight: 3,
        description: "Sistema de aire acondicionado, calefacción y ventilación.",
        evaluationGuide: "Probar en frío y calor máximo, verificar ruidos y olores.",
        okPhrase: "Funciona correctamente, enfriando y calentando según especificaciones.",
        warningPhrase: "Enfría/calienta lentamente o con capacidad reducida.",
        problemPhrase: "No funciona, tiene fugas importantes o necesita recarga de gas."
    }
];

// Estado de la aplicación
const AppState = {
    // Datos del vehículo
    vehicle: {
        fecha: "",
        vehiculo: "",
        dominio: "",
        kilometraje: "",
        observacion: ""
    },
    
    // Evaluación de componentes
    evaluation: {},
    
    // Resultados
    results: {
        critical: { problems: 0, warnings: 0, items: [] },
        important: { problems: 0, warnings: 0, items: [] },
        secondary: { problems: 0, warnings: 0, items: [] },
        legal: { problems: 0, warnings: 0, items: [] }
    },
    
    // Recomendación
    recommendation: {
        system: null, // 'approved', 'conditional', 'not-recommended'
        inspector: null,
        adjusted: false,
        adjustmentReason: "",
        explanation: ""
    },
    
    // Configuración
    inspectorName: "Inspector Demo",
    reportNumber: "INSP-001"
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Configurar fecha actual
    const today = new Date();
    const formattedDate = formatDate(today);
    document.getElementById('fecha').valueAsDate = today;
    document.getElementById('current-date').textContent = formattedDate;
    AppState.vehicle.fecha = formattedDate;
    
    // Generar número de informe
    const reportNum = `INSP-${String(today.getTime()).slice(-6)}`;
    AppState.reportNumber = reportNum;
    document.getElementById('report-number').textContent = reportNum;
    document.getElementById('report-id').textContent = reportNum;
    
    // Inicializar componentes
    initializeComponents();
    
    // Inicializar eventos
    initializeEvents();
    
    // Inicializar vista previa
    updateReportPreview();
    
    // Inicializar guía de evaluación
    initializeEvaluationGuide();
    
    console.log(`✅ ${SYSTEM_CONFIG.companyName} ${SYSTEM_CONFIG.version} inicializado correctamente`);
});

// Inicializar componentes del checklist
function initializeComponents() {
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';
    
    COMPONENTS_DB.forEach(component => {
        // Inicializar estado
        AppState.evaluation[component.id] = {
            status: null,
            category: component.category,
            weight: component.weight,
            evaluated: false
        };
        
        // Crear elemento HTML
        const item = document.createElement('div');
        item.className = 'checklist-item';
        item.dataset.id = component.id;
        item.dataset.category = component.category;
        
        item.innerHTML = `
            <div class="checklist-item-header">
                <div class="checklist-item-title">
                    <div class="checklist-item-name">${component.name}</div>
                    <div class="checklist-item-category ${component.category}">
                        ${getCategoryLabel(component.category)} • Peso: ${component.weight}/10
                    </div>
                </div>
                <div class="checklist-item-actions">
                    <button class="btn-status ok" data-status="ok">
                        <i class="fas fa-check"></i> OK
                    </button>
                    <button class="btn-status warning" data-status="warning">
                        <i class="fas fa-exclamation"></i> Atención
                    </button>
                    <button class="btn-status problem" data-status="problem">
                        <i class="fas fa-times"></i> Problema
                    </button>
                </div>
            </div>
            <div class="checklist-item-details" id="details-${component.id}">
                <p class="checklist-item-description">
                    <strong>Descripción:</strong> ${component.description}
                </p>
                <p class="checklist-item-guide">
                    <strong>Guía de evaluación:</strong> ${component.evaluationGuide}
                </p>
                <div class="checklist-item-impact" id="impact-${component.id}">
                    <!-- Se completará dinámicamente -->
                </div>
            </div>
        `;
        
        container.appendChild(item);
        
        // Agregar eventos a los botones
        const buttons = item.querySelectorAll('.btn-status');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const componentId = parseInt(item.dataset.id);
                const status = this.dataset.status;
                evaluateComponent(componentId, status);
            });
        });
        
        // Mostrar/ocultar detalles al hacer clic en el título
        const title = item.querySelector('.checklist-item-title');
        title.addEventListener('click', function() {
            const details = document.getElementById(`details-${component.id}`);
            details.classList.toggle('show');
        });
    });
}

// Evaluar un componente
function evaluateComponent(id, status) {
    const component = COMPONENTS_DB.find(c => c.id === id);
    const itemElement = document.querySelector(`.checklist-item[data-id="${id}"]`);
    
    // Actualizar estado
    AppState.evaluation[id].status = status;
    AppState.evaluation[id].evaluated = true;
    
    // Actualizar UI del componente
    const buttons = itemElement.querySelectorAll('.btn-status');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.status === status) {
            btn.classList.add('active');
        }
    });
    
    // Mostrar frase de impacto
    const impactElement = document.getElementById(`impact-${id}`);
    let impactPhrase = '';
    let statusClass = '';
    
    switch(status) {
        case 'ok':
            impactPhrase = component.okPhrase;
            statusClass = 'ok';
            break;
        case 'warning':
            impactPhrase = component.warningPhrase;
            statusClass = 'warning';
            break;
        case 'problem':
            impactPhrase = component.problemPhrase;
            statusClass = 'problem';
            break;
    }
    
    impactElement.innerHTML = `
        <p><strong>Evaluación:</strong> <span class="status-${statusClass}">${impactPhrase}</span></p>
    `;
    
    // Mostrar detalles
    document.getElementById(`details-${id}`).classList.add('show');
    
    // Actualizar estadísticas
    updateStatistics();
    
    // Actualizar recomendación
    updateRecommendation();
    
    // Actualizar vista previa
    updateReportPreview();
}

// Actualizar estadísticas
function updateStatistics() {
    // Resetear contadores
    AppState.results = {
        critical: { problems: 0, warnings: 0, items: [] },
        important: { problems: 0, warnings: 0, items: [] },
        secondary: { problems: 0, warnings: 0, items: [] },
        legal: { problems: 0, warnings: 0, items: [] }
    };
    
    // Contar por categoría
    Object.entries(AppState.evaluation).forEach(([id, data]) => {
        if (data.evaluated) {
            const component = COMPONENTS_DB.find(c => c.id == id);
            
            switch(data.status) {
                case 'problem':
                    AppState.results[data.category].problems++;
                    AppState.results[data.category].items.push({
                        id: parseInt(id),
                        name: component.name,
                        status: 'problem'
                    });
                    break;
                case 'warning':
                    AppState.results[data.category].warnings++;
                    AppState.results[data.category].items.push({
                        id: parseInt(id),
                        name: component.name,
                        status: 'warning'
                    });
                    break;
                default:
                    AppState.results[data.category].items.push({
                        id: parseInt(id),
                        name: component.name,
                        status: 'ok'
                    });
            }
        }
    });
    
    // Actualizar UI de estadísticas
    updateStatisticsUI();
}

// Actualizar UI de estadísticas
function updateStatisticsUI() {
    // Contadores rápidos
    let totalProblems = 0;
    let totalWarnings = 0;
    let totalOk = 0;
    let totalEvaluated = 0;
    
    Object.values(AppState.results).forEach(category => {
        totalProblems += category.problems;
        totalWarnings += category.warnings;
        totalEvaluated += category.items.length;
    });
    
    totalOk = totalEvaluated - totalProblems - totalWarnings;
    
    document.getElementById('critical-indicator').textContent = totalProblems;
    document.getElementById('warning-indicator').textContent = totalWarnings;
    document.getElementById('ok-indicator').textContent = totalOk;
    document.getElementById('evaluated-indicator').textContent = `${totalEvaluated}/${COMPONENTS_DB.length}`;
    
    // Contadores por categoría
    document.getElementById('critical-count').textContent = AppState.results.critical.problems;
    document.getElementById('important-count').textContent = AppState.results.important.problems;
    document.getElementById('secondary-count').textContent = AppState.results.secondary.problems;
    
    // Actualizar estado del resumen
    const summaryStatus = document.getElementById('summary-status');
    if (totalEvaluated === 0) {
        summaryStatus.innerHTML = `
            <div class="status-badge incomplete">
                <i class="fas fa-clock"></i> Evaluación Incompleta
            </div>
        `;
    } else if (totalProblems === 0 && totalWarnings === 0) {
        summaryStatus.innerHTML = `
            <div class="status-badge approved">
                <i class="fas fa-check-circle"></i> Sin Problemas Detectados
            </div>
        `;
    } else {
        summaryStatus.innerHTML = `
            <div class="status-badge conditional">
                <i class="fas fa-exclamation-triangle"></i> ${totalProblems} Problemas, ${totalWarnings} Advertencias
            </div>
        `;
    }
    
    // Actualizar detalles por categoría
    updateCategoryDetails();
}

// Actualizar detalles por categoría
function updateCategoryDetails() {
    const container = document.getElementById('category-details');
    
    let html = '';
    
    // Críticos
    if (AppState.results.critical.items.length > 0) {
        html += `
            <div class="detail-card">
                <div class="detail-card-header">
                    <h4><i class="fas fa-times-circle"></i> Componentes Críticos</h4>
                    <span class="detail-count">${AppState.results.critical.items.length} items</span>
                </div>
                <div class="detail-card-items">
                    ${AppState.results.critical.items.map(item => `
                        <div class="detail-item">
                            <span class="detail-item-name">${item.name}</span>
                            <span class="detail-item-status ${item.status}">
                                ${item.status === 'ok' ? 'OK' : item.status === 'warning' ? 'Atención' : 'Problema'}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Importantes
    if (AppState.results.important.items.length > 0) {
        html += `
            <div class="detail-card">
                <div class="detail-card-header">
                    <h4><i class="fas fa-exclamation-circle"></i> Componentes Importantes</h4>
                    <span class="detail-count">${AppState.results.important.items.length} items</span>
                </div>
                <div class="detail-card-items">
                    ${AppState.results.important.items.map(item => `
                        <div class="detail-item">
                            <span class="detail-item-name">${item.name}</span>
                            <span class="detail-item-status ${item.status}">
                                ${item.status === 'ok' ? 'OK' : item.status === 'warning' ? 'Atención' : 'Problema'}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Secundarios
    if (AppState.results.secondary.items.length > 0) {
        html += `
            <div class="detail-card">
                <div class="detail-card-header">
                    <h4><i class="fas fa-check-circle"></i> Componentes Secundarios</h4>
                    <span class="detail-count">${AppState.results.secondary.items.length} items</span>
                </div>
                <div class="detail-card-items">
                    ${AppState.results.secondary.items.map(item => `
                        <div class="detail-item">
                            <span class="detail-item-name">${item.name}</span>
                            <span class="detail-item-status ${item.status}">
                                ${item.status === 'ok' ? 'OK' : item.status === 'warning' ? 'Atención' : 'Problema'}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html || '<p class="placeholder">No hay componentes evaluados.</p>';
}

// Actualizar recomendación
function updateRecommendation() {
    const totalEvaluated = Object.values(AppState.evaluation).filter(e => e.evaluated).length;
    
    if (totalEvaluated === 0) {
        AppState.recommendation.system = null;
        AppState.recommendation.explanation = "Complete la evaluación para obtener una recomendación.";
        updateRecommendationUI();
        return;
    }
    
    // Reglas profesionales
    let recommendation = null;
    let explanation = "";
    
    // 1. Problemas en componentes críticos o legales
    if (AppState.results.critical.problems > 0 || AppState.results.legal.problems > 0) {
        recommendation = "not-recommended";
        
        let problems = [];
        if (AppState.results.critical.problems > 0) problems.push(`${AppState.results.critical.problems} crítico(s)`);
        if (AppState.results.legal.problems > 0) problems.push(`${AppState.results.legal.problems} legal(es)`);
        
        explanation = `NO RECOMENDADO - Se detectaron ${problems.join(' y ')}. `;
        explanation += "Estos problemas comprometen la seguridad, funcionamiento básico o legalidad del vehículo.";
    }
    
    // 2. Múltiples problemas importantes
    else if (AppState.results.important.problems >= 2) {
        recommendation = "not-recommended";
        explanation = `NO RECOMENDADO - Se detectaron ${AppState.results.important.problems} problemas en componentes importantes. `;
        explanation += "Múltiples fallas de seguridad o confiabilidad representan un riesgo significativo.";
    }
    
    // 3. Un problema importante
    else if (AppState.results.important.problems === 1) {
        recommendation = "conditional";
        explanation = "CONDICIONAL - Se detectó 1 problema en componente importante. ";
        explanation += "Requiere reparación antes de la compra o reducción significativa del precio.";
    }
    
    // 4. Solo problemas secundarios
    else if (AppState.results.secondary.problems > 0 && 
             AppState.results.critical.problems === 0 && 
             AppState.results.important.problems === 0) {
        recommendation = "approved";
        explanation = "APROBADO - Los problemas detectados son solo estéticos o de mantenimiento preventivo. ";
        explanation += "No afectan la seguridad o funcionamiento básico del vehículo.";
    }
    
    // 5. Solo advertencias
    else if (Object.values(AppState.results).every(cat => cat.problems === 0) && 
             (AppState.results.critical.warnings > 0 || 
              AppState.results.important.warnings > 0 || 
              AppState.results.secondary.warnings > 0)) {
        recommendation = "conditional";
        explanation = "CONDICIONAL - Se detectaron advertencias que requieren mantenimiento preventivo. ";
        explanation += "Recomendado ajustar el precio según los trabajos necesarios.";
    }
    
    // 6. Todo OK
    else if (Object.values(AppState.results).every(cat => cat.problems === 0 && cat.warnings === 0) && 
             totalEvaluated === COMPONENTS_DB.length) {
        recommendation = "approved";
        explanation = "APROBADO - El vehículo se encuentra en excelente estado general. ";
        explanation += "Todos los componentes evaluados funcionan correctamente.";
    }
    
    // Guardar recomendación del sistema
    AppState.recommendation.system = recommendation;
    
    // Si no hay ajuste del inspector, usar recomendación del sistema
    if (!AppState.recommendation.adjusted) {
        AppState.recommendation.inspector = recommendation;
        AppState.recommendation.explanation = explanation;
    }
    
    updateRecommendationUI();
}

// Actualizar UI de recomendación
function updateRecommendationUI() {
    const recommendation = AppState.recommendation.inspector;
    
    // Resetear luces
    document.querySelectorAll('.result-light').forEach(light => {
        light.classList.remove('active');
    });
    
    // Activar luz correspondiente
    if (recommendation) {
        const lightElement = document.getElementById(`result-${recommendation}`);
        if (lightElement) {
            lightElement.classList.add('active');
        }
    }
    
    // Actualizar explicación
    const explanationElement = document.getElementById('result-explanation');
    if (AppState.recommendation.adjusted) {
        explanationElement.innerHTML = `
            <div class="explanation-adjusted">
                <div class="adjusted-header">
                    <i class="fas fa-user-edit"></i>
                    <strong>Evaluación Ajustada por el Inspector</strong>
                </div>
                <p>${AppState.recommendation.explanation}</p>
                <div class="adjustment-note">
                    <strong>Motivo del ajuste:</strong>
                    <p>${AppState.recommendation.adjustmentReason}</p>
                </div>
                <div class="system-note">
                    <small><i class="fas fa-robot"></i> Recomendación original del sistema: ${getRecommendationText(AppState.recommendation.system)}</small>
                </div>
            </div>
        `;
    } else {
        explanationElement.innerHTML = `
            <div class="explanation-system">
                <div class="system-header">
                    <i class="fas fa-clipboard-check"></i>
                    <strong>Evaluación del Sistema</strong>
                </div>
                <p>${AppState.recommendation.explanation || 'Complete la evaluación para ver el análisis.'}</p>
            </div>
        `;
    }
}

// Inicializar eventos
function initializeEvents() {
    // Formulario del vehículo
    document.getElementById('fecha').addEventListener('change', function() {
        AppState.vehicle.fecha = formatDate(new Date(this.value));
        updateReportPreview();
    });
    
    document.getElementById('vehiculo').addEventListener('input', function() {
        AppState.vehicle.vehiculo = this.value;
        updateReportPreview();
    });
    
    document.getElementById('dominio').addEventListener('input', function() {
        AppState.vehicle.dominio = this.value.toUpperCase();
        this.value = AppState.vehicle.dominio;
        updateReportPreview();
    });
    
    document.getElementById('kilometraje').addEventListener('input', function() {
        AppState.vehicle.kilometraje = formatNumber(this.value);
        updateReportPreview();
    });
    
    document.getElementById('observacion').addEventListener('input', function() {
        AppState.vehicle.observacion = this.value;
        document.getElementById('char-count').textContent = this.value.length;
        updateReportPreview();
    });
    
    // Botón de expandir todo
    document.getElementById('checklist-expand').addEventListener('click', function() {
        document.querySelectorAll('.checklist-item-details').forEach(details => {
            details.classList.add('show');
        });
        this.innerHTML = '<i class="fas fa-compress"></i> Contraer Todo';
        this.dataset.expanded = 'true';
        
        // Cambiar a contraer
        this.removeEventListener('click', arguments.callee);
        this.addEventListener('click', function() {
            document.querySelectorAll('.checklist-item-details').forEach(details => {
                details.classList.remove('show');
            });
            this.innerHTML = '<i class="fas fa-expand"></i> Expandir Todo';
            this.dataset.expanded = 'false';
            
            // Volver a expandir
            this.removeEventListener('click', arguments.callee);
            this.addEventListener('click', arguments.callee);
        });
    });
    
    // Botón de reiniciar
    document.getElementById('checklist-reset').addEventListener('click', function() {
        if (confirm('¿Está seguro de reiniciar toda la evaluación? Se perderán todas las selecciones.')) {
            initializeComponents();
            updateStatistics();
            updateRecommendation();
            updateReportPreview();
        }
    });
    
    // Ajuste de recomendación
    document.getElementById('toggle-recommendation').addEventListener('click', function() {
        const adjustmentPanel = document.getElementById('manual-adjustment');
        adjustmentPanel.style.display = adjustmentPanel.style.display === 'none' ? 'block' : 'none';
    });
    
    document.getElementById('confirm-adjustment').addEventListener('click', function() {
        const selectedValue = document.getElementById('manual-recommendation').value;
        const reason = document.getElementById('adjustment-reason').value;
        
        if (!selectedValue) {
            alert('Por favor, seleccione una recomendación.');
            return;
        }
        
        if (!reason.trim()) {
            alert('Por favor, ingrese el motivo del ajuste.');
            return;
        }
        
        AppState.recommendation.adjusted = true;
        AppState.recommendation.inspector = selectedValue;
        AppState.recommendation.adjustmentReason = reason;
        
        // Generar explicación para la recomendación ajustada
        const recommendationText = getRecommendationText(selectedValue);
        AppState.recommendation.explanation = `${recommendationText} - Ajuste realizado por criterio profesional del inspector.`;
        
        // Ocultar panel de ajuste
        document.getElementById('manual-adjustment').style.display = 'none';
        
        // Actualizar UI
        updateRecommendationUI();
        updateReportPreview();
    });
    
    document.getElementById('cancel-adjustment').addEventListener('click', function() {
        document.getElementById('manual-adjustment').style.display = 'none';
    });
    
    // Generar PDF
    document.getElementById('generate-pdf').addEventListener('click', generatePDF);
    
    // Mostrar/ocultar vista previa
    document.getElementById('toggle-preview').addEventListener('click', function() {
        const preview = document.getElementById('report-preview');
        preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
        this.innerHTML = preview.style.display === 'none' ? 
            '<i class="fas fa-eye"></i> Mostrar' : 
            '<i class="fas fa-eye-slash"></i> Ocultar';
    });
    
    // Guía de evaluación
    document.getElementById('evaluation-guide').addEventListener('click', function() {
        document.getElementById('guide-modal').style.display = 'flex';
    });
    
    document.getElementById('close-guide').addEventListener('click', function() {
        document.getElementById('guide-modal').style.display = 'none';
    });
}

// Inicializar guía de evaluación
function initializeEvaluationGuide() {
    const modalBody = document.querySelector('#guide-modal .modal-body');
    
    modalBody.innerHTML = `
        <div class="guide-content">
            <h4>Guía de Evaluación Profesional</h4>
            
            <div class="guide-section">
                <h5><i class="fas fa-exclamation-triangle"></i> Componentes Críticos</h5>
                <p>Estos componentes son esenciales para el funcionamiento básico y seguridad del vehículo. Cualquier problema aquí es motivo de rechazo o requiere reparación completa antes de la compra.</p>
                <ul>
                    <li><strong>Motor:</strong> Verificar ruidos, vibraciones, pérdidas, humo y respuesta</li>
                    <li><strong>Transmisión:</strong> Probar todos los cambios, embrague y respuesta</li>
                    <li><strong>Documentación:</strong> Completar antes de cualquier evaluación técnica</li>
                </ul>
            </div>
            
            <div class="guide-section">
                <h5><i class="fas fa-exclamation-circle"></i> Componentes Importantes</h5>
                <p>Afectan directamente la seguridad y confiabilidad. Problemas aquí deben ser considerados en el precio o reparados.</p>
                <ul>
                    <li><strong>Frenos:</strong> Eficiencia, uniformidad y estado de componentes</li>
                    <li><strong>Suspensión/Dirección:</strong> Estabilidad, ruidos y holguras</li>
                    <li><strong>Neumáticos:</strong> Dibujo, daños y alineación</li>
                </ul>
            </div>
            
            <div class="guide-section">
                <h5><i class="fas fa-check-circle"></i> Componentes Secundarios</h5>
                <p>Afectan el confort, estética y valor de reventa. Usualmente no son motivo de rechazo pero afectan el precio.</p>
                <ul>
                    <li><strong>Carrocería:</strong> Golpes, óxido y calidad de reparaciones</li>
                    <li><strong>Interiores:</strong> Desgaste, roturas y funcionamiento</li>
                    <li><strong>Sistemas eléctricos y climatización:</strong> Funcionamiento completo</li>
                </ul>
            </div>
            
            <div class="guide-tips">
                <h5><i class="fas fa-lightbulb"></i> Consejos Profesionales</h5>
                <ul>
                    <li>Evalúe en orden de importancia (críticos primero)</li>
                    <li>Documente cada hallazgo con fotos cuando sea posible</li>
                    <li>Considere el contexto (vehículo antiguo vs nuevo)</li>
                    <li>Sea conservador en evaluaciones dudosas</li>
                    <li>Explique claramente sus hallazgos al cliente</li>
                </ul>
            </div>
        </div>
    `;
}

// Actualizar vista previa del informe
function updateReportPreview() {
    // Datos básicos
    document.getElementById('report-date').textContent = AppState.vehicle.fecha || '-';
    document.getElementById('report-vehicle').textContent = AppState.vehicle.vehiculo || '-';
    document.getElementById('report-plate').textContent = AppState.vehicle.dominio || '-';
    document.getElementById('report-mileage').textContent = AppState.vehicle.kilometraje ? `${AppState.vehicle.kilometraje} km` : '-';
    document.getElementById('report-inspection-date').textContent = AppState.vehicle.fecha || '-';
    
    // Resumen ejecutivo
    const executiveSummary = document.getElementById('executive-summary');
    const totalEvaluated = Object.values(AppState.evaluation).filter(e => e.evaluated).length;
    
    if (totalEvaluated === 0) {
        executiveSummary.innerHTML = `
            <p>La evaluación del vehículo no ha sido completada. Este informe se actualizará automáticamente cuando se completen las verificaciones.</p>
        `;
    } else {
        let problems = [];
        let warnings = [];
        
        Object.entries(AppState.results).forEach(([category, data]) => {
            if (data.problems > 0) problems.push(`${data.problems} ${category}`);
            if (data.warnings > 0) warnings.push(`${data.warnings} ${category}`);
        });
        
        let summaryText = `Se evaluaron ${totalEvaluated} de ${COMPONENTS_DB.length} componentes. `;
        
        if (problems.length > 0) {
            summaryText += `Se detectaron problemas en: ${problems.join(', ')}. `;
        }
        
        if (warnings.length > 0) {
            summaryText += `Se registraron advertencias en: ${warnings.join(', ')}. `;
        }
        
        if (problems.length === 0 && warnings.length === 0) {
            summaryText += "No se detectaron problemas ni advertencias significativas. ";
        }
        
        executiveSummary.innerHTML = `<p>${summaryText}</p>`;
    }
    
    // Resultado de evaluación
    const resultElement = document.getElementById('evaluation-result-report');
    const recommendation = AppState.recommendation.inspector;
    
    if (!recommendation) {
        resultElement.innerHTML = `
            <div class="result-status incomplete">
                <i class="fas fa-clock"></i> EVALUACIÓN INCOMPLETA
            </div>
        `;
    } else {
        let statusText = '';
        let statusClass = '';
        
        switch(recommendation) {
            case 'approved':
                statusText = 'APROBADO PARA COMPRA';
                statusClass = 'approved';
                break;
            case 'conditional':
                statusText = 'CONDICIONAL - SUJETO A REPARACIONES';
                statusClass = 'conditional';
                break;
            case 'not-recommended':
                statusText = 'NO RECOMENDADO PARA COMPRA';
                statusClass = 'not-recommended';
                break;
        }
        
        resultElement.innerHTML = `
            <div class="result-status ${statusClass}">
                <i class="fas ${recommendation === 'approved' ? 'fa-check-circle' : recommendation === 'conditional' ? 'fa-exclamation-triangle' : 'fa-times-circle'}"></i>
                ${statusText}
            </div>
            <div class="result-details">
                <p>${AppState.recommendation.explanation}</p>
                ${AppState.recommendation.adjusted ? 
                    `<p class="adjustment-note"><strong>Nota del inspector:</strong> ${AppState.recommendation.adjustmentReason}</p>` : 
                    ''
                }
            </div>
        `;
    }
    
    // Detalle de componentes
    const componentsDetail = document.getElementById('components-detail');
    const evaluatedComponents = Object.entries(AppState.evaluation).filter(([_, data]) => data.evaluated);
    
    if (evaluatedComponents.length === 0) {
        componentsDetail.innerHTML = '<p class="placeholder">No hay componentes evaluados para mostrar.</p>';
    } else {
        let componentsHTML = '';
        
        evaluatedComponents.forEach(([id, data]) => {
            const component = COMPONENTS_DB.find(c => c.id == id);
            let statusText = '';
            let statusClass = '';
            
            switch(data.status) {
                case 'ok':
                    statusText = '✓ OK';
                    statusClass = 'ok';
                    break;
                case 'warning':
                    statusText = '⚠ ATENCIÓN';
                    statusClass = 'warning';
                    break;
                case 'problem':
                    statusText = '✗ PROBLEMA';
                    statusClass = 'problem';
                    break;
            }
            
            componentsHTML += `
                <div class="component-item">
                    <span class="component-name">${component.name}</span>
                    <span class="component-status ${statusClass}">${statusText}</span>
                </div>
            `;
        });
        
        componentsDetail.innerHTML = componentsHTML;
    }
    
    // Observaciones
    const observationsElement = document.getElementById('report-observations');
    
    if (AppState.vehicle.observacion) {
        observationsElement.innerHTML = `
            <p>${AppState.vehicle.observacion}</p>
            ${AppState.recommendation.adjusted ? 
                `<div class="inspector-note">
                    <strong>Ajuste realizado por el inspector:</strong>
                    <p>${AppState.recommendation.adjustmentReason}</p>
                </div>` : 
                ''
            }
            <div class="general-recommendations">
                <p><strong>Recomendaciones generales:</strong></p>
                <ul>
                    <li>Realizar una prueba de manejo completa antes de la compra</li>
                    <li>Verificar el historial de mantenimiento del vehículo</li>
                    <li>Consultar con un mecánico especializado para confirmar hallazgos</li>
                    <li>Considerar el costo de reparaciones identificadas en la negociación</li>
                </ul>
            </div>
        `;
    } else {
        observationsElement.innerHTML = `
            <p>No se registraron observaciones específicas del inspector.</p>
            <div class="general-recommendations">
                <p><strong>Recomendaciones estándar:</strong></p>
                <ul>
                    <li>Realizar una prueba de manejo completa</li>
                    <li>Verificar historial de mantenimiento</li>
                    <li>Consultar con mecánico especializado</li>
                </ul>
            </div>
        `;
    }
}

// Generar PDF profesional
async function generatePDF() {
    const totalEvaluated = Object.values(AppState.evaluation).filter(e => e.evaluated).length;
    
    if (totalEvaluated === 0) {
        alert('Complete la evaluación antes de generar el PDF.');
        return;
    }
    
    if (!AppState.vehicle.vehiculo || !AppState.vehicle.dominio) {
        alert('Complete los datos básicos del vehículo antes de generar el PDF.');
        return;
    }
    
    try {
        // Capturar el contenido del informe
        const reportContent = document.getElementById('report-preview');
        
        // Usar html2canvas para capturar como imagen
        const canvas = await html2canvas(reportContent, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });
        
        // Crear PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 20;
        
        // Agregar imagen al PDF
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pageWidth - 2 * margin;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
        
        // Agregar número de página
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);
            pdf.setFontSize(8);
            pdf.setTextColor(100, 100, 100);
            pdf.text(
                `Página ${i} de ${pageCount}`,
                pageWidth - margin - 30,
                pdf.internal.pageSize.getHeight() - 10
            );
            
            // Agregar marca de agua "Copia de Evaluación"
            pdf.setFontSize(40);
            pdf.setTextColor(240, 240, 240);
            pdf.setGState(new pdf.GState({opacity: 0.1}));
            pdf.text(
                'COPIA DE EVALUACIÓN',
                pageWidth / 2,
                pdf.internal.pageSize.getHeight() / 2,
                { align: 'center', angle: 45 }
            );
            pdf.setGState(new pdf.GState({opacity: 1}));
        }
        
        // Guardar PDF
        const fileName = `Informe_${AppState.vehicle.dominio}_${formatDateForFile(new Date())}.pdf`;
        pdf.save(fileName);
        
        // Mostrar confirmación
        alert(`✅ Informe generado correctamente:\n${fileName}`);
        
    } catch (error) {
        console.error('Error al generar PDF:', error);
        alert('Error al generar el PDF. Por favor, intente nuevamente.');
    }
}

// Funciones utilitarias
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function formatDateForFile(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}_${hours}${minutes}`;
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getCategoryLabel(category) {
    const labels = {
        critical: 'CRÍTICO',
        important: 'IMPORTANTE',
        secondary: 'SECUNDARIO',
        legal: 'LEGAL'
    };
    return labels[category] || category;
}

function getRecommendationText(recommendation) {
    switch(recommendation) {
        case 'approved': return 'APROBADO';
        case 'conditional': return 'CONDICIONAL';
        case 'not-recommended': return 'NO RECOMENDADO';
        default: return 'PENDIENTE';
    }
}

// Inicialización completa
console.log(`
╔══════════════════════════════════════════════════════════╗
║             AKINA CHECK - SISTEMA PROFESIONAL            ║
║                  Versión para Inspectores                ║
╚══════════════════════════════════════════════════════════╝
Sistema inicializado correctamente.
• Componentes cargados: ${COMPONENTS_DB.length}
• Versión: ${SYSTEM_CONFIG.version}
• Desarrollado por: ${SYSTEM_CONFIG.developer}
`);
