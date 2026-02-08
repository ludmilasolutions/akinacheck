// 🧠 SISTEMA INTELIGENTE POR CAPAS - AKINA CHECK

// ==================== CAPA 1: CLASIFICACIÓN DE ÍTEMS ====================
const checklistData = [
    // CATEGORÍA CRÍTICA (Alto peso)
    {
        id: 1,
        name: "Motor",
        category: "critical",
        weight: "alto",
        phrases: {
            ok: "Funciona correctamente, sin ruidos anormales ni pérdidas de fluidos.",
            warning: "Presenta leves ruidos o vibraciones, requiere mantenimiento preventivo.",
            problem: "Presenta fallas graves que comprometen el funcionamiento. No comprar sin reparación."
        },
        impact: "Alto - Compromete funcionamiento básico del vehículo"
    },
    {
        id: 2,
        name: "Transmisión",
        category: "critical",
        weight: "alto",
        phrases: {
            ok: "Cambios suaves y precisos en toda la gama de revoluciones.",
            warning: "Algunos cambios pueden ser bruscos, requiere revisión técnica.",
            problem: "Problemas graves de transmisión que requieren reparación costosa."
        },
        impact: "Alto - Reparación muy costosa"
    },
    
    // CATEGORÍA LEGAL (Alto peso)
    {
        id: 3,
        name: "Documentación",
        category: "legal",
        weight: "alto",
        phrases: {
            ok: "Toda la documentación está en orden y actualizada.",
            warning: "Falta algún documento menor o requiere actualizaciones simples.",
            problem: "Documentación incompleta o irregularidades graves. Imposible transferir."
        },
        impact: "Alto - Puede impedir la compra legal"
    },
    {
        id: 4,
        name: "Verificación policial",
        category: "legal",
        weight: "alto",
        phrases: {
            ok: "Verificación policial al día, sin observaciones.",
            warning: "Verificación vencida, requiere renovación.",
            problem: "Observaciones graves en verificación policial."
        },
        impact: "Alto - Requisito legal obligatorio"
    },
    
    // CATEGORÍA SEGURIDAD (Peso medio)
    {
        id: 5,
        name: "Frenos",
        category: "security",
        weight: "medio",
        phrases: {
            ok: "Sistema de frenos eficiente y uniforme en todas las ruedas.",
            warning: "Frenado ligeramente desigual o ruidos leves al frenar.",
            problem: "Frenado deficiente o pérdida de líquido de frenos. Peligro inminente."
        },
        impact: "Medio - Seguridad activa comprometida"
    },
    {
        id: 6,
        name: "Suspensión",
        category: "security",
        weight: "medio",
        phrases: {
            ok: "Suspensión en buen estado, sin ruidos ni pérdidas.",
            warning: "Leves ruidos o desgaste en componentes de suspensión.",
            problem: "Amortiguadores dañados o inestabilidad en curva."
        },
        impact: "Medio - Confort y seguridad comprometidos"
    },
    {
        id: 7,
        name: "Dirección",
        category: "security",
        weight: "medio",
        phrases: {
            ok: "Dirección precisa, sin holguras ni ruidos anormales.",
            warning: "Ligera holgura en la dirección que requiere ajuste.",
            problem: "Holgura excesiva o dirección pesada. Peligroso para conducir."
        },
        impact: "Medio - Control del vehículo comprometido"
    },
    {
        id: 8,
        name: "Neumáticos",
        category: "security",
        weight: "medio",
        phrases: {
            ok: "Neumáticos con buen dibujo, presión correcta y sin daños.",
            warning: "Desgaste irregular que requiere rotación o alineación.",
            problem: "Neumáticos lisos o dañados. Peligro de accidente."
        },
        impact: "Medio - Seguridad activa crítica"
    },
    
    // CATEGORÍA MECÁNICA (Peso medio)
    {
        id: 9,
        name: "Sistema eléctrico",
        category: "mechanical",
        weight: "medio",
        phrases: {
            ok: "Todos los componentes eléctricos funcionan correctamente.",
            warning: "Algunos accesorios eléctricos presentan fallas intermitentes.",
            problem: "Fallas eléctricas importantes que afectan funcionamiento."
        },
        impact: "Medio - Puede dejar varado el vehículo"
    },
    {
        id: 10,
        name: "Aire acondicionado",
        category: "mechanical",
        weight: "medio",
        phrases: {
            ok: "Funciona correctamente en frío y calor.",
            warning: "Enfría/calienta lentamente o con capacidad reducida.",
            problem: "No funciona o tiene fugas importantes."
        },
        impact: "Medio - Confort y valor de reventa"
    },
    {
        id: 11,
        name: "Escape",
        category: "mechanical",
        weight: "medio",
        phrases: {
            ok: "Sistema de escape íntegro, sin ruidos ni fugas.",
            warning: "Leves ruidos o pequeñas fugas en el escape.",
            problem: "Fugas importantes o catalizador defectuoso."
        },
        impact: "Medio - Contaminación y rendimiento"
    },
    
    // CATEGORÍA ESTÉTICA (Peso bajo)
    {
        id: 12,
        name: "Carrocería",
        category: "aesthetic",
        weight: "bajo",
        phrases: {
            ok: "Sin abolladuras, oxidación ni daños importantes.",
            warning: "Algunas marcas menores, rayones o pequeños puntos de óxido.",
            problem: "Abolladuras importantes u oxidación severa."
        },
        impact: "Bajo - Valor estético y de reventa"
    },
    {
        id: 13,
        name: "Interiores",
        category: "aesthetic",
        weight: "bajo",
        phrases: {
            ok: "Interiores en buen estado, sin roturas ni desgastes.",
            warning: "Desgaste moderado en asientos o paneles.",
            problem: "Roturas importantes o tapizados dañados."
        },
        impact: "Bajo - Confort y presentación"
    },
    {
        id: 14,
        name: "Luces",
        category: "aesthetic",
        weight: "bajo",
        phrases: {
            ok: "Todas las luces funcionan correctamente.",
            warning: "Alguna luz no funciona o tiene opacidad.",
            problem: "Varias luces no funcionan o ópticas rotas."
        },
        impact: "Bajo - Estética y seguridad básica"
    },
    {
        id: 15,
        name: "Vidrios y espejos",
        category: "aesthetic",
        weight: "bajo",
        phrases: {
            ok: "Todos los vidrios y espejos en buen estado.",
            warning: "Pequeñas fisuras o ralladuras menores.",
            problem: "Vidrios rotos o espejos dañados."
        },
        impact: "Bajo - Estética y funcionalidad básica"
    }
];

// ==================== CAPA 2: REGLAS PROFESIONALES ====================
const professionalRules = [
    {
        id: "rule-1",
        name: "Regla de Críticos",
        condition: "Problemas en categorías críticas (Motor, Transmisión)",
        action: "🔴 NO COMPRAR",
        description: "Problemas en componentes críticos comprometen el funcionamiento básico del vehículo. Reparaciones muy costosas.",
        priority: 1
    },
    {
        id: "rule-2",
        name: "Regla Legal",
        condition: "Problemas en categoría legal (Documentación)",
        action: "🔴 NO COMPRAR",
        description: "Sin documentación en orden, no se puede transferir legalmente el vehículo.",
        priority: 2
    },
    {
        id: "rule-3",
        name: "Regla de Seguridad Múltiple",
        condition: "2+ problemas en categoría seguridad",
        action: "🔴 NO COMPRAR",
        description: "Múltiples problemas de seguridad representan peligro inminente.",
        priority: 3
    },
    {
        id: "rule-4",
        name: "Regla de Seguridad Simple",
        condition: "1 problema en categoría seguridad",
        action: "🟡 RENEGOCIAR",
        description: "Un problema de seguridad requiere reparación inmediata. Restar costo de la oferta.",
        priority: 4
    },
    {
        id: "rule-5",
        name: "Regla Mecánica",
        condition: "Problemas en categoría mecánica",
        action: "🟡 RENEGOCIAR",
        description: "Problemas mecánicos afectan confiabilidad. Considerar en el precio.",
        priority: 5
    },
    {
        id: "rule-6",
        name: "Regla Estética Pura",
        condition: "Solo problemas estéticos (sin otros problemas)",
        action: "🟢 COMPRAR",
        description: "Problemas solo estéticos no afectan funcionamiento. Buen punto de negociación.",
        priority: 6
    },
    {
        id: "rule-7",
        name: "Regla de Advertencias",
        condition: "Solo advertencias en cualquier categoría",
        action: "🟡 RENEGOCIAR",
        description: "Advertencias indican mantenimiento necesario. Pida descuento por mantenimientos pendientes.",
        priority: 7
    },
    {
        id: "rule-8",
        name: "Regla Perfecta",
        condition: "Todo OK",
        action: "🟢 COMPRAR",
        description: "Vehículo en excelente estado. Verificar que el precio sea justo de mercado.",
        priority: 8
    }
];

// ==================== ESTADO DE LA APLICACIÓN ====================
const appState = {
    // CAPA 1: Clasificación
    checklist: {},
    
    // CAPA 2: Estado + Peso
    analysis: {
        critical: { problems: 0, warnings: 0 },
        legal: { problems: 0, warnings: 0 },
        security: { problems: 0, warnings: 0 },
        mechanical: { problems: 0, warnings: 0 },
        aesthetic: { problems: 0, warnings: 0 }
    },
    
    // CAPA 3: Reglas aplicadas
    appliedRules: [],
    
    // CAPA 4: Recomendación del sistema
    systemRecommendation: null,
    systemExplanation: "",
    
    // CAPA 5: Decisión del inspector
    inspectorDecision: null,
    inspectorOverride: false,
    overrideReason: "",
    
    // Datos generales
    formData: {
        fecha: "",
        vehiculo: "",
        dominio: "",
        kilometraje: "",
        observacion: ""
    }
};

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', function() {
    // Configurar fecha actual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').value = today;
    appState.formData.fecha = formatDate(today);
    
    // Generar ID único
    document.getElementById('report-id').textContent = 'AK-' + 
        Date.now().toString().substr(-6);
    
    // Inicializar checklist
    initializeIntelligentChecklist();
    
    // Inicializar eventos
    initializeFormEvents();
    initializeTrafficLightEvents();
    initializeActionButtons();
    
    // Inicializar modal de reglas
    initializeRulesModal();
    
    // Actualizar vista
    updateAllDisplays();
});

// ==================== CAPA 1: INICIALIZAR CHECKLIST INTELIGENTE ====================
function initializeIntelligentChecklist() {
    const container = document.getElementById('checklist-container');
    const tabsContainer = document.getElementById('category-tabs');
    
    // Limpiar contenedores
    container.innerHTML = '';
    tabsContainer.innerHTML = '';
    
    // Crear tabs por categoría
    const categories = ['all', 'critical', 'legal', 'security', 'mechanical', 'aesthetic'];
    const categoryNames = {
        all: 'Todos',
        critical: 'Críticos',
        legal: 'Legales',
        security: 'Seguridad',
        mechanical: 'Mecánicos',
        aesthetic: 'Estéticos'
    };
    
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'category-tab';
        tab.textContent = categoryNames[category];
        tab.dataset.category = category;
        if (category === 'all') tab.classList.add('active');
        
        tab.addEventListener('click', function() {
            // Actualizar tabs activos
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar items
            filterChecklistItems(category);
        });
        
        tabsContainer.appendChild(tab);
    });
    
    // Crear items del checklist
    checklistData.forEach(item => {
        // Inicializar estado
        appState.checklist[item.id] = {
            status: null,
            category: item.category,
            weight: item.weight,
            impact: item.impact
        };
        
        // Crear elemento
        const itemElement = document.createElement('div');
        itemElement.className = 'checklist-item';
        itemElement.dataset.category = item.category;
        itemElement.dataset.id = item.id;
        
        itemElement.innerHTML = `
            <div class="item-header">
                <div class="item-title">
                    ${item.name}
                    <span class="item-category ${item.category}">${getCategoryLabel(item.category)}</span>
                </div>
                <div class="item-weight">Peso: ${item.weight}</div>
            </div>
            
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
            
            <div class="status-phrase" id="phrase-${item.id}"></div>
            
            <div class="item-impact">
                <small>Impacto: ${item.impact}</small>
            </div>
        `;
        
        container.appendChild(itemElement);
        
        // Agregar eventos a los botones
        const buttons = itemElement.querySelectorAll('.status-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const status = this.dataset.status;
                updateChecklistItem(id, status);
            });
        });
    });
}

function getCategoryLabel(category) {
    const labels = {
        critical: 'Crítico',
        legal: 'Legal',
        security: 'Seguridad',
        mechanical: 'Mecánico',
        aesthetic: 'Estético'
    };
    return labels[category] || category;
}

function filterChecklistItems(category) {
    const items = document.querySelectorAll('.checklist-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ==================== CAPA 2: ACTUALIZAR ÍTEM DEL CHECKLIST ====================
function updateChecklistItem(id, status) {
    const itemData = checklistData.find(item => item.id === id);
    
    // Actualizar estado
    appState.checklist[id].status = status;
    
    // Actualizar interfaz
    const itemElement = document.querySelector(`.checklist-item[data-id="${id}"]`);
    
    // Resetear botones
    const buttons = itemElement.querySelectorAll('.status-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.status === status) {
            button.classList.add('active');
        }
    });
    
    // Mostrar frase
    const phraseElement = document.getElementById(`phrase-${id}`);
    phraseElement.textContent = itemData.phrases[status];
    phraseElement.classList.add('show');
    
    // Actualizar análisis por capas
    updateLayerAnalysis();
    
    // Aplicar reglas profesionales
    applyProfessionalRules();
    
    // Actualizar todas las visualizaciones
    updateAllDisplays();
}

// ==================== CAPA 2: ANÁLISIS POR CAPAS ====================
function updateLayerAnalysis() {
    // Resetear análisis
    Object.keys(appState.analysis).forEach(category => {
        appState.analysis[category] = { problems: 0, warnings: 0 };
    });
    
    // Contar problemas y advertencias por categoría
    Object.entries(appState.checklist).forEach(([id, data]) => {
        if (data.status === 'problem') {
            appState.analysis[data.category].problems++;
        } else if (data.status === 'warning') {
            appState.analysis[data.category].warnings++;
        }
    });
    
    // Actualizar estadísticas
    const totalEvaluated = Object.values(appState.checklist).filter(item => item.status !== null).length;
    document.getElementById('checklist-stats').innerHTML = `
        <span class="stat-item">${totalEvaluated}/15 evaluados</span>
    `;
}

// ==================== CAPA 3: APLICAR REGLAS PROFESIONALES ====================
function applyProfessionalRules() {
    appState.appliedRules = [];
    
    // Obtener conteos actualizados
    const criticalProblems = appState.analysis.critical.problems;
    const legalProblems = appState.analysis.legal.problems;
    const securityProblems = appState.analysis.security.problems;
    const mechanicalProblems = appState.analysis.mechanical.problems;
    const aestheticProblems = appState.analysis.aesthetic.problems;
    
    // Contar totales
    const totalProblems = criticalProblems + legalProblems + securityProblems + mechanicalProblems + aestheticProblems;
    const totalWarnings = Object.values(appState.analysis).reduce((sum, cat) => sum + cat.warnings, 0);
    
    // Aplicar reglas en orden de prioridad
    let recommendation = null;
    let explanation = "";
    
    // REGLA 1: Problemas en críticos
    if (criticalProblems > 0) {
        recommendation = "red";
        explanation = `❌ NO COMPRAR - Se detectaron ${criticalProblems} problema(s) en componentes críticos (Motor/Transmisión). Estos comprometen el funcionamiento básico del vehículo.`;
        appState.appliedRules.push(professionalRules[0]);
    }
    
    // REGLA 2: Problemas legales
    else if (legalProblems > 0) {
        recommendation = "red";
        explanation = `❌ NO COMPRAR - Se detectaron ${legalProblems} problema(s) en documentación legal. Sin documentación en orden, no se puede transferir legalmente el vehículo.`;
        appState.appliedRules.push(professionalRules[1]);
    }
    
    // REGLA 3: Múltiples problemas de seguridad
    else if (securityProblems >= 2) {
        recommendation = "red";
        explanation = `❌ NO COMPRAR - Se detectaron ${securityProblems} problemas en componentes de seguridad. Múltiples fallas de seguridad representan peligro inminente.`;
        appState.appliedRules.push(professionalRules[2]);
    }
    
    // REGLA 4: Un problema de seguridad
    else if (securityProblems === 1) {
        recommendation = "yellow";
        explanation = `🟡 RENEGOCIAR - Se detectó 1 problema en componentes de seguridad. Requiere reparación inmediata. Reste el costo de reparación del precio ofertado.`;
        appState.appliedRules.push(professionalRules[3]);
    }
    
    // REGLA 5: Problemas mecánicos
    else if (mechanicalProblems > 0) {
        recommendation = "yellow";
        explanation = `🟡 RENEGOCIAR - Se detectaron ${mechanicalProblems} problema(s) mecánicos. Afectan la confiabilidad del vehículo. Considere estos costos en la negociación.`;
        appState.appliedRules.push(professionalRules[4]);
    }
    
    // REGLA 6: Solo problemas estéticos
    else if (aestheticProblems > 0 && totalProblems === aestheticProblems) {
        recommendation = "green";
        explanation = `🟢 COMPRAR - Los ${aestheticProblems} problema(s) detectados son solo estéticos. No afectan el funcionamiento del vehículo. Buen punto para negociar un descuento.`;
        appState.appliedRules.push(professionalRules[5]);
    }
    
    // REGLA 7: Solo advertencias
    else if (totalWarnings > 0 && totalProblems === 0) {
        recommendation = "yellow";
        explanation = `🟡 RENEGOCIAR - Se detectaron ${totalWarnings} advertencia(s). Indican mantenimiento necesario. Pida descuento por los mantenimientos pendientes.`;
        appState.appliedRules.push(professionalRules[6]);
    }
    
    // REGLA 8: Todo OK
    else if (totalProblems === 0 && totalWarnings === 0 && Object.values(appState.checklist).some(item => item.status === 'ok')) {
        recommendation = "green";
        explanation = `🟢 COMPRAR - El vehículo se encuentra en excelente estado. Verifique que el precio sea justo de mercado según valores de referencia.`;
        appState.appliedRules.push(professionalRules[7]);
    }
    
    // Sin evaluación completa
    else {
        recommendation = null;
        explanation = "Complete la evaluación para ver la recomendación del sistema.";
    }
    
    // Guardar recomendación del sistema
    appState.systemRecommendation = recommendation;
    appState.systemExplanation = explanation;
    
    // Si el inspector no ha hecho override, usar la recomendación del sistema
    if (!appState.inspectorOverride) {
        appState.inspectorDecision = recommendation;
    }
}

// ==================== CAPA 4: ACTUALIZAR INTERFAZ ====================
function updateAllDisplays() {
    updateTrafficLightDisplay();
    updateExplanationDisplay();
    updateLayerAnalysisDisplay();
    updateReportPreview();
    updateClassificationSummary();
}

function updateTrafficLightDisplay() {
    // Resetear todas las luces
    document.querySelectorAll('.intelligent-light').forEach(light => {
        light.classList.remove('active');
    });
    
    // Activar luz según decisión actual
    const decision = appState.inspectorDecision;
    if (decision) {
        const lightElement = document.getElementById(`light-${decision}`);
        if (lightElement) {
            lightElement.classList.add('active');
        }
    }
}

function updateExplanationDisplay() {
    const container = document.getElementById('auto-explanation');
    
    if (appState.inspectorOverride) {
        container.innerHTML = `
            <div class="explanation-override">
                <div class="override-header">
                    <span class="override-icon">👨‍🔧</span>
                    <strong>Decisión profesional del inspector</strong>
                </div>
                <p>${appState.systemExplanation}</p>
                <div class="override-reason">
                    <strong>Motivo del ajuste:</strong>
                    <p>${appState.overrideReason || "Criterio profesional del inspector."}</p>
                </div>
                <div class="system-note">
                    <small>Recomendación original del sistema: ${getRecommendationText(appState.systemRecommendation)}</small>
                </div>
            </div>
        `;
    } else if (appState.systemExplanation) {
        container.innerHTML = `
            <div class="explanation-system">
                <div class="system-header">
                    <span class="system-icon">🤖</span>
                    <strong>Análisis automatizado del sistema</strong>
                </div>
                <p>${appState.systemExplanation}</p>
                ${appState.appliedRules.length > 0 ? `
                    <div class="applied-rules">
                        <strong>Regla aplicada:</strong> ${appState.appliedRules[0].name}
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        container.innerHTML = '<p class="placeholder">Complete el checklist para ver el análisis inteligente.</p>';
    }
}

function getRecommendationText(recommendation) {
    switch(recommendation) {
        case 'green': return '🟢 COMPRAR';
        case 'yellow': return '🟡 RENEGOCIAR';
        case 'red': return '🔴 NO COMPRAR';
        default: return 'Sin recomendación';
    }
}

function updateLayerAnalysisDisplay() {
    // Actualizar análisis de capa 1
    const classificationSummary = document.getElementById('classification-summary');
    if (classificationSummary) {
        classificationSummary.innerHTML = `
            <div class="category-summary">
                <div class="summary-item">
                    <span class="summary-label">Críticos:</span>
                    <span class="summary-value">${appState.analysis.critical.problems} problemas, ${appState.analysis.critical.warnings} advertencias</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Legales:</span>
                    <span class="summary-value">${appState.analysis.legal.problems} problemas, ${appState.analysis.legal.warnings} advertencias</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Seguridad:</span>
                    <span class="summary-value">${appState.analysis.security.problems} problemas, ${appState.analysis.security.warnings} advertencias</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Mecánicos:</span>
                    <span class="summary-value">${appState.analysis.mechanical.problems} problemas, ${appState.analysis.mechanical.warnings} advertencias</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Estéticos:</span>
                    <span class="summary-value">${appState.analysis.aesthetic.problems} problemas, ${appState.analysis.aesthetic.warnings} advertencias</span>
                </div>
            </div>
        `;
    }
    
    // Actualizar análisis de capa 2
    const weightAnalysis = document.getElementById('weight-analysis');
    if (weightAnalysis) {
        let analysisText = '';
        
        if (appState.analysis.critical.problems > 0) {
            analysisText += `<p>❌ <strong>Problemas críticos</strong> detectados. Alto impacto en decisión de compra.</p>`;
        }
        if (appState.analysis.legal.problems > 0) {
            analysisText += `<p>❌ <strong>Problemas legales</strong> detectados. Impedimento para transferencia.</p>`;
        }
        if (appState.analysis.security.problems > 0) {
            analysisText += `<p>⚠️ <strong>Problemas de seguridad</strong> detectados. Impacto medio en decisión.</p>`;
        }
        if (appState.analysis.mechanical.problems > 0) {
            analysisText += `<p>⚠️ <strong>Problemas mecánicos</strong> detectados. Afectan confiabilidad.</p>`;
        }
        if (appState.analysis.aesthetic.problems > 0 && 
            appState.analysis.critical.problems === 0 &&
            appState.analysis.legal.problems === 0 &&
            appState.analysis.security.problems === 0 &&
            appState.analysis.mechanical.problems === 0) {
            analysisText += `<p>✅ <strong>Problemas solo estéticos</strong>. Bajo impacto en decisión.</p>`;
        }
        
        weightAnalysis.innerHTML = analysisText || '<p>Complete la evaluación para ver el análisis.</p>';
    }
    
    // Actualizar reglas aplicadas
    const rulesApplied = document.getElementById('rules-applied');
    if (rulesApplied && appState.appliedRules.length > 0) {
        const rulesHtml = appState.appliedRules.map(rule => `
            <div class="rule-item">
                <div class="rule-header">
                    <strong>${rule.name}</strong>
                    <span class="rule-action">${rule.action}</span>
                </div>
                <div class="rule-condition">
                    <small>Condición: ${rule.condition}</small>
                </div>
                <div class="rule-description">
                    ${rule.description}
                </div>
            </div>
        `).join('');
        
        rulesApplied.innerHTML = rulesHtml;
    } else {
        rulesApplied.innerHTML = '<p>Complete la evaluación para ver las reglas aplicadas.</p>';
    }
}

function updateClassificationSummary() {
    // Esta función actualiza el resumen de clasificación en tiempo real
    // Se podría expandir para mostrar más detalles
}

// ==================== CAPA 5: CONTROL DEL INSPECTOR ====================
function initializeTrafficLightEvents() {
    // Evento para aceptar recomendación AI
    document.getElementById('accept-ai').addEventListener('change', function() {
        if (this.checked) {
            appState.inspectorOverride = false;
            appState.inspectorDecision = appState.systemRecommendation;
            document.getElementById('manual-adjustment').style.display = 'none';
            updateAllDisplays();
        }
    });
    
    // Evento para ajustar manualmente
    document.getElementById('adjust-ai').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('manual-adjustment').style.display = 'block';
        }
    });
    
    // Botones de ajuste manual
    document.querySelectorAll('.manual-light-btn').forEach(button => {
        button.addEventListener('click', function() {
            const status = this.dataset.status;
            
            // Preguntar por el motivo del ajuste
            const reason = prompt('Por favor, explique brevemente por qué ajusta la recomendación del sistema:');
            
            if (reason !== null) {
                appState.inspectorOverride = true;
                appState.inspectorDecision = status;
                appState.overrideReason = reason;
                
                // Actualizar estado
                document.getElementById('status-message').innerHTML = `
                    <span class="status-icon">👨‍🔧</span>
                    <span class="status-text">Decisión profesional activa (${getRecommendationText(status)})</span>
                `;
                
                updateAllDisplays();
            }
        });
    });
}

// ==================== FORMULARIO Y EVENTOS ====================
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
    
    // Reset checklist
    document.getElementById('reset-checklist').addEventListener('click', function() {
        if (confirm('¿Está seguro de reiniciar toda la evaluación? Se perderán todas las selecciones.')) {
            initializeIntelligentChecklist();
            appState.inspectorOverride = false;
            appState.inspectorDecision = null;
            appState.overrideReason = '';
            updateAllDisplays();
        }
    });
}

// ==================== MODAL DE REGLAS ====================
function initializeRulesModal() {
    const modal = document.getElementById('rules-modal');
    const showBtn = document.getElementById('show-rules');
    const closeBtn = document.getElementById('close-rules');
    
    // Cargar reglas en el modal
    const rulesContainer = document.querySelector('.rules-container');
    rulesContainer.innerHTML = professionalRules.map(rule => `
        <div class="rule-modal-item">
            <div class="rule-modal-header">
                <h4>${rule.name}</h4>
                <span class="rule-modal-action">${rule.action}</span>
            </div>
            <div class="rule-modal-body">
                <p><strong>Condición:</strong> ${rule.condition}</p>
                <p><strong>Descripción:</strong> ${rule.description}</p>
                <p class="rule-priority"><small>Prioridad: ${rule.priority}</small></p>
            </div>
        </div>
    `).join('');
    
    // Mostrar modal
    showBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ==================== BOTONES DE ACCIÓN ====================
function initializeActionButtons() {
    // Descargar PDF
    document.getElementById('download-pdf').addEventListener('click', generatePDF);
    
    // Resumen rápido
    document.getElementById('quick-summary').addEventListener('click', function() {
        if (!appState.inspectorDecision) {
            alert('Complete la evaluación primero.');
            return;
        }
        
        const summary = generateQuickSummary();
        alert(summary);
    });
    
    // Contactar
    document.getElementById('contact-btn').addEventListener('click', function() {
        alert('📧 Contacto para versión profesional:\n\nEmail: profesional@akinacheck.com\nTeléfono: +54 9 11 1234-5678\n\nCaracterísticas profesionales:\n✓ Historial ilimitado\n✓ Cálculo automático de costos\n✓ Plantillas personalizables\n✓ Exportación avanzada\n✓ Soporte técnico');
    });
    
    // Toggle preview
    document.getElementById('toggle-preview').addEventListener('click', function() {
        const preview = document.getElementById('report-preview');
        preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
        this.textContent = preview.style.display === 'none' ? 'Mostrar' : 'Ocultar';
    });
}

// ==================== VISTA PREVIA DEL INFORME ====================
function updateReportPreview() {
    // Datos básicos
    document.getElementById('report-fecha').textContent = appState.formData.fecha || '-';
    document.getElementById('report-vehiculo').textContent = appState.formData.vehiculo || '-';
    
    // Resumen ejecutivo
    const executiveSummary = document.getElementById('executive-summary');
    if (executiveSummary) {
        executiveSummary.innerHTML = `
            <div class="executive-grid">
                <div class="executive-item">
                    <strong>Vehículo:</strong> ${appState.formData.vehiculo || '-'}
                </div>
                <div class="executive-item">
                    <strong>Dominio:</strong> ${appState.formData.dominio || '-'}
                </div>
                <div class="executive-item">
                    <strong>Kilometraje:</strong> ${appState.formData.kilometraje ? appState.formData.kilometraje + ' km' : '-'}
                </div>
                <div class="executive-item">
                    <strong>Estado general:</strong> ${getOverallStatus()}
                </div>
            </div>
        `;
    }
    
    // Recomendación inteligente
    const recommendationElement = document.getElementById('intelligent-recommendation');
    if (recommendationElement) {
        if (appState.inspectorDecision) {
            recommendationElement.innerHTML = `
                <div class="recommendation-card ${appState.inspectorDecision}">
                    <div class="recommendation-header">
                        <h4>${getRecommendationText(appState.inspectorDecision)}</h4>
                        ${appState.inspectorOverride ? 
                            '<span class="override-badge">Ajuste profesional</span>' : 
                            '<span class="ai-badge">Sistema Akina IA</span>'
                        }
                    </div>
                    <div class="recommendation-body">
                        <p>${appState.systemExplanation}</p>
                        ${appState.inspectorOverride ? `
                            <div class="inspector-note">
                                <strong>👨‍🔧 Ajuste del inspector:</strong>
                                <p>${appState.overrideReason}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            recommendationElement.innerHTML = '<p class="placeholder">Complete la evaluación para ver la recomendación.</p>';
        }
    }
    
    // Checklist en el informe
    const reportChecklist = document.getElementById('report-checklist');
    if (reportChecklist) {
        const evaluatedItems = Object.entries(appState.checklist)
            .filter(([_, data]) => data.status !== null);
        
        if (evaluatedItems.length > 0) {
            let checklistHtml = '<div class="report-checklist-items">';
            
            evaluatedItems.forEach(([id, data]) => {
                const itemData = checklistData.find(item => item.id == id);
                const statusIcon = data.status === 'ok' ? '✅' : data.status === 'warning' ? '⚠️' : '❌';
                const statusClass = data.status === 'ok' ? 'ok' : data.status === 'warning' ? 'warning' : 'problem';
                
                checklistHtml += `
                    <div class="report-checklist-item ${statusClass}">
                        <div class="report-item-header">
                            <span class="report-item-status">${statusIcon}</span>
                            <span class="report-item-name">${itemData.name}</span>
                            <span class="report-item-category ${itemData.category}">${getCategoryLabel(itemData.category)}</span>
                        </div>
                        <div class="report-item-details">
                            <p><strong>Estado:</strong> ${data.status === 'ok' ? 'OK' : data.status === 'warning' ? 'Atención' : 'Problema'}</p>
                            <p><strong>Impacto:</strong> ${itemData.impact}</p>
                        </div>
                    </div>
                `;
            });
            
            checklistHtml += '</div>';
            reportChecklist.innerHTML = checklistHtml;
        } else {
            reportChecklist.innerHTML = '<p class="placeholder">No hay items evaluados en el checklist.</p>';
        }
    }
}

function getOverallStatus() {
    const totalProblems = Object.values(appState.analysis).reduce((sum, cat) => sum + cat.problems, 0);
    const totalWarnings = Object.values(appState.analysis).reduce((sum, cat) => sum + cat.warnings, 0);
    
    if (totalProblems > 0) return `${totalProblems} problemas críticos`;
    if (totalWarnings > 0) return `${totalWarnings} advertencias`;
    if (Object.values(appState.checklist).some(item => item.status === 'ok')) return 'Buen estado';
    return 'Por evaluar';
}

function generateQuickSummary() {
    if (!appState.inspectorDecision) {
        return 'Complete la evaluación primero.';
    }
    
    const totalProblems = Object.values(appState.analysis).reduce((sum, cat) => sum + cat.problems, 0);
    const totalWarnings = Object.values(appState.analysis).reduce((sum, cat) => sum + cat.warnings, 0);
    
    return `
🚗 RESUMEN RÁPIDO - AKINA CHECK

Vehículo: ${appState.formData.vehiculo || 'No especificado'}
Dominio: ${appState.formData.dominio || 'No especificado'}

📊 EVALUACIÓN:
• Problemas críticos: ${totalProblems}
• Advertencias: ${totalWarnings}
• Items evaluados: ${Object.values(appState.checklist).filter(item => item.status !== null).length}/15

🚦 RECOMENDACIÓN:
${getRecommendationText(appState.inspectorDecision)}
${appState.inspectorOverride ? '(Ajustado por criterio profesional)' : '(Recomendación del sistema)'}

💡 ANÁLISIS:
${appState.systemExplanation}

📝 NOTA:
${appState.overrideReason || 'Basado en análisis automatizado del sistema.'}

---
Generado por Akina Check - Sistema Inteligente
    `.trim();
}

// ==================== FUNCIONES UTILITARIAS ====================
function formatDate(dateString) {
    if (!dateString) return "-";
    
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

// ==================== GENERACIÓN DE PDF ====================
async function generatePDF() {
    if (!appState.inspectorDecision) {
        alert('Complete la evaluación antes de generar el PDF.');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Configuración
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let yPos = margin;
    
    // Logo y título
    pdf.setFontSize(24);
    pdf.setTextColor(40, 53, 147);
    pdf.text('Akina Check', margin, yPos);
    
    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Sistema Inteligente de Evaluación Vehicular', margin, yPos + 8);
    
    yPos += 25;
    
    // Línea separadora
    pdf.setDrawColor(40, 53, 147);
    pdf.setLineWidth(0.5);
    pdf.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;
    
    // Información del vehículo
    pdf.setFontSize(14);
    pdf.setTextColor(0, 0, 0);
    pdf.text('📋 Datos del Vehículo', margin, yPos);
    yPos += 10;
    
    pdf.setFontSize(10);
    pdf.text(`Vehículo: ${appState.formData.vehiculo || '-'}`, margin, yPos);
    pdf.text(`Dominio: ${appState.formData.dominio || '-'}`, pageWidth/2, yPos);
    yPos += 6;
    
    pdf.text(`Fecha: ${appState.formData.fecha || '-'}`, margin, yPos);
    pdf.text(`Kilometraje: ${appState.formData.kilometraje || '-'} km`, pageWidth/2, yPos);
    yPos += 15;
    
    // Recomendación
    pdf.setFontSize(14);
    pdf.text('🚦 Recomendación Inteligente', margin, yPos);
    yPos += 10;
    
    // Color según recomendación
    let recColor;
    switch(appState.inspectorDecision) {
        case 'green': recColor = [46, 125, 50]; break;
        case 'yellow': recColor = [245, 124, 0]; break;
        case 'red': recColor = [198, 40, 40]; break;
        default: recColor = [100, 100, 100];
    }
    
    pdf.setTextColor(recColor[0], recColor[1], recColor[2]);
    pdf.setFontSize(16);
    pdf.text(getRecommendationText(appState.inspectorDecision), margin, yPos);
    yPos += 8;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    const explanationLines = pdf.splitTextToSize(appState.systemExplanation, pageWidth - 2*margin);
    pdf.text(explanationLines, margin, yPos);
    yPos += explanationLines.length * 5 + 10;
    
    // Si hay ajuste del inspector
    if (appState.inspectorOverride) {
        pdf.setTextColor(245, 124, 0);
        pdf.setFontSize(12);
        pdf.text('👨‍🔧 Ajuste Profesional del Inspector', margin, yPos);
        yPos += 8;
        
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        const reasonLines = pdf.splitTextToSize(appState.overrideReason, pageWidth - 2*margin);
        pdf.text(reasonLines, margin, yPos);
        yPos += reasonLines.length * 5 + 10;
    }
    
    // Checklist resumido
    pdf.setFontSize(14);
    pdf.setTextColor(0, 0, 0);
    pdf.text('🔍 Checklist Resumido', margin, yPos);
    yPos += 10;
    
    const evaluatedItems = Object.entries(appState.checklist)
        .filter(([_, data]) => data.status !== null);
    
    evaluatedItems.forEach(([id, data]) => {
        if (yPos > 250) {
            pdf.addPage();
            yPos = margin;
        }
        
        const itemData = checklistData.find(item => item.id == id);
        const statusText = data.status === 'ok' ? '✅ OK' : data.status === 'warning' ? '⚠️ Atención' : '❌ Problema';
        
        pdf.setFontSize(10);
        pdf.text(`${itemData.name}: ${statusText}`, margin, yPos);
        yPos += 6;
    });
    
    // Pie de página
    yPos = 270;
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Desarrollado por AFM Solutions — afmsolutions.com.ar', margin, yPos);
    pdf.text('Sistema Inteligente por Capas - Versión demo 2.0', pageWidth/2, yPos);
    
    // Guardar PDF
    const fileName = `Informe_${appState.formData.dominio || 'vehiculo'}_${new Date().toISOString().slice(0, 10)}.pdf`;
    pdf.save(fileName);
}

// ==================== INICIALIZACIÓN COMPLETA ====================
console.log('✅ Sistema Inteligente Akina Check cargado correctamente');
console.log('🧠 Sistema por capas activo:');
console.log('• Capa 1: Clasificación de ítems');
console.log('• Capa 2: Estado + Peso');
console.log('• Capa 3: Reglas profesionales');
console.log('• Capa 4: Explicación automática');
console.log('• Capa 5: Control del inspector');
