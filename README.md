# 🛰️ TextHopping

**TextHopping** is a privacy-first, peer-to-peer, serverless messaging application built with **React Native + Expo**.  
It enables secure communication without centralized servers, giving users full control over their identity, data, and device storage.

---

## 🚀 Features

- 🔐 **Identity System**
  - Based on user-defined **3 secret words + password**
  - Uses biometric authentication (Face ID / Fingerprint)
  - Generates a cryptographic Ed25519 keypair for each identity
  - Same 3 words + password = same identity across devices (if biometrics allow)

- 💬 **Messaging Architecture**
  - Uses **WebRTC** (with STUN-only) for real-time peer-to-peer communication
  - Messages are **signed**, **encrypted**, and **locally queued** if peer is offline
  - Devices store only the **last 500 messages per contact**, auto-cleaned

- 📱 **QR-Based Peer Discovery**
  - No usernames, phone numbers, or central registries
  - Connect by scanning a QR code that contains your alias, public key, and peerId
  - Both users must mutually accept a connection

- 🔒 **Full Local Encryption**
  - All messages are stored only on your device
  - Encrypted at rest using device-specific keys and biometrics

- 🎨 **Minimalist UI**
  - Clean and simple navigation (stack-based)
  - Custom color scheme: `Cyan (#00BCD4)`, `Indigo (#3F51B5)`, `Black (#000000)`

---

## 📂 Folder Structure

app/
    login/index.tsx # Login screen (3 words + password)
    create/index.tsx # Create new identity screen (WIP)
     home/index.tsx # Chat home screen
    chat/[peerId].tsx # Chat thread per peer
    settings/index.tsx # Settings screen
    _layout.tsx # Stack navigation setup

---

## 🛠 Tech Stack

- **Frontend:** React Native + Expo
- **Navigation:** expo-router
- **Local Storage:** AsyncStorage (with encryption)
- **Biometrics:** expo-local-authentication
- **Camera/QR:** react-native-vision-camera (planned)
- **P2P Communication:** WebRTC (STUN-only)

---

## 🧪 Status

> 🧩 This project is under active development. Major modules like:
> - biometric key locking
> - encrypted local storage
> - WebRTC signaling
> - QR code scanner
> are being incrementally added.

---

## 🧠 Philosophy

> TextHopping is designed to give **you** full ownership over your data.  
> No server = no middleman. Your identity is yours alone.

---

## 🤝 Contributing

We welcome contributions from the community!

Whether you're fixing bugs, adding features, improving UI/UX, or working on performance — PRs are appreciated.

### Steps to Contribute

1. 🍴 Fork the repository
2. 👯 Clone your fork locally
3. 📦 Run `npm install`
4. 🚀 Run `npx expo start`
5. 📬 Submit a Pull Request with clear title & description

---

## 📃 License

This project is open-source under the [MIT License](LICENSE).

---

## ✨ Credits

Built with ❤️ by the TextHopping team and the open-source community.

---

