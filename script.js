/* ==========================================================================
   Collège Bilingue Horizon Excellence - Interactive Logic & UI Handlers
   ========================================================================== */

// Lab Data Repository
const labData = {
  physics: {
    badge: "Pratique Électrique & Électronique",
    title: "Laboratoire de Physique & Électrocinétique",
    description: "Équipé de bancs d'essais modernes, nos élèves de la section Anglophone et Francophone réalisent des branchements de circuits électriques réels sur plaques à essai (breadboards), mesurent des tensions et courants avec des multimètres digitaux et vérifient expérimentalement la loi d'Ohm et les lois de Kirchhoff.",
    image: "images/physics.jpg",
    equipmentTag: "TP Montage de circuits sur Plaque à essai",
    specs: [
      "Plaques à essai (Breadboards) sans soudure",
      "Multimètres digitaux & Oscilloscopes",
      "Générateurs de tension continue/variable",
      "Kits d'ampoules, LED, résistances & condensateurs",
      "Sécurité : Blouses & Gants blancs obligatoires",
      "Prépa TP GCE Physics Practicals & BAC C/D"
    ],
    modalContent: `
      <div class="modal-body-container">
        <span class="badge badge-cyan modal-badge">Fiche Technique TP Physique</span>
        <h3 class="modal-title">Montage de Circuits & Mesures Électriques sur Plaque à Essai</h3>
        <img src="images/physics.jpg" alt="TP Physique" class="modal-img">
        
        <h4 class="modal-subtitle">Objectifs Pédagogiques :</h4>
        <ul class="modal-list">
          <li>Apprendre le branchement des composants (résistances, LED, condensateurs) sur plaque à essai sans soudure.</li>
          <li>Mesurer la différence de potentiel (DDP) et l'intensité du courant continu au multimètre.</li>
          <li>Vérifier la loi d'Ohm \(U = R \times I\) et tracer les caractéristiques des dipôles.</li>
        </ul>

        <h4 class="modal-subtitle">Équipements de Protection Indispensables :</h4>
        <p class="modal-text">
          <i class="fa-solid fa-user-nurse icon-gold"></i> <strong>Blouse blanche en coton</strong> et <strong>gants blancs de sécurité</strong> portés durant toute la séance de TP.
        </p>

        <button class="btn btn-primary modal-close-btn" onclick="closeModal('labModal')">Fermer la fiche</button>
      </div>
    `
  },
  chemistry: {
    badge: "Analyses & Dosages Volumétriques",
    title: "Laboratoire de Chimie Analytique & Minérale",
    description: "Les élèves pratiquent des réactions acido-basiques et des titrations volumétriques de précision à l'aide de burettes graduées en verre et de fioles erlenmeyers. Ils manipulent des réactifs réels (HCl, NaOH, phenolphthaléine) en observant les changements d'indicateurs colorés.",
    image: "images/chemistry.jpg",
    equipmentTag: "TP Titration avec Burette & Erlenmeyer",
    specs: [
      "Burettes graduées de précision sur potence",
      "Erlenmeyers, bechers & pipettes jaugées",
      "Solutions titrées (HCl, NaOH) & indicateurs colorés",
      "Agitateurs magnétiques chauffants",
      "Sécurité : Blouses & Gants blancs réglementaires",
      "Conforme GCE Chemistry Practicals & BAC D/C"
    ],
    modalContent: `
      <div class="modal-body-container">
        <span class="badge badge-primary modal-badge modal-badge-pink">Fiche Technique TP Chimie</span>
        <h3 class="modal-title">Dosage Volumétrique Acide-Base (Titration)</h3>
        <img src="images/chemistry.jpg" alt="TP Chimie" class="modal-img">
        
        <h4 class="modal-subtitle">Procédure Expérimentale :</h4>
        <ul class="modal-list">
          <li>Remplissage et ajustement du zéro de la burette avec la solution titrante d'acide chlorhydrique (HCl).</li>
          <li>Prélèvement précis à la pipette d'une solution de soude (NaOH) introduite dans l'erlenmeyer avec quelques gouttes d'indicateur.</li>
          <li>Versage goutte à goutte jusqu'au virage persistant de la couleur au point d'équivalence.</li>
        </ul>

        <h4 class="modal-subtitle">Consignes de Sécurité Strictes :</h4>
        <p class="modal-text">
          <i class="fa-solid fa-shield-virus icon-pink"></i> Port obligatoire de la <strong>blouse blanche à manches longues</strong>, des <strong>gants blancs étanches</strong> et des lunettes de protection.
        </p>

        <button class="btn btn-primary modal-close-btn" onclick="closeModal('labModal')">Fermer la fiche</button>
      </div>
    `
  },
  biology: {
    badge: "Sciences Marines & Zoologie",
    title: "Laboratoire de Biologie Marine & SVT",
    description: "Équipement complet pour l'étude des invertébrés marins et des écosystèmes aquatiques du littoral camerounais. Les élèves observent et dissèquent des étoiles de mer, des crustacés (crabes) et des huîtres, puis examinent les structures cellulaires au microscope binoculaire.",
    image: "images/biology.jpg",
    equipmentTag: "TP Biologie Marine : Étoiles de mer & Crustacés",
    specs: [
      "Microscopes binoculaires optiques haute définition",
      "Spécimens marins : Étoiles de mer, Crustacés, Huîtres",
      "Cuves de dissection & trousses à dissection complètes",
      "Lames et lamelles pour préparations microscopiques",
      "Sécurité : Blouses & Gants blancs en nitrile",
      "Programme GCE Biology Practicals & SVT Bac D"
    ],
    modalContent: `
      <div class="modal-body-container">
        <span class="badge badge-cyan modal-badge modal-badge-teal">Fiche Technique TP Biologie Marine</span>
        <h3 class="modal-title">Observation & Dissection d'Invertébrés Marines</h3>
        <img src="images/biology.jpg" alt="TP Biologie Marine" class="modal-img">
        
        <h4 class="modal-subtitle">Activités Pratiques au Programme :</h4>
        <ul class="modal-list">
          <li>Étude morphologique externe et anatomique des <strong>étoiles de mer</strong> (système aquifère).</li>
          <li>Dissection fine des <strong>crustacés</strong> et analyse des branches et de la carapace.</li>
          <li>Observation des coquilles d'<strong>huîtres</strong> et prélèvement de tissus pour étude au microscope.</li>
        </ul>

        <h4 class="modal-subtitle">Équipement de Protection Indispensable :</h4>
        <p class="modal-text">
          <i class="fa-solid fa-hand-holding-medical icon-teal"></i> Les élèves portent obligatoirement la <strong>blouse blanche scientifique</strong> et des <strong>gants blancs jetables</strong> pour toute manipulation d'animaux marins.
        </p>

        <button class="btn btn-primary modal-close-btn" onclick="closeModal('labModal')">Fermer la fiche</button>
      </div>
    `
  }
};

// Switch Lab Tab Display
function switchLab(labKey) {
  const data = labData[labKey];
  if (!data) return;

  // Update tab button active states
  document.querySelectorAll('.lab-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lab') === labKey) {
      btn.classList.add('active');
    }
  });

  // Update Content with Smooth Animation
  const displayCard = document.getElementById('labDisplayCard');
  displayCard.style.opacity = '0.4';
  
  setTimeout(() => {
    document.getElementById('labCategoryBadge').textContent = data.badge;
    document.getElementById('labTitle').textContent = data.title;
    document.getElementById('labDescription').textContent = data.description;
    document.getElementById('labImage').src = data.image;
    document.getElementById('labEquipmentTag').innerHTML = `<i class="fa-solid fa-camera"></i> ${data.equipmentTag}`;
    
    // Update specs list
    const specsContainer = document.getElementById('labSpecsList');
    specsContainer.innerHTML = data.specs.map(spec => 
      `<li><i class="fa-solid fa-check" style="color: var(--accent-cyan);"></i> ${spec}</li>`
    ).join('');

    displayCard.style.opacity = '1';
  }, 150);
}

// Open Lab Modal
function openLabModal(labKey) {
  const data = labData[labKey] || labData['physics'];
  document.getElementById('labModalContent').innerHTML = data.modalContent;
  document.getElementById('labModal').classList.add('active');
}

// Open Program Details Modal
function openProgramDetails(subsystem) {
  let content = '';
  if (subsystem === 'francophone') {
    content = `
      <div class="modal-body-container">
        <span class="badge badge-primary modal-badge">Détails Sous-Système Francophone</span>
        <h3 class="modal-title">Programme d'Enseignement Francophone (Cameroun)</h3>
        
        <div class="modal-section-item">
          <h4 class="modal-subtitle"><i class="fa-solid fa-book"></i> Premier Cycle (6ème, 5ème, 4ème, 3ème)</h4>
          <p class="modal-text">Formation de base solide en Français, Anglais, Mathématiques, SVT, Physique-Chimie, Histoire-Géo, Informatique. Examen sanctionnant : <strong>BEPC</strong>.</p>
        </div>

        <div class="modal-section-item">
          <h4 class="modal-subtitle"><i class="fa-solid fa-atom"></i> Second Cycle Scientifique (Séries C, D, TI)</h4>
          <p class="modal-text"><strong>Série C</strong> : Mathématiques & Physique de haut niveau.<br><strong>Série D</strong> : Sciences de la Vie et de la Terre & Chimie expérimentale.<br><strong>Série TI</strong> : Technologies de l'Information et Algorithmique.</p>
        </div>

        <div class="modal-section-item">
          <h4 class="modal-subtitle"><i class="fa-solid fa-award"></i> Examens préparés</h4>
          <p class="modal-text">Probatoire (Classe de 1ère) et Baccalauréat Général / Technique (Classe de Terminale).</p>
        </div>

        <button class="btn btn-primary modal-close-btn" onclick="closeModal('programModal')">Fermer</button>
      </div>
    `;
  } else {
    content = `
      <div class="modal-body-container">
        <span class="badge badge-cyan modal-badge">Anglophone Subsystem Details</span>
        <h3 class="modal-title">Cameroon Anglophone Education Syllabus</h3>
        
        <div class="modal-section-item">
          <h4 class="modal-subtitle"><i class="fa-solid fa-book"></i> First Cycle (Forms 1 to 5)</h4>
          <p class="modal-text">Core subjects: English Language, Mathematics, Physics, Chemistry, Biology, French, History, Economics, Computer Science. Examination: <strong>GCE Ordinary Level (O-Level)</strong>.</p>
        </div>

        <div class="modal-section-item">
          <h4 class="modal-subtitle"><i class="fa-solid fa-flask"></i> High School Science Stream (Lower & Upper Sixth)</h4>
          <p class="modal-text">Combinations: Physics-Chemistry-Maths (PCM), Biology-Chemistry-Physics (BCP), Maths-Further Maths-Physics. Examination: <strong>GCE Advanced Level (A-Level)</strong> with full laboratory practical tests.</p>
        </div>

        <button class="btn btn-primary modal-close-btn" onclick="closeModal('programModal')">Close</button>
      </div>
    `;
  }
  document.getElementById('programModalContent').innerHTML = content;
  document.getElementById('programModal').classList.add('active');
}

// Image Lightbox
function openImageLightBox(imgSrc, title, caption) {
  document.getElementById('lightboxImage').src = imgSrc;
  document.getElementById('lightboxTitle').textContent = title;
  document.getElementById('lightboxCaption').textContent = caption;
  document.getElementById('lightboxModal').classList.add('active');
}

// Close Modal Generic
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Quick Admission Modal Shortcut
function openAdmissionModal() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.remove('mobile-open');
  }
  document.getElementById('admission').scrollIntoView({ behavior: 'smooth' });
}

// Admission Form Submission Handler
function handleAdmissionSubmit(event) {
  event.preventDefault();
  
  const parentName = document.getElementById('parentName').value;
  const studentName = document.getElementById('studentName').value;
  const subsystem = document.getElementById('subsystemSelect').value;

  showToast(`Félicitations M./Mme ${parentName} ! La demande d'admission pour ${studentName} (${subsystem.toUpperCase()}) a été enregistrée avec succès. Notre secrétariat vous recontactera par WhatsApp.`);
  
  document.getElementById('admissionForm').reset();
}

// Toast Notification System
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  
  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

// Mobile Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }

  // Close nav menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
    });
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
