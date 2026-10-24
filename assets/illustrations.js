/**
 * SVG Illustrations and Avatars for RuangPulih
 */

const RuangPulihIllustrations = {
  // Woman drinking warm drink with laptop and plants (Hero)
  heroWoman: `
    <svg viewBox="0 0 540 420" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F2EC"/>
          <stop offset="100%" stop-color="#D2E6DC"/>
        </linearGradient>
        <linearGradient id="sweaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3D6E58"/>
          <stop offset="100%" stop-color="#224939"/>
        </linearGradient>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD5BD"/>
          <stop offset="100%" stop-color="#F3B997"/>
        </linearGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B261A"/>
          <stop offset="100%" stop-color="#24140D"/>
        </linearGradient>
        <linearGradient id="plantGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#559976"/>
          <stop offset="100%" stop-color="#2E5C45"/>
        </linearGradient>
      </defs>

      <!-- Background Cozy Room Atmosphere -->
      <rect width="540" height="420" rx="24" fill="url(#bgGrad)"/>
      
      <!-- Window light / subtle glow -->
      <path d="M0 0 H320 L260 420 H0 Z" fill="#FFFFFF" opacity="0.3"/>
      
      <!-- Plants in Background (Left) -->
      <g opacity="0.85">
        <!-- Plant pot -->
        <rect x="235" y="270" width="46" height="50" rx="8" fill="#D3926F"/>
        <ellipse cx="258" cy="270" rx="23" ry="6" fill="#B77350"/>
        <!-- Stems & Leaves -->
        <path d="M258 270 Q250 200 240 160" stroke="#3D6E58" stroke-width="4" stroke-linecap="round"/>
        <path d="M258 270 Q270 210 285 180" stroke="#3D6E58" stroke-width="3" stroke-linecap="round"/>
        <path d="M258 270 Q230 220 215 200" stroke="#3D6E58" stroke-width="3" stroke-linecap="round"/>
        
        <!-- Big lush leaves -->
        <path d="M240 160 C220 170 210 140 235 125 C255 140 250 165 240 160 Z" fill="url(#plantGrad)"/>
        <path d="M285 180 C305 190 310 165 295 150 C275 160 275 180 285 180 Z" fill="url(#plantGrad)"/>
        <path d="M215 200 C195 210 195 185 215 175 C230 185 225 205 215 200 Z" fill="url(#plantGrad)"/>
      </g>

      <!-- Cozy Table -->
      <rect x="240" y="340" width="300" height="80" rx="12" fill="#E6CEB5"/>
      <rect x="240" y="340" width="300" height="12" fill="#D4B698"/>

      <!-- Stack of Books & Notebook -->
      <rect x="310" y="325" width="130" height="16" rx="4" fill="#F8E3C5"/>
      <rect x="316" y="312" width="120" height="15" rx="4" fill="#6A9A84"/>
      <rect x="306" y="296" width="136" height="17" rx="4" fill="#E28F6E"/>

      <!-- Laptop (Right side) -->
      <polygon points="430,340 540,340 525,245 440,245" fill="#4B5563"/>
      <polygon points="445,250 520,250 535,335 435,335" fill="#2B323B"/>
      <!-- Apple / RuangPulih logo on laptop lid -->
      <circle cx="482" cy="290" r="4" fill="#9CA3AF" opacity="0.6"/>

      <!-- WOMAN CHARACTER -->
      <!-- Back hair -->
      <path d="M300 140 C270 140 245 190 250 260 C255 310 270 340 295 360 C305 320 310 290 310 260 Z" fill="url(#hairGrad)"/>

      <!-- Torso / Knit Sweater -->
      <path d="M260 360 C265 295 300 240 375 240 C430 240 460 295 465 360 L450 420 L270 420 Z" fill="url(#sweaterGrad)"/>
      <!-- Ribbed collar -->
      <path d="M340 240 Q370 255 400 240 Q370 270 340 240 Z" fill="#224939"/>

      <!-- Neck -->
      <path d="M352 205 L352 245 C365 250 375 250 388 245 L388 205 Z" fill="url(#skinGrad)"/>

      <!-- Head & Face -->
      <ellipse cx="370" cy="180" rx="36" ry="44" fill="url(#skinGrad)"/>

      <!-- Facial features (Peaceful, smiling, eyes closed) -->
      <!-- Left Eye closed curve -->
      <path d="M348 178 Q356 186 364 178" stroke="#3B261A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Right Eye closed curve -->
      <path d="M376 178 Q384 186 392 178" stroke="#3B261A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Gentle Eyebrows -->
      <path d="M346 168 Q355 163 365 167" stroke="#3B261A" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M375 167 Q385 163 394 168" stroke="#3B261A" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- Soft Nose -->
      <path d="M370 180 Q368 190 374 192" stroke="#E39D79" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- Sweet Serene Smile -->
      <path d="M362 203 Q372 214 382 203" stroke="#B84A4A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Cheeks blush -->
      <circle cx="348" cy="192" r="7" fill="#F87171" opacity="0.35"/>
      <circle cx="392" cy="192" r="7" fill="#F87171" opacity="0.35"/>

      <!-- Front Hair / Flowing Waves -->
      <path d="M370 135 C320 135 315 170 315 210 C315 260 330 300 340 330 C332 290 336 220 345 190 C345 170 355 155 375 155 C395 155 410 170 415 190 C420 220 420 270 410 320 C425 290 435 240 430 190 C425 150 410 135 370 135 Z" fill="url(#hairGrad)"/>

      <!-- Arms & Hands holding hot ceramic mug -->
      <!-- Left arm coming in -->
      <path d="M305 320 Q340 325 365 315" stroke="url(#sweaterGrad)" stroke-width="32" stroke-linecap="round"/>
      <!-- Right arm coming in -->
      <path d="M430 320 Q400 325 385 315" stroke="url(#sweaterGrad)" stroke-width="32" stroke-linecap="round"/>

      <!-- Ceramic Warm Coffee / Tea Mug -->
      <rect x="360" y="285" width="34" height="38" rx="8" fill="#F8FAFC"/>
      <!-- Mug handle -->
      <path d="M394 293 Q404 293 404 304 Q404 314 394 314" stroke="#F8FAFC" stroke-width="4.5" fill="none"/>
      <!-- Hands wrapped around mug -->
      <path d="M356 295 Q360 318 368 318" stroke="url(#skinGrad)" stroke-width="9" stroke-linecap="round"/>
      <path d="M392 295 Q388 318 380 318" stroke="url(#skinGrad)" stroke-width="9" stroke-linecap="round"/>
      <!-- Gentle steam rising from coffee -->
      <path d="M372 278 Q368 268 373 258" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.75"/>
      <path d="M380 275 Q384 265 379 255" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.75"/>
    </svg>
  `,

  // Terracotta plant in pot for streak & motivation
  plantPot: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Pot -->
      <path d="M32 60 L38 88 Q39 92 44 92 L56 92 Q61 92 62 88 L68 60 Z" fill="#D97757"/>
      <rect x="28" y="54" width="44" height="9" rx="3" fill="#BF5C3B"/>
      <!-- Soil -->
      <ellipse cx="50" cy="55" rx="18" ry="4" fill="#6B3A24"/>
      <!-- Leaves -->
      <path d="M50 54 Q48 35 32 28 Q44 26 50 40 Q56 24 68 28 Q52 35 50 54 Z" fill="#2E7D58"/>
      <path d="M50 40 Q38 16 50 8 Q62 16 50 40 Z" fill="#429A70"/>
      <path d="M50 48 Q32 46 22 42 Q32 38 48 44 Z" fill="#5EAA85"/>
      <path d="M50 48 Q68 46 78 42 Q68 38 52 44 Z" fill="#5EAA85"/>
      <!-- Sparkle -->
      <path d="M72 16 L74 21 L79 23 L74 25 L72 30 L70 25 L65 23 L70 21 Z" fill="#F59E0B"/>
    </svg>
  `,

  // Zen Mindfulness Meditation
  mindfulnessMeditation: `
    <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EAF6F0"/>
          <stop offset="100%" stop-color="#D4ECE0"/>
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="12" fill="url(#zenBg)"/>
      <!-- Plants background -->
      <path d="M60 170 Q45 110 80 80 Q95 110 70 170" fill="#589E7E" opacity="0.6"/>
      <path d="M220 170 Q235 110 200 80 Q185 110 210 170" fill="#589E7E" opacity="0.6"/>
      <!-- Meditating person silhouette -->
      <!-- Head -->
      <circle cx="140" cy="65" r="16" fill="#224939"/>
      <!-- Hair bun -->
      <circle cx="140" cy="46" r="6" fill="#153327"/>
      <!-- Torso -->
      <path d="M125 84 C120 105 120 125 120 135 L160 135 C160 125 160 105 155 84 Z" fill="#3D755C"/>
      <!-- Legs crossed / Lotus -->
      <path d="M100 148 C100 132 120 130 140 134 C160 130 180 132 180 148 C175 156 105 156 100 148 Z" fill="#224939"/>
      <!-- Zen circle halo -->
      <circle cx="140" cy="75" r="42" stroke="#A7D4C0" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
    </svg>
  `,

  // Desk Stress Management
  stressManagement: `
    <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="deskBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F2F7F4"/>
          <stop offset="100%" stop-color="#DEECE3"/>
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="12" fill="url(#deskBg)"/>
      <!-- Desk lamp -->
      <path d="M50 140 L50 90 Q50 70 70 70 L90 70" stroke="#718096" stroke-width="3" fill="none"/>
      <polygon points="85,65 105,75 88,85" fill="#E2E8F0"/>
      <!-- Desk line -->
      <rect x="30" y="140" width="220" height="10" rx="4" fill="#C5B19A"/>
      <!-- Person sitting calmly -->
      <circle cx="145" cy="80" r="15" fill="#F4A261"/>
      <path d="M130 75 C130 65 142 62 155 65 C162 70 162 82 155 84 Z" fill="#3E2723"/>
      <!-- Body -->
      <path d="M130 96 C125 110 125 130 125 140 L165 140 C165 130 165 110 160 96 Z" fill="#4A7C59"/>
      <!-- Laptop -->
      <polygon points="175,140 215,140 210,115 180,115" fill="#4A5568"/>
      <!-- Calm tea mug -->
      <rect x="110" y="128" width="10" height="12" rx="2" fill="#E2E8F0"/>
    </svg>
  `,

  // Work Life Balance Stretch
  workLifeBalance: `
    <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wlbBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF8F0"/>
          <stop offset="100%" stop-color="#FCEBD6"/>
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="12" fill="url(#wlbBg)"/>
      <!-- Sun window light -->
      <circle cx="210" cy="50" r="24" fill="#FDE68A" opacity="0.6"/>
      <!-- Happy stretching person -->
      <circle cx="140" cy="65" r="14" fill="#F4A261"/>
      <path d="M130 60 C130 50 145 48 152 54 C155 62 148 70 140 68 Z" fill="#2E1810"/>
      <!-- Cheerful smile -->
      <path d="M138 67 Q142 71 146 67" stroke="#9A3412" stroke-width="1.5" fill="none"/>
      <!-- Raised stretching arms -->
      <path d="M128 88 L105 52 Q100 48 106 44 Q112 44 116 54 L132 82" fill="#E76F51"/>
      <path d="M152 88 L175 52 Q180 48 174 44 Q168 44 164 54 L148 82" fill="#E76F51"/>
      <!-- Torso -->
      <path d="M128 84 L126 135 L154 135 L152 84 Z" fill="#E76F51"/>
      <!-- Office chair base -->
      <rect x="115" y="135" width="50" height="8" rx="3" fill="#334155"/>
      <line x1="140" y1="143" x2="140" y2="160" stroke="#334155" stroke-width="4"/>
    </svg>
  `,

  // Alex Avatar
  alexAvatar: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#E8F2EC"/>
      <!-- Hair back -->
      <path d="M26 45 C24 65 30 82 36 92 C42 96 58 96 64 92 C70 82 76 65 74 45 Z" fill="#3D2619"/>
      <!-- Shoulders -->
      <path d="M22 95 C25 80 35 74 50 74 C65 74 75 80 78 95 Z" fill="#285943"/>
      <!-- Face -->
      <ellipse cx="50" cy="48" rx="20" ry="24" fill="#FCD5BD"/>
      <!-- Hair front bangs -->
      <path d="M30 40 C35 30 65 30 70 40 C65 36 55 35 50 38 C45 35 35 36 30 40 Z" fill="#3D2619"/>
      <!-- Eyes & Smile -->
      <circle cx="43" cy="48" r="2.5" fill="#2B1810"/>
      <circle cx="57" cy="48" r="2.5" fill="#2B1810"/>
      <path d="M46 56 Q50 60 54 56" stroke="#C2410C" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>
  `,

  // Counselor Dewi Saraswati
  counselorDewi: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#E6F4EA"/>
      <path d="M22 96 C26 78 36 72 50 72 C64 72 74 78 78 96 Z" fill="#224939"/>
      <path d="M42 72 L50 82 L58 72 Z" fill="#FFFFFF"/>
      <!-- Face -->
      <ellipse cx="50" cy="46" rx="19" ry="22" fill="#F7D0B7"/>
      <!-- Professional Hair tied neatly -->
      <path d="M31 44 C31 28 69 28 69 44 C69 56 65 65 65 65 C62 48 58 35 50 35 C42 35 38 48 35 65 C35 65 31 56 31 44 Z" fill="#20150F"/>
      <!-- Glasses -->
      <rect x="36" y="42" width="11" height="8" rx="2" stroke="#4B5563" stroke-width="1.5" fill="none"/>
      <rect x="53" y="42" width="11" height="8" rx="2" stroke="#4B5563" stroke-width="1.5" fill="none"/>
      <line x1="47" y1="46" x2="53" y2="46" stroke="#4B5563" stroke-width="1.5"/>
      <!-- Warm smile -->
      <path d="M46 57 Q50 61 54 57" stroke="#B91C1C" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </svg>
  `,

  // Counselor Raka Pratama
  counselorRaka: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#E8EFF8"/>
      <path d="M22 96 C26 78 36 72 50 72 C64 72 74 78 78 96 Z" fill="#1E3A5F"/>
      <path d="M44 72 L50 80 L56 72 Z" fill="#FFFFFF"/>
      <ellipse cx="50" cy="46" rx="19" ry="22" fill="#F3CBB1"/>
      <!-- Short neat men hair -->
      <path d="M31 38 C31 26 69 26 69 38 C67 30 60 27 50 27 C40 27 33 30 31 38 Z" fill="#1C1917"/>
      <!-- Eyes & Beard shadow -->
      <circle cx="43" cy="45" r="2.2" fill="#1C1917"/>
      <circle cx="57" cy="45" r="2.2" fill="#1C1917"/>
      <path d="M45 56 Q50 60 55 56" stroke="#9A3412" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M40 58 Q50 67 60 58" stroke="#D1A78B" stroke-width="2" fill="none"/>
    </svg>
  `,

  // Counselor Siti Aulia
  counselorSiti: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#FBF0E8"/>
      <!-- Modern modest pastel hijab/outfit -->
      <path d="M22 96 C25 76 35 70 50 70 C65 70 75 76 78 96 Z" fill="#7C6354"/>
      <path d="M28 45 C28 26 72 26 72 45 C72 65 65 75 50 75 C35 75 28 65 28 45 Z" fill="#CBB6A5"/>
      <ellipse cx="50" cy="48" rx="15" ry="18" fill="#FCD5BD"/>
      <circle cx="45" cy="48" r="2" fill="#291811"/>
      <circle cx="55" cy="48" r="2" fill="#291811"/>
      <path d="M46 56 Q50 60 54 56" stroke="#B91C1C" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    </svg>
  `
};
