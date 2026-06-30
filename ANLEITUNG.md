# Glimm – Installationsanleitung über GitHub Pages

## 1. Repository erstellen
1. Auf github.com einloggen → oben rechts "+" → "New repository"
2. Name z.B. `glimm` → "Public" auswählen → "Create repository"

## 2. Dateien hochladen
1. Im neuen Repo auf "Add file" → "Upload files" klicken
2. Diese 5 Dateien reinziehen:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `icon-maskable-512.png`
3. Unten "Commit changes" klicken

## 3. GitHub Pages aktivieren
1. Im Repo auf "Settings" → links "Pages"
2. Bei "Branch" → `main` auswählen, Ordner `/ (root)` → "Save"
3. Nach ca. 1 Minute erscheint oben die Live-URL, z.B.:
   `https://DEINNAME.github.io/glimm/`

## 4. Auf dem Handy installieren
1. Die URL aus Schritt 3 in Chrome auf dem Samsung Galaxy A37 öffnen
2. Unten erscheint automatisch der Banner **"Als App installieren"**
   → einfach auf "Installieren" tippen
3. Alternativ über Chrome-Menü (⋮) → "App installieren"

Danach liegt Glimm als eigenes App-Icon auf dem Homescreen, läuft im Vollbild
ohne Browserleiste und funktioniert komplett offline. Alle Daten bleiben nur
lokal auf dem Gerät gespeichert.

## Zur Erinnerungsfunktion (ehrlich erklärt)

Glimm versucht zusätzlich, sich selbst stündlich kurz im Hintergrund zu
melden (Periodic Background Sync, nur Chrome/Android, nur als installierte
App). Das ist ein Bonus-Feature von Google, kein garantierter Wecker — das
Betriebssystem darf das aus Akkugründen verzögern oder überspringen.

Für eine 100% verlässliche stündliche Erinnerung bleibt der normale
Handy-Wecker (5–23 Uhr, stündlich) die sicherste Lösung. Eine technisch
absolut garantierte Push-Benachrichtigung bräuchte einen eigenen Server —
das würde aber gegen "komplett offline, kein Konto" gehen, was hier bewusst
vermieden wurde.
