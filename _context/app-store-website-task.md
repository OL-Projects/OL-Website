# OL Website Task — App Store Compliance Pages
**Created:** March 2, 2026
**Purpose:** Complete the OL website with required App Store pages (Privacy Policy, Terms of Service, Support)
**Priority:** Must complete BEFORE App Store submission

---

## 📱 APP STATUS (100% Code Complete)

### What OL Is
OL is an iOS business management app for delivery/logistics businesses. Features include:
- **AI Assistant** — Multi-provider (OpenAI, Anthropic, Google Gemini) with voice chat
- **Client Management** — CRM with contacts, orders, delivery tracking
- **Route Planning** — Map-based navigation with route optimization
- **Delivery Management** — Orders, baskets, delivery records, proof photos
- **Notes & Tasks** — Rich notes with blocks, task management (Things-style)
- **Document Engine** — PDF viewing, plan sheets, document management
- **Team Chat** — Real-time messaging with presence
- **Financial Tracking** — Orders, invoices, export reports
- **Tip Jar** — Consumable IAPs (no subscriptions, no Restore Purchases needed)
- **Siri & Shortcuts** — 20+ App Intents for hands-free operation
- **Eye Tracking** — ARKit-based accessibility features

### Technical Stack
- **Platform:** iOS 26+ (iPhone)
- **Language:** Swift 6.2.1
- **Framework:** SwiftUI
- **Backend:** Firebase (Firestore)
- **AI:** OpenAI, Anthropic Claude, Google Gemini (user provides own API keys)
- **Bundle ID:** `com.spirokaglis.ol`
- **Firebase Project:** `ol-app-60aad`

### Commits (App Store Compliance)
1. P0 compliance: PrivacyInfo.xcprivacy, #if DEBUG guards, NavigationStack migration, autocapitalization
2. Legal compliance: NSFaceIDUsageDescription, Privacy Policy & Terms links in Settings
3. Privacy & branding: removed personal name, updated URLs, contact email
4. Final compliance: ITSAppUsesNonExemptEncryption, navigation disclaimer

### Security Audit Results (All Passed ✅)
- Zero hardcoded API keys/secrets in code
- Zero personal information in source code or binary
- Zero trademark/copyright violations
- Zero "Cline" references
- API keys stored in iOS Keychain (hardware-encrypted, device-local)
- Firebase config key in GoogleService-Info.plist (standard, protected by security rules)
- Code signing: Apple Development certificate under SPIRO ALEX KAGLIS (5GT6Q87L73)

---

## 🌐 WEBSITE REQUIREMENTS

### Required Pages (App References These URLs)

The iOS app's Settings → LEGAL section links to these exact URLs:

1. **Privacy Policy** → `https://ol.support/privacy`
2. **Terms of Service** → `https://ol.support/terms`
3. **Contact Support** → `mailto:admin@olpro.ca`

### Domain
- The app references `ol.support` — you need to either:
  - A) Purchase and configure `ol.support` domain, OR
  - B) Use a different domain and update the URLs in the app's SettingsView.swift (lines 332-345)

### Current Website Structure
The existing website at `/Users/spiro/Desktop/ol-website/` is:
- **Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **i18n:** Multilingual with `[lang]` route segments
- **Existing pages:** about, approach, apps, contact, database, resources, search
- **Build:** `.next/` directory present (previously built)

---

## 📋 PRIVACY POLICY — Must Include

Apple requires these sections for your app's specific features:

### Data Collection
- **Camera** — Delivery proof photos (stored locally + optionally in Firebase)
- **Location** — Map navigation, delivery tracking, nearby search
- **Contacts** — Client linking from device contacts
- **Calendar** — AI-assisted event creation
- **Reminders** — AI-assisted reminder management
- **Microphone** — Voice conversations with AI assistant
- **Speech Recognition** — Voice-to-text transcription
- **Face ID** — Secure authentication, eye tracking
- **Photos** — Delivery photo library access
- **Local Network** — SSH connections, Wake-on-LAN

### Data Storage
- Core Data (on-device, local)
- Firebase Firestore (cloud sync)
- iOS Keychain (API keys — encrypted, device-local)
- UserDefaults (app preferences)

### Third-Party Services
- **Firebase** (Google) — Cloud database, analytics disabled
- **OpenAI** — AI chat, voice, TTS (user provides own key)
- **Anthropic** — AI chat (user provides own key)
- **Google Gemini** — AI chat (user provides own key)
- **OpenRouter** — AI model routing (user provides own key)
- **Apple Maps** — Navigation and mapping

### Important Privacy Points
- AI API keys are entered by users, stored in device Keychain only
- No user data is sold to third parties
- No advertising or ad tracking (IS_ADS_ENABLED = false)
- No analytics tracking (IS_ANALYTICS_ENABLED = false)
- Users can delete all data via Settings → Reset All Data

---

## 📋 TERMS OF SERVICE — Must Include

### Key Sections Needed
1. **Acceptance of Terms**
2. **Description of Service** — Business management tool
3. **User Responsibilities** — Users provide their own AI API keys
4. **API Key Disclaimer** — OL is not responsible for charges incurred on users' AI provider accounts
5. **Navigation Disclaimer** — "Directions and maps provided by the app may not be accurate" (Apple Maps requirement)
6. **Intellectual Property** — OL brand, app content
7. **Limitation of Liability** — Standard limitation clauses
8. **Data & Privacy** — Reference to privacy policy
9. **Tip Jar / Purchases** — Consumable IAPs, no refund policy (Apple handles refunds)
10. **Termination** — Right to terminate service
11. **Governing Law** — Canadian law (Ontario)
12. **Changes to Terms** — Right to update terms
13. **Contact** — admin@olpro.ca

---

## 📋 SUPPORT/CONTACT PAGE

### Required Info
- **Email:** admin@olpro.ca
- **App Name:** OL
- **Developer:** SPIRO ALEX KAGLIS
- **Team ID:** 5GT6Q87L73

---

## 🎯 REMAINING APP STORE STEPS (After Website)

### Still Needed for App Store Submission
1. **App Icon** — 1024×1024 PNG, no alpha channel, no rounded corners (Apple rounds them)
   - The project has NO Assets.xcassets — this must be created
2. **Screenshots** — For iPhone 17 Pro Max (6.9"), iPhone 16e (6.1"), optional iPad
3. **App Store Connect Record** — Create app, set pricing (free with IAP tip jar)
4. **Description** — App Store description (4000 char max)
5. **Keywords** — Up to 100 characters
6. **Category** — Business or Productivity
7. **Age Rating** — Complete questionnaire
8. **Archive & Upload** — Xcode archive → Upload to App Store Connect

### Firebase Config
```json
{
  "projects": {
    "default": "ol-app-60aad"
  }
}
```

### App Store Connect Settings
- **Bundle ID:** com.spirokaglis.ol
- **Team:** SPIRO ALEX KAGLIS (5GT6Q87L73)
- **Export Compliance:** ITSAppUsesNonExemptEncryption = NO
- **Pricing:** Free (with Tip Jar consumable IAPs)

---

## 🔧 QUICK START — Website Development

```bash
cd /Users/spiro/Desktop/ol-website
npm install
npm run dev
# Opens at http://localhost:3000
```

### Pages to Create
1. `/privacy` — Privacy Policy page
2. `/terms` — Terms of Service page
3. Update existing pages as needed

### Design Language
The iOS app uses a dark glassmorphic design with:
- Dark backgrounds (#0A0A0A range)
- Glassmorphic cards with subtle borders
- Accent colors: Blue primary, Green success, Red error, Orange warning
- SF Pro font (use Inter or similar for web)
- Smooth animations

---

## ✅ VERIFICATION CHECKLIST

Before App Store submission, verify:
- [ ] Privacy Policy page live at configured URL
- [ ] Terms of Service page live at configured URL
- [ ] Contact/support email working (admin@olpro.ca)
- [ ] URLs in app Settings → LEGAL actually load the pages
- [ ] App Icon created and added to Xcode project
- [ ] App Store Connect record created
- [ ] Screenshots captured
- [ ] Build archived and uploaded

---

*This document was generated from a comprehensive App Store compliance audit session. All code changes are committed and backed up at `/Users/spiro/Desktop/OL_App_Backup_20260302_231637/`.*
